// commomjs的写法，因为是webpack的配置文件
// http-proxy-middleware不用单独下载，因为react脚手架在初始化项目的时候已经下载好了
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', {
      target: 'http://api.github.com',
      changeOrigin: true, // 控制服务器收到请求头中的host值，如果不配置服务器收到的是localhost:3000，如果配置了服务器收到的是localhost:5000
      pathRewrite: {
        '^/api1': ''
      }
    }),
  )
}