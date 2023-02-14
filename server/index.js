import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import testRoutes from "./routes/test.js";

const app = express();

app.use("/test", testRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

const db_url =
  "mongodb+srv://sepmwebsite:sepmwebsite@cluster0.hlorz1r.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

//remove the warning
mongoose.set("strictQuery", true);

mongoose
  .connect(db_url)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
  )
  .catch((error) => console.log(error));
