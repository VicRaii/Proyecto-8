require("dotenv").config();
const express = require("express");
const mainRouter = require("./src/api/routes/main");
const { connectDB } = require("./src/config/db");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/v1", mainRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route Not Found");
});

app.listen(3000, () => {
  console.log("Server started on: http://localhost:3000");
});
