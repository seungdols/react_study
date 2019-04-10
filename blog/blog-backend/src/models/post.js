const mongoose = require('mongoose');

const { Schema } = mongoose;

const Post = new Schema({
  title: String,
  body: String,
  tags: [String],
  publisheddDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Post', Post);