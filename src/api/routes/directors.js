const {
  deleteDirector,
  getDirectors,
  getDirectorsById,
  postDirector,
  updateDirector,
} = require("../controllers/directors");

const directorsRouter = require("express").Router();

directorsRouter.get("/", getDirectors);
directorsRouter.get("/:id", getDirectorsById);
directorsRouter.post("/", postDirector);
directorsRouter.put("/:id", updateDirector);
directorsRouter.delete("/:id", deleteDirector);

module.exports = directorsRouter;
