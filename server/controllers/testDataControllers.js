const TestData = require("./../models/testDataModel");

exports.getAllTestData = async (req, res) => {
  try {
    const testData = await TestData.find();
    res.status(200).json({
      status: "Success",
      results: testData.length,
      data: {
        testData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed to get all test data",
      message: err,
    });
  }
};

exports.createTestData = async (req, res) => {
  try {
    const newData = await TestData.create(req.body);
    res.status(201).json({
      status: "Create new test data successfully",
      data: {
        newData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed to create test data",
      message: err,
    });
  }
};

exports.getTestData = async (req, res) => {
  try {
    const testData = await TestData.findById(req.params.id);
    res.status(200).json({
      status: "Successfully retrieved test data",
      data: {
        testData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed to retrieve test data",
      message: err,
    });
  }
};

exports.updateTestData = async (req, res) => {
  try {
    const testData = await TestData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "Successfully updated test data",
      data: {
        testData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed updating test data",
      message: err,
    });
  }
};

exports.deleteTestData = async (req, res) => {
  try {
    await TestData.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Successfully deleted test data",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "Falied deleting test data",
      message: err,
    });
  }
};
