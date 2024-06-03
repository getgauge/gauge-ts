/* eslint-disable @typescript-eslint/no-unused-vars */
import { Server, ServerCredentials } from "@grpc/grpc-js";
import { RunnerServiceImpl } from "./RunnerServiceImpl";
import { RunnerService } from "./gen/services_grpc_pb";

let server: Server | null = null;

export const start = (): void => {
  if (server) {
    console.debug("Server is already running.");
    return;
  }
  server = new Server();
  server.addService(RunnerService, new RunnerServiceImpl());
  server.bindAsync(
    "127.0.0.1:0",
    ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        throw err;
      }
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
      console.debug("Server shut down successfully.");
      server = null;
    }
  });
};
