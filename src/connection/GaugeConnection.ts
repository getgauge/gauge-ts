import { EventEmitter } from "events";
import { Socket } from "net";
import { Reader } from "protobufjs";
import { gauge } from "../gen/messages";

export class GaugeConnection extends EventEmitter {

  private readonly _socket: Socket;
  private readonly _host: string;

  constructor() {
    super();
    this._socket = new Socket();
    this._host = "127.0.0.1";
  }

  public start(): void {
    this._socket.connect(GaugeConnection.getGaugeInternalPort(), this._host);
    this._socket.on("data", (data: ArrayBuffer | SharedArrayBuffer) => {
      this.messageHandler(data);
    });
    this._socket.on("error", (err) => {
      throw err;
    });
  }

  public write(message: gauge.messages.IMessage): void {
    const m = gauge.messages.Message.create(message);
    const encoded = gauge.messages.Message.encodeDelimited(m);

    this._socket.write(encoded.finish());
  }

  private messageHandler(data: ArrayBuffer | SharedArrayBuffer): void {
    const r = new Reader(Buffer.from(data));

    while (r.pos < r.len) {
      const m = gauge.messages.Message.decodeDelimited(r);

      this.emit("messageReceived", m);
    }
  }

  private static getGaugeInternalPort(): number {
    const p = process.env.GAUGE_INTERNAL_PORT;

    if (p == "") {
      throw `GAUGE_INTERNAL_PORT is not set`;
    }

    return (p as unknown) as number;
  }

}
