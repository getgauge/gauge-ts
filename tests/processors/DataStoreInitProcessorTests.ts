import { gauge } from '../../src/gen/messages';
import { DataStoreInitProcessor } from '../../src/processors/DataStoreInitProcessor';

describe('DataStoreInitProcessor', () => {
    let processor: DataStoreInitProcessor

    beforeEach(() => {
        processor = new DataStoreInitProcessor();
    })

    describe('.process', () => {
        it('should process SuiteDataStoreInit request', async () => {
            const req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.SuiteDataStoreInit,
                suiteDataStoreInitRequest: new gauge.messages.SuiteDataStoreInitRequest()
            })
            const res = await processor.process(req)

            expect(res.messageType).toBe(gauge.messages.Message.MessageType.ExecutionStatusResponse);
            const result = res.executionStatusResponse as gauge.messages.ExecutionStatusResponse

            expect((result.executionResult as gauge.messages.ProtoExecutionResult).failed).toBe(false);
        })

        it('should process SpecDataStoreInit request', async () => {
            const req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.SpecDataStoreInit,
                suiteDataStoreInitRequest: new gauge.messages.SpecDataStoreInitRequest()
            })
            const res = await processor.process(req)

            expect(res.messageType).toBe(gauge.messages.Message.MessageType.ExecutionStatusResponse);
            const result = res.executionStatusResponse as gauge.messages.ExecutionStatusResponse

            expect((result.executionResult as gauge.messages.ProtoExecutionResult).failed).toBe(false);
        })

        it('should process ScenarioDataStoreInit request', async () => {
            const req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ScenarioDataStoreInit,
                suiteDataStoreInitRequest: new gauge.messages.ScenarioDataStoreInitRequest()
            })
            const res = await processor.process(req)

            expect(res.messageType).toBe(gauge.messages.Message.MessageType.ExecutionStatusResponse);
            const result = res.executionStatusResponse as gauge.messages.ExecutionStatusResponse

            expect((result.executionResult as gauge.messages.ProtoExecutionResult).failed).toBe(false);
        })
    })

})
