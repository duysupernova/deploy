import express from "express";
import { testGetFunc, testPostFunc } from "../controllers/test.js";

const router = express.Router();

router.get("/get", testGetFunc);
router.get("/post", testPostFunc);

export default router;
