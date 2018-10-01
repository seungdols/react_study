const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  console.log(1);
  next().then(() => {
    console.log('bye')
  })
})
app.use((ctx, next) => {
  console.log(2);
  next()
})

app.use(async (ctx, next) => {
  console.log(3);
  await next();
  console.log('async bye')
})

app.use((ctx) => {
  ctx.body = 'hello world';
});

app.listen(4000, () => {
  console.log('listening to port 4000');
});

