const express = require("express");
const morgan = require("morgan");
const cors = require('cors')

const testDataRouter = require("./routes/testDataRoutes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(cors())

app.use("/api/v1/test", testDataRouter);

module.exports = app;
