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
            resources: [
                'app/styles/reset.scss',
                'roc-package-web-app-react/styles/base.css',
                'app/styles/markdown.scss'
            ],
            reducers: 'app/redux/reducers.js',
            redux: {
                middlewares: 'app/redux/middlewares.js'
            },
            routes: 'app/routes/index.js'
        }
    },
    project: {
        actions: require('./roc.config.action')
    }
};
