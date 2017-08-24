import touchDetection from '../touch-detection.js';

describe('touchDetection', () => {
    it('should be considered as a touch device by default', () => {
        expect(touchDetection.isTouch()).toBe(true);
    });

    it(`should be considered as a touch device if 1 mousemove is followed by a touchend before 
            another mousemove. Because on touch device a touch on the screen would generate: 
            1. mousemove 2. touchend 3. click`, () => {
        touchDetection.init(window);
        window.dispatchEvent(new window.MouseEvent('mousemove'));
        window.dispatchEvent(new window.MouseEvent('touchend'));
        window.dispatchEvent(new window.MouseEvent('mousemove'));
        expect(touchDetection.isTouch()).toBe(true);
    });

    it('should be considered as a non touch device if 2 mousemove occurs in a row', () => {
        device.touchDetection(window);
        window.dispatchEvent(new window.MouseEvent('mousemove'));
        window.dispatchEvent(new window.MouseEvent('mousemove'));
        window.dispatchEvent(new window.MouseEvent('touchend'));
        expect(touchDetection.isTouch()).toBe(false);
    });
});
