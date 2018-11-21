const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const proxyMiddleware = require('http-proxy-middleware')// Error next is not a function
// const proxyMiddleware = require('koa-server-http-proxy') //前端可以用，但是页面刷新后不行
const c2k = require('koa2-connect')

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'

const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev
})

const handle = app.getRequestHandler();

// 反向代理配置
const devProxy = {
  '/api': {
    target: 'https://swapi.co/api/',
    pathRewrite: { '^/api': '/' },
    changeOrigin: true
  },
  '/lendApi': { //403
    target: 'https://libra.alpha.mo9.com/lendApi/api/libra/v2/',
    // target: 'http://192.168.6.27:3000/mock/187/api/libra/v2/',
    pathRewrite: { '^/lendApi': '' },
    changeOrigin: true
  },
  '/monkeyApi': { //这是可以的
    target: 'https://libra.alpha.mo9.com/monkeyApi/api/monkey/v1/',
    pathRewrite: { '^/monkeyApi': '' },
    changeOrigin: true
  }
}

app.prepare()
  .then(() => {
    const server = new Koa()
    const router = new Router()

    if (devProxy) {
      Object.keys(devProxy).forEach(function (context) {
        server.use(c2k(proxyMiddleware(context, devProxy[context])))
      })
    }

    router.get('*', async (ctx, next) => {
      const { req, res } = ctx;
      await handle(req, res)
      ctx.respond = false
    })

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      await next()
    })

    server.use(router.routes())

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
