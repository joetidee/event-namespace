let windowObj = window || null;
const functionMap = {};

const getEventName = event => event.split('.')[0];

const addEventListener = (event, func) => {
    functionMap[event] = func;
    windowObj.addEventListener(getEventName(event), functionMap[event]);
};

const removeEventListener = (event) => {
    windowObj.removeEventListener(getEventName(event), functionMap[event]);
    delete functionMap[event];
};

const setWindowObject = (window) => {
    windowObj = window;
};

const eventNamespace = {
    addEventListener,
    removeEventListener,
    setWindowObject,
};

export default eventNamespace;
