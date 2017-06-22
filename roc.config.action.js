// we can make a plugin for this
module.exports = ({ hook }) => {
    if (hook === 'build-webpack') {
        return () => (webpack) => {
            // add markdown loader
            webpack.module.loaders.push(
                { test: /\.md$/, loader: 'html!markdown' }
            );

            return webpack;
        };
    }
};
