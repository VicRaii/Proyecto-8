const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
    year: { type: Number, required: true },
    runningTime: { type: Number, required: true },
    genre: {
      type: [String],
      enum: [
        "Action",
        "Adventure",
        "Animation",
        "Based on a true story",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Mystery",
        "Racism",
        "Thriller",
        "Sci-Fi",
        "Sports",
        "Superheroes",
        "Western",
      ],
    },
    verified: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
    collection: "Films",
  }
);

const Films = mongoose.model("Films", filmSchema, "Films");
module.exports = Films;
