// we can make a plugin for this
module.exports = {
    action: (roc) => {
        const hook = roc.hook;

        if (hook === 'build-webpack') {
            // the return value from the previous action on this hook
            const webpack = roc.previousValue;

            return () => () => {
                // add markdown loader
                webpack.module.loaders.push(
                    { test: /\.md$/, loader: 'html!markdown' }
                );

                return webpack;
            };
        }
    }
};
