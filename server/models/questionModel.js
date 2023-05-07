const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Content of the question must be provided"],
        trim: true,
    },
    type: {
        type: String,
        required: [true, 'Question type must be provided'],
        trim: true
    },
    difficulty: {
        type: String,
        required: [true, "Difficulty must be provided"],
        trim: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    badgeTitle: {
        type: String,
        required: [true, "Badge title must be provided"],
        trim: true
    },
    badgeImage: {
        type: String
    }
})

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;