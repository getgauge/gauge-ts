import { loadSync } from '@grpc/proto-loader';
import { loadPackageDefinition, PackageDefinition, Server, ServerCredentials } from 'grpc';
import { join } from 'path';
import { GaugeListener } from "./connection/GaugeListener";
import { GRPCHandler } from './connection/GRPCHandler';
import { StaticLoader } from "./loaders/StaticLoader";
import { MessageProcessorFactory } from "./processors/MessageProcessorFactory";

export class GaugeRuntime {

    private lspProtoPath: string = join(__dirname, 'gen', 'lsp.proto')

    public start(): void {
        const loader = new StaticLoader();

        loader.loadImplementations();
        const factory = new MessageProcessorFactory(loader);

        if (process.env.GAUGE_LSP_GRPC) {
            const pd: PackageDefinition = loadSync(this.lspProtoPath)
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-explicit-any
            const lspService = (loadPackageDefinition(pd) as any).gauge.messages.lspService.service;
            const server = new Server();

            server.addService(lspService, new GRPCHandler(server, factory))
            const p = server.bind("127.0.0.1:0", ServerCredentials.createInsecure());

            console.log(`Listening on port: ${p}`);
            server.start();
        } else {
            const listener = new GaugeListener(factory);

            listener.pollForMessages();
        }
    }

}
