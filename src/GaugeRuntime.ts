/* eslint-disable @typescript-eslint/no-unused-vars */
import { Server, ServerCredentials } from "@grpc/grpc-js";
import RunnerServer from "./RunnerServer";
import { RunnerService } from "./gen/services_grpc_pb";

let server: Server | null = null;

export const start = (host = "127.0.0.1:0") => {
  if (server) {
    console.log("Server is already running.");
    throw new Error("Server is already running.");
  }
  server = new Server();
  server.addService(RunnerService, new RunnerServer());
  let port: number | null = null;
  server.bindAsync(
    host,
    ServerCredentials.createInsecure(),
    (err: Error | null, boundPort: number) => {
      if (err) {
        throw err;
      }
      port = boundPort;
      console.debug(`Listening on port:${port}`);
    },
  );
};

export const stop = (): void => {
  if (!server) {
    console.debug("Server is not running.");
    return;
  }
  server.tryShutdown((err) => {
    if (err) {
      console.error("Error shutting down the server:", err);
    } else {
      server = null;
    }
  });
};
