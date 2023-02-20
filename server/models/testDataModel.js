const mongoose = require("mongoose");

const testDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title must be given"],
    unique: true,
    trim: true,
    maxlength: [50, "Tile must have less or equal than 50 characters"],
    minlength: [10, "Tile must have more or equal than 10 characters"],
  },
  content: {
    type: String,
    required: [true, "Content must be given"],
  },
});

const TestData = mongoose.model("TestData", testDataSchema);

module.exports = TestData;
