require("dotenv").config();
const mongoose = require("mongoose");
const filmsData = require("../../api/data/films");
const Films = require("../../api/models/films");

const launchSeed = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");

    await Films.collection.drop();
    console.log("Films collection dropped");

    await Films.insertMany(filmsData);
    console.log("Films inserted successfully");

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error", error);
  }
};

launchSeed();
