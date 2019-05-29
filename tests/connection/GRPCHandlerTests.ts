import { GRPCHandler } from '../../src/connection/GRPCHandler';
import { gauge } from '../../src/gen/messages';
import { StaticLoader } from '../../src/loaders/StaticLoader';
import { MessageProcessorFactory } from '../../src/processors/MessageProcessorFactory';
describe('GRPCHandler', () => {

    let hanlder: GRPCHandler;
    let factory: MessageProcessorFactory;
    let loader: StaticLoader;

    beforeEach(() => {
        jest.clearAllMocks();
        loader = new StaticLoader();
        factory = new MessageProcessorFactory(loader)
        hanlder = new GRPCHandler(null, factory);
    })
    describe('get', () => {
        it('should', () => {
            hanlder.cacheFile({request:{}}, (err: gauge.messages.Error|null,res?:gauge.messages.Empty ) => {
            })
        })
    })

})
