const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.patch('/updateMyPassword', authController.protect, authController.updatePassword);

router.get('/', authController.protect, authController.getAllUser);
router.patch("/:id", authController.updateUser)

router.post("/post/likeFunction/:id", authController.likeUnlikePost)
router.post("/post/pinFunction/:id", authController.pinUnpinnedPost)
router.post("/post/tagFunction/:id", authController.tagUntaggedPost)
router.post("/post/shareFunction/:id", authController.shareUnsharedPost)

module.exports = router;
