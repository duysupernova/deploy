import mongoose from "mongoose";

const testSchema = mongoose.Schema({
  title: String,
  content: String,
});

const testDataModel = mongoose.model("testDataModel", testSchema);

export default testDataModel;


