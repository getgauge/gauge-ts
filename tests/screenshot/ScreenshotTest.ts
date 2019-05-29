import { Screenshot } from '../../src/screenshot/Screenshot';
import { Util } from '../../src/utils/Util';

describe('Screenshot', () => {
    describe('.capture', () => {
        it('should capture screen shot and return the buffer', async () => {
            Util.readFileBuffer = jest.fn().mockReturnValue(new ArrayBuffer(10));
            Util.spawn = jest.fn();
            let data = await Screenshot.capture();
            expect(data.length).toBe(10);
        })

        it('should return empty buffer if fails to capture screenshot', async () => {
            Util.readFileBuffer = jest.fn().mockReturnValue(new ArrayBuffer(10));
            Util.spawn = jest.fn().mockImplementation(() => { throw new Error('faild to spawn') });
            let data = await Screenshot.capture();
            expect(data.length).toBe(0);
        })

        it('should capture screenshot using customscreengrabber', async () => {
            Screenshot.setCustomScreenGrabber(() => { return new Uint8Array(new ArrayBuffer(10))})
            let data = await Screenshot.capture();
            expect(data.length).toBe(10);
        })

        it('should capture screenshot using async customscreengrabber', async () => {
            Screenshot.setCustomScreenGrabber(async () => { return new Uint8Array(new ArrayBuffer(5))})
            let data = await Screenshot.capture();
            expect(data.length).toBe(5);
        })
    })
})