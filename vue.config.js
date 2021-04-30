const webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  // publicPath: "./",
  // 开发需要map 线上不需要 map提供代码映射，方便于在浏览器控制台调试
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  //   配置webpack
  configureWebpack: config => {
    let plugins = [
      //asset: "[path].gz[query]", //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
      new CompressionWebpackPlugin({
        algorithm: "gzip", // 压缩方式
        test: /\.js$|\.css$/, // 匹配的文件
        threshold: 10240, // 对大于10k的文件压缩
        minRatio: 0.8 //只有压缩率比这个值小的资源才会被处理
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ];
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      config.plugins = [...config.plugins, ...plugins];
    } else {
      config.mode = "development";
    }
    Object.assign(config, {
      // 排除的依赖包
      externals: {
        // vue: "Vue"
        // axios: "axios",
      }
    });
  },
  devServer: {
    port: 8000,
    proxy: {
      // "/api": {
      //   target: "http://172.18.1.104:90/devops/rest/oa/OaZenTaoRest/dataImport",
      //   ws: false,
      //   changeOrigin: true
      // }
    }
  }
};
