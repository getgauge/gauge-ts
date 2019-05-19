import hookRegistry from "../models/HookRegistry";
import registry from "../models/StepRegistry";
import { getListOfFiles } from "../utils/fileUtils";

export class ImplLoader {
    public async loadImplementations() {
        registry.clear();
        hookRegistry.clear();
        for (const file of getListOfFiles()) {
            process.env.STEP_FILE_PATH = file;
            await import(file);
        }
    }
}