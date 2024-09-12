const {
  getFilms,
  getFilmsById,
  getFilmsByGenre,
  getFilmsByYear,
  gettingFilmsByRunningTime,
  postFilm,
  updateFilm,
  deleteFilm,
} = require("../controllers/films");

const filmsRouter = require("express").Router();

filmsRouter.get("/", getFilms);
filmsRouter.get("/:id", getFilmsById);
filmsRouter.get("/genre/:genre", getFilmsByGenre);
filmsRouter.get("/year/:year", getFilmsByYear);
filmsRouter.get("/runningTime/:runningTime", gettingFilmsByRunningTime);
filmsRouter.post("/", postFilm);
filmsRouter.put("/:id", updateFilm);
filmsRouter.delete("/:id", deleteFilm);

module.exports = filmsRouter;
