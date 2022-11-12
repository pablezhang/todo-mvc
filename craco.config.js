const path = require('path');

module.exports = {
  babel: {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  },
  webpack: {
    alias: {},
    // 以下代码！！！  与alias或babel同级
    configure: (webpackConfig, { env, paths }) => {
      // 修改build的生成文件名称
      paths.appBuild = 'docs';
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'docs'),
        // 静态资源使用相对路径, 如html引入的js: '/static/xxx.js'  => './static/xxx.js'
        publicPath: './',
      };
      return webpackConfig;
    },
  },
};
