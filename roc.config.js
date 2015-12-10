module.exports = {
    config: {
        applicationName: 'getroc.org - get started developing today!',
        port: 3000,
        serve: ['public'],
        favicon: 'favicon.png',
        build: {
            reducers: 'reducers.js',
            routes: 'routes.js'
        }
    }
};
