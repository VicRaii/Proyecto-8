const { isAuth, isAdmin } = require("../../middlewares/auth");
// Importamos la función para crear el middleware dinámico
const createUploadMiddleware = require("../../middlewares/file");
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

// Rutas para obtener películas
filmsRouter.get("/", [isAdmin], getFilms);
filmsRouter.get("/:id", getFilmsById);
filmsRouter.get("/genre/:genre", getFilmsByGenre);
filmsRouter.get("/year/:year", getFilmsByYear);
filmsRouter.get("/runningTime/:runningTime", gettingFilmsByRunningTime);

// Ruta para crear una película (sube la imagen a la carpeta "Films")
filmsRouter.post(
  "/",
  [isAuth],
  createUploadMiddleware("Films").single("image"), // Cambiamos el middleware a la carpeta "Films"
  postFilm
);

// Ruta para actualizar una película (sube la imagen a la carpeta "UpdatedFilms")
filmsRouter.put(
  "/:id",
  [isAdmin],
  createUploadMiddleware("UpdatedFilms").single("image"), // Cambiamos el middleware a la carpeta "UpdatedFilms"
  updateFilm
);

// Ruta para eliminar una película
filmsRouter.delete("/:id", [isAdmin], deleteFilm);

module.exports = filmsRouter;
