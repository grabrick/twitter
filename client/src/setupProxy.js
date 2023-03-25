const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: '89.223.100.159:5000',
      changeOrigin: true
    })
  )
}