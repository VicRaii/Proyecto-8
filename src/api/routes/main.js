const directorsRouter = require("./directors");
const filmsRouter = require("./films");
const usersRouter = require("./users");

const mainRouter = require("express").Router();

mainRouter.use("/films", filmsRouter);
mainRouter.use("/directors", directorsRouter);
mainRouter.use("/users", usersRouter);

module.exports = mainRouter;
