const { isAdmin } = require("../../middlewares/auth");
// Importamos la función para crear el middleware dinámico
const createUploadMiddleware = require("../../middlewares/file");
const {
  deleteDirector,
  getDirectors,
  getDirectorsById,
  postDirector,
  updateDirector,
} = require("../controllers/directors");

const directorsRouter = require("express").Router();

// Rutas para obtener directores
directorsRouter.get("/", getDirectors);
directorsRouter.get("/:id", getDirectorsById);

// Ruta para crear un director (sube la imagen a la carpeta "Directors")
directorsRouter.post(
  "/",
  [isAdmin],
  createUploadMiddleware("Directors").single("image"), // Cambiamos el middleware a la carpeta "Directors"
  postDirector
);

// Ruta para actualizar un director (sube la imagen a la carpeta "UpdatedDirectors")
directorsRouter.put(
  "/:id",
  [isAdmin],
  createUploadMiddleware("UpdatedDirectors").single("image"), // Cambiamos el middleware a la carpeta "UpdatedDirectors"
  updateDirector
);

// Ruta para eliminar un director
directorsRouter.delete("/:id", [isAdmin], deleteDirector);

module.exports = directorsRouter;
