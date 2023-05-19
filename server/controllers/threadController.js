const Thread = require("./../models/threadModel");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllThread = async (req, res) => {
  try {
    const features = new APIFeatures(Thread.find(), req.query).filter();

    const threadData = await features.query;

    res.status(200).json({
      status: "success",
      results: threadData.length,
      data: {
        threadData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed to get all threads",
      message: err,
    });
  }
};

exports.searchThreadByName = async (req, res) => {
  try {
    const searchTerm = req.body.searchTerm;
    const regex = new RegExp("\\b" + searchTerm + "\\b", "i");
    const thread = await Thread.find({ title: { $regex: regex } });

    res.status(200).json({
      status: "Successfully retrieved thread information",
      results: thread.length,
      data: {
        thread,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed to retrieve test data",
      message: err,
    });
  }
};

exports.createComment = async (req, res, next) => {
  try {
    const threadData = await Thread.findByIdAndUpdate(req.params.id)
    if (!threadData) {
      return next(
        res.status(404).json({
          status: "Thread not found",
        })
      )
    } else {
      threadData.comments.push(req.body)
      await threadData.save()
      return res.status(200).json({
        message: "Comment saved successfully"
      })
    }
  } catch (err) {
    res.status(400).json({
      status: "Failed to comment thread",
      message: err
    })
  }
}

exports.createThread = async (req, res) => {
  try {
    const newThread = await Thread.create(req.body);
    res.status(201).json({
      status: "Create new thread successfully",
      data: {
        newThread,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed to create thread",
      message: err,
    });
    console.log(err);
  }
};

