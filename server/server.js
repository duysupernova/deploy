const mongoose = require("mongoose");

const app = require("./app");
require("dotenv").config();

const DB = process.env.DATABASE_URL;

mongoose.set("strictQuery", false);

mongoose.connect(DB).then(() => {
  console.log("Connect to mongoDB successfully");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
