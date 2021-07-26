module.exports = {
  devServer: {
    proxy : "http://64.227.72.239:8000/",
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule.use("html-loader").loader("html-loader");
  }
};
