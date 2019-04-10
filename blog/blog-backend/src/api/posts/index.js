const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');
const posts = new Router();

posts.get('/', postsCtrl.list)
posts.post('/', postsCtrl.write)
posts.get('/:id', postsCtrl.checkObjectIs ,postsCtrl.read)
posts.delete('/:id', postsCtrl.checkObjectIs ,postsCtrl.remove)
posts.patch('/:id', postsCtrl.checkObjectIs ,postsCtrl.update)

module.exports = posts;