require("dotenv").config();
const mongoose = require("mongoose");
const filmsDirectors = require("../../api/models/directors");
const directorsData = require("../../api/data/directors");

const launchSeed = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");

    await filmsDirectors.collection.drop();
    console.log("Directors dropped");

    await filmsDirectors.insertMany(directorsData);
    console.log("Directors inserted");

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

launchSeed();
