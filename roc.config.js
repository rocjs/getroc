module.exports = {
    settings: {
        runtime: {
            applicationName: 'Roc - Get started developing today!',
            port: 3000,
            serve: ['public', 'build/client'],
            favicon: 'favicon.png',
            template: {
                path: 'templates'
            }
        },
        build: {
            resources: ['roc-package-web-app-react/styles/base.css', 'app/styles/markdown.scss'],
            routes: 'app/routes/index.js',
            redux: {
                reducers: 'app/redux/reducers.js',
                middlewares: 'app/redux/middlewares.js'
            }
        }
    },
    // an action lets us hook right into any important Roc context
    // in this app we just want to add markdown loader to webpack
    actions: [require('./roc.config.action')]
};
