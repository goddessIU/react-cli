const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: '[name].css',
    //         chunkFilename: '[id].css'
    //     })
    // ],
    // module: {
    //     rules: [
    //       {
    //         test: /\.css$/,
    //         use: [MiniCssExtractPlugin.loader],
    //       },
    //     ],
    //   },
      optimization: {
        // minimizer: [
        //     // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        //     // `...`,
        //     new CssMinimizerPlugin(),
        //   ],
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        usedExports: true
    }
})