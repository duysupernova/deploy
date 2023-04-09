const jwt = require("jsonwebtoken");
const User = require("./../models/userModel");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id);

    res.status(201).json({
      statusbar: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed to create user",
      message: err,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    // Check if email and password exists
    const { email, password } = req.body;

    if (!email || !password) {
      return next(
        res.status(400).json({
          status: "Please provide email and password!",
        })
      );
    }
    // Check if user exists && password is correct
    const user = await User.findOne({ email }).select("+password");

    // If everything is ok, send token to client
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(
        res.status(401).json({
          status: "Incorrect email or password",
        })
      );
    }
    const token = signToken(user._id);

    res.status(200).json({
      status: "success",
      token,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed to logged in",
      message: err,
    });
  }
};

exports.protect = async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  console.log(token);

  if (!token) {
    return next(
      res.status(401).json({
        status: "You are not logged in! Please log in to get access.",
      })
    );
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      res.status(401).json({
        status: "The user belonging to this token does no longer exist.",
      })
    );
  }

  // 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      res.status(401).json({
        status: "User recently changed password! Please log in again.",
      })
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
};
