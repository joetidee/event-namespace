import eventNamespace from './event-namespace.js';

let touch = true;

const init = (window) => {
    let firstMousemoveHasOccured = false;
    eventNamespace.setWindowObject(window);
    eventNamespace.addEventListener('mousemove.touchdetection', () => {
        if (firstMousemoveHasOccured) {
            touch = false;
            eventNamespace.removeEventListener('mousemove.touchdetection');
            eventNamespace.removeEventListener('touchend.touchdetection');
        } else {
            firstMousemoveHasOccured = true;
        }
    });
    eventNamespace.addEventListener('touchend.touchdetection', () => {
            touch = true;
        eventNamespace.removeEventListener('mousemove.touchdetection');
        eventNamespace.removeEventListener('touchend.touchdetection');
    });
};

const isTouch = () => {
    return touch;
};

const touchDetection = {
    init,
    isTouch
};

export default touchDetection;
