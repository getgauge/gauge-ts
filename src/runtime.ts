export class GaugeRuntime {

    private readonly _state: string;

    constructor(state: string) {
        this._state = state;
    }

    public start() {
        if (this._state === "--start") {
            this.startRunner();
        } else if (this._state === "--start") {
            this.initProject();
        } else {
            this.printUsage();
        }
    }

    public startRunner() {
        console.log('staritng the runner');
    }

    public initProject() {
        throw new Error("Method not implemented.");
    }

    public printUsage() {
        throw new Error("Method not implemented.");
    }
}
