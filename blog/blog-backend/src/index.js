const Koa = require('koa');
const Router = require('koa-router')

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Home';
});

router.get('/about', (ctx) => {
  ctx.body = 'Introduce';
});

router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? `introduce of ${name}`:'introduce';
})

router.get('/posts', (ctx) => {
  const {id } = ctx.query;
  ctx.body = id ? `Post#${id}`:'Not PostId'
});

app.use(router.routes()).use(router.allowedMethods())

app.listen(4000, () => {
  console.log('listening to port 4000');
});

