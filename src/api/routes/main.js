const directorsRouter = require("./directors");
const filmsRouter = require("./films");

const mainRouter = require("express").Router();

mainRouter.use("/films", filmsRouter);
mainRouter.use("/directors", directorsRouter);

module.exports = mainRouter;
