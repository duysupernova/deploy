const express = require("express");
const threadController = require("../controllers/threadController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect ,threadController.getAllThread)
  .post(threadController.createThread);

router.route("/searchThread").post(threadController.searchThreadByName);

module.exports = router;
