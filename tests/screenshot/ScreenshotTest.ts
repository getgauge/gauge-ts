import { existsSync, unlinkSync } from 'fs';
import { Screenshot } from '../../src/screenshot/Screenshot';
import { Util } from '../../src/utils/Util';

describe('Screenshot', () => {

    let screenshotFile: string;

    describe('.capture', () => {

        afterEach(() => {
            if (existsSync(screenshotFile)) {
                unlinkSync(screenshotFile);
            }
        })

        it('should capture screen shot and return the buffer', async () => {
            process.env.gauge_screenshots_dir = "";
            Util.readFileBuffer = jest.fn().mockReturnValue(new ArrayBuffer(10));
            Util.spawn = jest.fn();
            screenshotFile = await Screenshot.capture();
            expect(screenshotFile.endsWith('.png')).toBe(true);
        })

        it('should return empty buffer if fails to capture screenshot', async () => {
            Util.readFileBuffer = jest.fn().mockReturnValue(new ArrayBuffer(10));
            Util.spawn = jest.fn().mockImplementation(() => { throw new Error('failed to spawn') });
            console.log = jest.fn();
            let file = await Screenshot.capture();
            expect(file).toBe("");
        })

        it('should capture screenshot using custom screen grabber and write data to file', async () => {
            process.env.gauge_screenshots_dir = process.cwd();
            Screenshot.setCustomScreenGrabber(() => { return new Uint8Array(new ArrayBuffer(10)) })
            screenshotFile = await Screenshot.capture();
            expect(screenshotFile.endsWith('png')).toBeTruthy();
        })

        it('should capture screenshot using async custom screen grabber and write data to file', async () => {
            process.env.gauge_screenshots_dir = "";
            Screenshot.setCustomScreenGrabber(async () => { return new Uint8Array(new ArrayBuffer(5)) })
            screenshotFile = await Screenshot.capture();
            expect(screenshotFile.endsWith('png')).toBeTruthy();
        })
    })
})