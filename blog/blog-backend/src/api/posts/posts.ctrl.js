const Post = require('models/post');
const Joi = require('joi');
const { ObjectId } = require('mongoose');
exports.checkObjectId = (ctx, next) => {
  const { id } = ctx.params;

  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return null;
  }

  return next();
};
exports.write = async (ctx) => {
const schema = Joi.object().keys({
  title: Joi.string().required(),
  body: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required()
});

const result = Joi.validate(ctx.request.body, schema);

if(result.error) {
  ctx.status = 400;
  ctx.body = result.error;
  return ;
}


const { title, body, tags } = ctx.request.body;

const post = new Post({
  title, body, tags
});

try {
  await post.save();
  ctx.body = post;
} catch(e) {
  ctx.throw(e, 500);
}

};
exports.list = async (ctx) => {

  const page = parseInt(ctx.query.page || 1, 10);

  if (page < 1 ) {
    ctx.status = 400;
    return;
  }

  const limitBodyLength = post => ({
    ...post,
    body: post.body.length < 200? post.body :`${post.body.slice(0, 200)}...`
  });

  try {
    const posts = await Post.find().sort({_id: -1}).limit(3).skip((page - 1) * 3).lean().exec();
    const postCount = await Post.count().exec();
    ctx.set('Last-page', Math.ceil(postCount/3))
    ctx.body = posts.map(limitBodyLength);
  } catch(e) {
    ctx.throw(e, 500);
  }
};
exports.read = async (ctx) => {
 const { id } = ctx.params;
 try { 
   const post = await Post.findById(id).exec();

   if(!post) {
     ctx.status = 404;
     return ;
   }
   ctx.body = post;
 } catch(e) {
   
 }
};
exports.remove = async (ctx) => {
 const { id } = ctx.params;
 try {
   await Post.findByIdAndRemove(id).exec();
   ctx.status = 204;
 } catch(e) {
   ctx.throw(e, 500);
 }
};

exports.update = async (ctx) => {
  const {id} = ctx.params;
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post
  } catch(e) {
    ctx.throw(e, 500);
  }
};