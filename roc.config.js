const createBuilder = require('roc-web-react').createBuilder;

module.exports = {
    createBuilder: (target) => {
        const build = createBuilder(target);

        build.buildConfig.module.loaders.push(
            { test: /\.md$/, loader: 'html!markdown' }
        );

        return {
            builder: build.builder,
            buildConfig: build.buildConfig
        };
    },
    config: {
        applicationName: 'Roc - Get started developing today!',
        port: 3000,
        serve: ['public', 'build/client'],
        favicon: 'favicon.png',
        link: [],
        build: {
            assets: ['roc-web-react/styles/base.scss', 'app/styles/markdown.scss'],
            reducers: 'app/redux/reducers.js',
            routes: 'app/routes/index.js'
        }
    }
};
