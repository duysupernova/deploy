const express = require('express');
const questionController = require("../controllers/questionController");

const router = express.Router();

router
    .route("/")
    .get(questionController.getAllQuestion)
    .post(questionController.createQuestion)

module.exports = router;