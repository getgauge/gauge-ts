import { CodeHelper } from "../helpers/CodeHelper";
import hookRegistry from "../models/HookRegistry";
import registry from "../models/StepRegistry";
import { Util } from "../utils/Util";

export class ImplLoader extends CodeHelper {

    public async loadImplementations() {
        registry.clear();
        hookRegistry.clear();
        for (const file of Util.getListOfFiles()) {
            process.env.STEP_FILE_PATH = file;
            let c = await Util.importFile(file);
            if (c.default && c.default.length == 0) {
                try {
                    let instance = new c.default();
                    this.updateRegsitry(file, instance);
                } catch (error) {
                    console.error('Failed to create a instasnce of exported class from ' + file +
                        `Step implemetations classes needs to exported default witout any constructor`);
                }
            }
        }
    }

    private updateRegsitry(file: string, instance: object) {
        registry.setInstanceForMethodsIn(file, instance);
        hookRegistry.setInstanceForMethodsIn(file, instance)
    }
}