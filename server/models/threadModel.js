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
    data: Buffer,
    contentType: String
  },
  likes: {
    type: Number,
    default: 0,
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
    type: String,
    required: [true, "ID of the thread must be provided"],
    unique: true,
    trim: true,
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
    data: Buffer,
    contentType: String,
    base64: String
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [commentSchema],
  tags: [
    {
      type: String,
      trim: true,
    },
  ],
  pins: [
    {
      type: String,
      trim: true,
    },
  ],
  share: [
    {
      type: String,
      trim: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;
