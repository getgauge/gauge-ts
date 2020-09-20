import { Server, ServerCredentials } from '@grpc/grpc-js';
import { RunnerService } from './gen/services_grpc_pb';
import { StaticLoader } from "./loaders/StaticLoader";
import { RunnerServiceImpl } from './RunnerServiceImpl';

export class GaugeRuntime {

    public start(): void {
        const loader = new StaticLoader();

        loader.loadImplementations();
        const server = new Server();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        server.addService(RunnerService, new RunnerServiceImpl(server, loader));
        server.bindAsync("127.0.0.1:0", ServerCredentials.createInsecure(), (err: Error | null, port: number) => {
            if (err) {
                throw err;
            }
            console.log(`Listening on port:${port}`);
            server.start();
        });
    }

}
