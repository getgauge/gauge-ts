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
            if (c.default && c.default.length == 0) { // Check if file contains Step decorator then only create a instance
                try {
                    let instance = new c.default();
                    this.updateRegsitry(file, instance);
                }catch(error) {
                    console.error('Failed to create a instasnce of exported class from '+ file);
                }
            }
        }
    }

    private updateRegsitry(file: string, instance: object) {
        registry.setInstanceForMethodsIn(file, instance);
        hookRegistry.setInstanceForMethodsIn(file, instance)
    }
}