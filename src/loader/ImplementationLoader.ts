import { GaugeProjectBuilder } from "./GaugeProjectBuilder";

export class ImplementationLoader {
    private readonly _projectBuilder: GaugeProjectBuilder;
    constructor(projectBuilder: GaugeProjectBuilder) {

        this._projectBuilder = projectBuilder;
    }

    public loadImplementations() {
        this._projectBuilder.build().forEach((file) => {
            require(file);
        })
    }
}


