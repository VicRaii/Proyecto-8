const {
  getFilms,
  getFilmsById,
  getFilmsByGenre,
  getFilmsByYear,
  gettingFilmsByRunningTime,
} = require("../controllers/films");

const filmsRouter = require("express").Router();

filmsRouter.get("/", getFilms);
filmsRouter.get("/:id", getFilmsById);
filmsRouter.get("/genre/:genre", getFilmsByGenre);
filmsRouter.get("/year/:year", getFilmsByYear);
filmsRouter.get("/runningTime/:runningTime", gettingFilmsByRunningTime);

module.exports = filmsRouter;
