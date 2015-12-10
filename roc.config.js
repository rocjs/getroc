module.exports = {
    config: {
        applicationName: 'getroc.org - get started developing today!',
        port: 3000,
        serve: ['public'],
        favicon: 'favicon.png',
        link: [{
            rel: 'icon', href: '/favicon.png'
        }, {
            href: 'http://fonts.googleapis.com/css?family=Lato:100,300,400',
            rel: 'stylesheet',
            type: 'text/css'
        }],
        build: {
            reducers: 'app/redux/reducers.js',
            routes: 'app/routes/index.js'
        }
    }
};
