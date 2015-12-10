module.exports = {
    config: {
        applicationName: 'getroc.org - get started developing today!',
        port: 3000,
        serve: ['public'],
        favicon: 'favicon.png',
        build: {
            reducers: 'app/redux/reducers.js',
            routes: 'app/routes/index.js'
        }
    }
};
