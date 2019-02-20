import { Socket } from "net";
import { EventEmitter } from "events";
import { gauge } from '../messages';
import { Reader } from 'protobufjs';

export class GaugeConnection extends EventEmitter {

    private _socket: Socket;
    private _host: string;

    constructor() {
        super();
        this._socket = new Socket();
        this._host = '127.0.0.1'
    }

    public start() {
        this._socket.connect(this.getGaugeInternalPort(), this._host);
        console.log("connected at port", this.getGaugeInternalPort());
        this._socket.on('data', (data: any) => {
            this.messageHandler(data);
        });
        this._socket.on('error', (err) => { throw err; });
    }


    public write(message: gauge.messages.IMessage) {
        const m = gauge.messages.Message.create(message);
        const encoded = gauge.messages.Message.encodeDelimited(m);
        this._socket.write(encoded.finish());
    }

    private messageHandler(data: any): any {
        let r = new Reader(Buffer.from(data));
        while (r.pos < r.len) {
            const m = gauge.messages.Message.decodeDelimited(r);
            this.emit("messageReceived", m);
        }
    }

    private getGaugeInternalPort(): number {
        let p = process.env.GAUGE_INTERNAL_PORT;
        if (p == "") {
            throw `GAUGE_INTERNAL_PORT is not set`;
        }
        return (p as unknown) as number;
    }
}
