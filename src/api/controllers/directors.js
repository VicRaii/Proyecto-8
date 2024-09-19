const filmsDirectors = require("../models/directors");

const getDirectors = async (req, res, next) => {
  try {
    const directors = await filmsDirectors.find().populate("films");
    return res.status(200).json(directors);
  } catch (error) {
    return res.status(400).json({
      message: "Error getting director",
      error: error.message,
    });
  }
};

const getDirectorsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const director = await filmsDirectors.findById(id).populate("films");
    return res.status(200).json(director);
  } catch (error) {
    return res.status(400).json("Error getting director by ID");
  }
};

const postDirector = async (req, res, next) => {
  try {
    const newDirector = new filmsDirectors(req.body);
    const directorSaved = await newDirector.save();
    return res.status(200).json(directorSaved);
  } catch (error) {
    return res.status(404).json("Error posting director");
  }
};

//! REVISAR Y CORREGIR UPDATE

const updateDirector = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Fetch the current director
    const oldDirector = await filmsDirectors.findById(id);

    if (!oldDirector) {
      return res.status(404).json({ message: "Director not found" });
    }

    // Ensure oldDirector.Films is an array, default to an empty array if not
    const oldFilms = Array.isArray(oldDirector.Films) ? oldDirector.Films : [];

    // Ensure req.body.Films is an array, default to an empty array if not provided
    const newFilms = Array.isArray(req.body.Films) ? req.body.Films : [];

    // Merge existing and new films, removing duplicates using Set
    const updatedFilms = [...new Set([...oldFilms, ...newFilms])];

    // Update the director with new details and films list
    const updatedDirectorData = {
      ...req.body, // Spread the new director details from the request
      Films: updatedFilms, // Overwrite the Films array with the merged data
    };

    // Perform the update
    const directorUpdated = await filmsDirectors.findByIdAndUpdate(
      id,
      updatedDirectorData,
      { new: true }
    );

    // Return the updated director details
    return res.status(200).json(directorUpdated);
  } catch (error) {
    // Handle errors
    return res.status(500).json({
      message: "Error updating director",
      error: error.message,
    });
  }
};

const deleteDirector = async (req, res, next) => {
  try {
    const { id } = req.params;
    const directorDeleted = await filmsDirectors.findByIdAndDelete(id);
    return res.status(200).json(directorDeleted);
  } catch (error) {
    return res.status(404).json("Error deleting director");
  }
};

module.exports = {
  getDirectors,
  getDirectorsById,
  postDirector,
  updateDirector,
  deleteDirector,
};
