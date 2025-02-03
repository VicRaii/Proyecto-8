const { isAdmin } = require('../../middlewares/auth')
const {
  getUsers,
  registerUser,
  loginUser,
  updateUserRole,
  deleteUser
} = require('../controllers/users')

const usersRouter = require('express').Router()

usersRouter.get('/', [isAdmin], getUsers)
usersRouter.put('/role/:id', [isAdmin], updateUserRole)
usersRouter.delete('/:id', [isAdmin], deleteUser)
usersRouter.post('/register', registerUser)
usersRouter.post('/login', loginUser)

module.exports = usersRouter
