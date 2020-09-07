import hookRegistry from "../models/HookRegistry";
import registry from "../models/StepRegistry";
import { Util } from "../utils/Util";

type ConstructorType = new () => Record<string, unknown>;

type ModuleType = {
    default: ConstructorType
}

export class ImplLoader {

  public async loadImplementations(): Promise<void> {
    registry.clear();
    hookRegistry.clear();
    for (const file of Util.getListOfFiles()) {
      process.env.STEP_FILE_PATH = file;
      const c = (await Util.importFile(file)) as ModuleType;

      try {
        if (c.default && c.default.length == 0) {
          const instance = new c.default();

          ImplLoader.updateRegistry(file, instance);
        }
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-template-expressions
        error.message = `${error.message}. Step implementations classes needs to be exported as default without any constructor`;
        console.error(error);
      }
    }
  }

  private static updateRegistry(
    file: string,
    instance: Record<string, unknown>
  ) {
    registry.setInstanceForMethodsIn(file, instance);
    hookRegistry.setInstanceForMethodsIn(file, instance);
  }

}
