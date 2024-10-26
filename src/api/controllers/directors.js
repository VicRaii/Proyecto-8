const deleteFile = require("../../utils/deleteFile");
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

const updateDirector = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldDirector = await filmsDirectors.findById(id);
    const newDirector = new filmsDirectors(req.body);
    newDirector._id = id;
    const films = req.body.films || [];
    newDirector.films = [...oldDirector.films, ...films];

    if (req.file) {
      newDirector.image = req.file.path;
      deleteFile(oldDirector.image);
    }

    const filmsDirectorsUpdated = await filmsDirectors.findByIdAndUpdate(
      id,
      newDirector,
      {
        new: true,
      }
    );
    return res.status(200).json(filmsDirectorsUpdated);
  } catch (error) {
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
