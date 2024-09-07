const { getDirectors } = require("../controllers/directors");

const directorsRouter = require("express").Router();

directorsRouter.get("/", getDirectors);

module.exports = directorsRouter;
