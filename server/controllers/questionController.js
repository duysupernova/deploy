const Question = require("./../models/questionModel")
const APIFeatures = require("./../utils/apiFeatures")

exports.getAllQuestion = async (req, res) => {
    try {
        const questions = new APIFeatures(Question.find(), req.query).filter();
        const questionData = await questions.query

        res.status(200).json({
            status: "success",
            results: questionData.length,
            data: {
                questionData
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "Failed to get all questions",
            message: err,
          });
    }
}

exports.createQuestion = async (req, res) => {
    try {
        const newQuestion = await Question.create(req.body);
        res.status(201).json({
            status: "Create new question successfully",
            data: {
                newQuestion
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "Failed to create question",
            message: err,
          });
    }
}