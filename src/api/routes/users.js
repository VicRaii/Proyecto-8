const { getUsers, registerUser, loginUser } = require("../controllers/users");

const usersRouter = require("express").Router();

usersRouter.get("/", getUsers);
usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser);

module.exports = usersRouter;
