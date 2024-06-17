import hookRegistry from "../models/HookRegistry";
import registry from "../models/StepRegistry";
import type { ParameterParser } from "../processors/params/ParameterParser";
import type { ParameterParsingChain } from "../processors/params/ParameterParsingChain";
import { Util } from "../utils/Util";

type ConstructorType = new () => Record<string, unknown>;

type ModuleType = {
  default: ConstructorType;
};

export class ImplLoader {
  private parameterParsignChain: ParameterParsingChain;

  constructor(parameterParsignChain: ParameterParsingChain) {
    this.parameterParsignChain = parameterParsignChain;
  }

  public async loadImplementations(): Promise<void> {
    registry.clear();
    hookRegistry.clear();
    for (const file of Util.getListOfFiles()) {
      try {
        process.env.STEP_FILE_PATH = file;
        const c = (await Util.importFile(file)) as ModuleType;
        if (c.default && c.default.length === 0) {
          const instance = new c.default();
          if (Util.isCustomParameterParser(instance)) {
            this.parameterParsignChain.addCustomParser(
              instance as ParameterParser,
            );
          } else {
            ImplLoader.updateRegistry(file, instance);
          }
        }
      } catch (error) {
        const err = error as Error;

        err.message = `${err.message}. Step implementations classes needs to be exported as default without any constructor`;
        console.error(err);
      }
    }
  }

  private static updateRegistry(
    file: string,
    instance: Record<string, unknown>,
  ) {
    registry.setInstanceForMethodsIn(file, instance);
    hookRegistry.setInstanceForMethodsIn(file, instance);
  }
}
