const Films = require("../models/films");

const getFilms = async (req, res, next) => {
  try {
    const films = await Films.find();
    return res.status(200).json(films);
  } catch (error) {
    return res.status(404).json("Error getting films");
  }
};

const getFilmsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const film = await Films.findById(id);
    return res.status(200).json(film);
  } catch (error) {
    return res.status(404).json("Error getting film by ID");
  }
};

const getFilmsByGenre = async (req, res, next) => {
  try {
    const { genre } = req.params;
    const films = await Films.find({ genre });
    return res.status(200).json(films);
  } catch (error) {
    return res.status(404).json("Error getting film by genre");
  }
};

const getFilmsByYear = async (req, res, next) => {
  try {
    const { year } = req.params;
    const films = await Films.find({ year });
    return res.status(200).json(films);
  } catch (error) {
    return res.status(404).json("Error getting film by year");
  }
};

const gettingFilmsByRunningTime = async (req, res, next) => {
  try {
    const { runningTime } = req.params;
    const film = await Films.find({ runningTime: { $gt: runningTime } });
    return res.status(200).json(film);
  } catch (error) {
    return res.status(404).json("Error getting film by running time");
  }
};

module.exports = {
  getFilms,
  getFilmsById,
  getFilmsByGenre,
  getFilmsByYear,
  gettingFilmsByRunningTime,
};
