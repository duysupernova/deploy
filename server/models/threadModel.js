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
  time: Date,
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
});

const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;
