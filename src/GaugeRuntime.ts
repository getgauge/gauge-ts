/* eslint-disable @typescript-eslint/no-unused-vars */
import { Server, ServerCredentials } from "@grpc/grpc-js";
import { RunnerServiceImpl } from "./RunnerServiceImpl";
import { RunnerService } from "./gen/services_grpc_pb";

export class GaugeRuntime {
  public start(): void {
    const server = new Server();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    server.addService(RunnerService, new RunnerServiceImpl());
    server.bindAsync(
      "127.0.0.1:0",
      ServerCredentials.createInsecure(),
      (err: Error | null, port: number) => {
        if (err) {
          throw err;
        }
        console.log(`Listening on port:${port}`);
      },
    );
  }
}
