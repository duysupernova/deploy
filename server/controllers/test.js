import testDataModel from "../models/testDataModel.js";

export const testGetFunc = async (req, res) => {
  try {
    const testData = await testDataModel.find();
    const test = "test";
    //Ok response
    res.status(200).json(testData);
  } catch (error) {
    //Not Found response
    res.status(404).json(error);
  }
};

export const testPostFunc = async (req, res) => {
  const test = req.body;

  const newTest = new testDataModel(test);

  try {
    await newTest.save();
    //Created response
    res.status(201).json(newTest);
  } catch (error) {
    //Conflict response
    res.status(409).json(error);
  }
};

export const testUpdateFunc = async (req, res) => {};
export const testDeleteFunc = async (req, res) => {};
