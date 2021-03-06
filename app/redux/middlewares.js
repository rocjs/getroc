/* global __WEB__*/

const scrollTopMiddleware = () => (next) => (action) => {
    if (action.type === '@@router/LOCATION_CHANGE') {
        window.scrollTo(0, 0);
    }

    return next(action);
};

export default () => {
    if (__WEB__) {
        return [scrollTopMiddleware];
    }

    return [];
};
