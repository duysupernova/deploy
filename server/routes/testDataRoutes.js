const express = require("express");
const testDataController = require("../controllers/testDataControllers");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);

router
  .route("/")
  .get(authController.protect, testDataController.getAllTestData)
  .post(testDataController.createTestData);

router
  .route("/:id")
  .get(testDataController.getTestData)
  .patch(testDataController.updateTestData)
  .delete(testDataController.deleteTestData);

module.exports = router;
