import hookRegistry from "../models/HookRegistry";
import registry from "../models/StepRegistry";
import { Util } from "../utils/Util";

export class ImplLoader {

    public async loadImplementations() {
        registry.clear();
        hookRegistry.clear();
        for (const file of Util.getListOfFiles()) {
            process.env.STEP_FILE_PATH = file;
            let c = await Util.importFile(file);
            try {
                if (c.default && c.default.length == 0) {
                    let instance = new c.default();
                    this.updateRegsitry(file, instance);
                }
            } catch (error) {
                error.message = `${error.message}. Step implemetations classes needs to be exported as default witout any constructor`
                console.error(error);
            }
        }
    }

    private updateRegsitry(file: string, instance: object) {
        registry.setInstanceForMethodsIn(file, instance);
        hookRegistry.setInstanceForMethodsIn(file, instance)
    }
}
