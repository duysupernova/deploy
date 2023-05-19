const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: [true, "ID of the user must be provided"],
    trim: true,
  },
  content: {
    type: String,
    required: [true, "Content must be provided"],
    trim: true,
  },
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const threadSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: [true, "ID of the user must be provided"],
    trim: true,
  },
  threadID: {
    type: Number,
    required: [true, "ID of the thread must be provided"],
    unique: true,
  },
  title: {
    type: String,
    required: [true, "Title of the thread must be provided"],
    trim: true,
  },
  content: {
    type: String,
    required: [true, "Content of the thread must be provided"],
    trim: true,
  },
  image: {
    type: String
  },
  likes: {
    type: [{
      type: mongoose.Schema.ObjectId,
    }]
  },
  comments: [commentSchema],
  pins: {
    type: [{
      type: mongoose.Schema.ObjectId,
    }]
  },
  tags: {
    type: [{
      type: String
    }]
  },
  shares: {
    type: [{
      type: mongoose.Schema.ObjectId,
    }]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;
