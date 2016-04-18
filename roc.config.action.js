// we can make a plugin for this
module.exports = () => (roc) => {
    const hook = roc.hook;

    if (hook === 'build-webpack') {
        // the return value from the previous action on this hook
        const rocBuilder = roc.previousValue;

        return () => () => {
            // add markdown loader
            rocBuilder.buildConfig.module.loaders.push(
                { test: /\.md$/, loader: 'html!markdown' }
            );

            return rocBuilder;
        };
    }
};
