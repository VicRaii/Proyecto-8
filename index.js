require("dotenv").config();
const express = require("express");
const mainRouter = require("./src/api/routes/main");
const { connectDB } = require("./src/config/db");
const errorHandler = require("./src/middlewares/errorHandler");
const cloudinary = require("cloudinary").v2;

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json());

connectDB();

app.use("/api/v1", mainRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route Not Found");
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server started on: http://localhost:3000");
});
