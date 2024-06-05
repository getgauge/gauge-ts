/* eslint-disable @typescript-eslint/no-unused-vars */
import { Server, ServerCredentials } from "@grpc/grpc-js";
import RunnerServer from "./RunnerServer";
import { RunnerService } from "./gen/services_grpc_pb";
import StaticLoader from "./loaders/StaticLoader";

let serverInstance: Server | null = null;

export const start = (
  host = "127.0.0.1:0",
  server = new Server(),
  runnerServer = new RunnerServer(new StaticLoader()),
) => {
  serverInstance = server;
  server.addService(RunnerService, runnerServer);
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

export const stop = (server = serverInstance): void => {
  if (!serverInstance) {
    console.debug("Server is not running.");
    return;
  }
  server?.tryShutdown((err) => {
    if (err) {
      console.error("Error shutting down the server:", err);
    } else {
      serverInstance = null;
    }
  });
};
