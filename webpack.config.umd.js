const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const baseConfig = require('./webpack.config.base.js');


module.exports = (env) => {
  const uglify = env && env.uglify;
  const plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ];

  if (uglify) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
  }

  return merge(baseConfig, {
    entry: './src/index.jsx',
    externals: {
      react: 'React',
    },
    output: {
      path: path.resolve('umd'),
      library: 'reactSimpleTriangle',
      libraryTarget: 'umd',
      filename: uglify ? 'react-simple-triangle.min.js' : 'react-simple-triangle.js',
    },
    plugins,
  });
};
