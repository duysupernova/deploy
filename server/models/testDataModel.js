import mongoose from "mongoose";

const testSchema = mongoose.Schema({
  title: String,
  content: String,
});

const testDataModel = mongoose.model("testDateModel", testSchema);

export default testDataModel;
