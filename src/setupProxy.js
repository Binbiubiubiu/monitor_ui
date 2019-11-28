const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy(process.env.REACT_APP_BASE_API, {
      // target: `http://192.168.1.140:${port}/mock`,
      // target: `http://192.168.1.140:20080/`,
      target: `http://120.26.92.123:21080`,
      // target: 'http://192.168.1.153:8090/', // 01
      // target: 'http://192.168.1.143:8091/',
      //   target: "http://192.168.1.147:8090/", // 高阔地址
      changeOrigin: true,
      // ws: true,
      pathRewrite: {
        [`^${process.env.REACT_APP_BASE_API}`]: ""
      }
    })
  );
};
