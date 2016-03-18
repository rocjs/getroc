/* global __CLIENT__ */

const scrollTopMiddleware = (store) => (next) => (action) => {
    if (action.type === '@@router/UPDATE_PATH') {
        window.scrollTo(0, 0);
    }

    return next(action);
}

export default () => {
    if (__CLIENT__) {
        return [ scrollTopMiddleware ];
    }

    return [];
};
