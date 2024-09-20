const { isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
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
directorsRouter.post("/", [isAdmin], upload.single("image"), postDirector);
directorsRouter.put("/:id", [isAdmin], upload.single("image"), updateDirector);
directorsRouter.delete("/:id", [isAdmin], deleteDirector);

module.exports = directorsRouter;
