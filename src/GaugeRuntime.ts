import { loadSync } from '@grpc/proto-loader';
import { loadPackageDefinition, PackageDefinition, Server, ServerCredentials } from 'grpc';
import { join } from 'path';
import { GaugeListener } from "./connection/GaugeListener";
import { GRPCHandler } from './GRPCHandler';
import { StaticLoader } from "./loader/StaticLoader";
import { MessageProcessorFactory } from "./processors/MessageProcessorFactory";

export class GaugeRuntime {

    private lspProtoPath: string = join(__dirname, 'gen', 'lsp.proto')

    public async start() {
        let loader = new StaticLoader();
        loader.loadImplementations();
        let factory = new MessageProcessorFactory(loader);
        if (process.env.GAUGE_LSP_GRPC) {
            let pd: PackageDefinition = loadSync(this.lspProtoPath)
            let lspService = (loadPackageDefinition(pd) as any).gauge.messages.lspService.service;
            let server = new Server();
            server.addService(lspService, new GRPCHandler(server, factory))
            var p = server.bind("127.0.0.1:0", ServerCredentials.createInsecure());
            console.log("Listening on port:" + p);
            server.start();
        } else {
            let listener = new GaugeListener(factory);
            listener.pollForMessages();
        }
    }
}
