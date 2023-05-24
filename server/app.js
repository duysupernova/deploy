const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const testDataRouter = require("./routes/testDataRoutes");
const userRouter = require("./routes/userRoutes");
const threadRouter = require("./routes/threadRoutes");
const questionRouter = require("./routes/questionRoutes")

const app = express();
app.use(
    cors({
        origin: "*",
    })
)

app.use(morgan("dev"));
app.use(express.json({ limit: '50mb'}));

app.use(cors());

app.use("/api/v1/test", testDataRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/thread", threadRouter);
app.use("/api/v1/question", questionRouter);

module.exports = app;
