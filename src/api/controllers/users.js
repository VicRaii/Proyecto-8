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

const updateUserRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if ([!"admin", "user"].includes(role)) {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.role = role;
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if req.user is defined before trying to access req.user._id
    if (!req.user || !req.user._id) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No user data found" });
    }

    const requestingUserId = req.user._id;

    // Check if the user is trying to delete their own account
    if (requestingUserId.toString() === id.toString()) {
      await User.findByIdAndDelete(requestingUserId);
      return res.status(200).json({ message: "User deleted successfully" });
    }

    // Only admin users are allowed to delete other users
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access only allowed for admins" });
    }

    // Find the user to delete
    const userToDelete = await User.findById(id);
    if (!userToDelete) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  updateUserRole,
  deleteUser,
};
