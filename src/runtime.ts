export class GaugeRuntime {
    private readonly _state: string;
    constructor(state: string) {
        this._state = state;
    }
    public start() {
        console.log(this._state);
    }
}




