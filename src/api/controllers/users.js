const bcrypt = require("bcrypt");
const User = require("../models/users");
const { generateSign } = require("../../config/jwt");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const duplicateUser = await User.findOne({ userName });

    if (duplicateUser) {
      return res.status(400).json({
        message: "This User already exists",
      });
    }

    const newUser = new User({
      userName,
      password,
      role: "user",
    });

    const userSaved = await newUser.save();
    return res.status(201).json(userSaved);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(400).json({ message: "User or password incorrect" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "User or password incorrect" });
    }

    const token = generateSign(user._id);
    return res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};
module.exports = { getUsers, registerUser, loginUser };
