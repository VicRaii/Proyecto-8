const { isAdmin } = require("../../middlewares/auth");
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
directorsRouter.post("/", [isAdmin], postDirector);
directorsRouter.put("/:id", [isAdmin], updateDirector);
directorsRouter.delete("/:id", [isAdmin], deleteDirector);

module.exports = directorsRouter;
