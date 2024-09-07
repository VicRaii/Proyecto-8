const filmsDirectors = require("../models/directors");

const getDirectors = async (req, res, next) => {
  try {
    const directors = await filmsDirectors.find();
    return res.status(200).json(directors);
  } catch (error) {
    return res.status(400).json("Error getting directors");
  }
};

module.exports = { getDirectors };
