import hookRegistry from "../models/HookRegistry";
import registry from "../models/StepRegistry";
import { Util } from "../utils/Util";

export class ImplLoader {
    public async loadImplementations() {
        registry.clear();
        hookRegistry.clear();
        for (const file of Util.getListOfFiles()) {
            process.env.STEP_FILE_PATH = file;
            let c = await import(file);
            let instance = new c.default();
            this.updateRegsitry(file, instance);
        }
    }

    private updateRegsitry(file: string, instance: object) {
        registry.setInstanceForMethodsIn(file, instance);
        hookRegistry.setInstanceForMethodsIn(file, instance)
    }
}