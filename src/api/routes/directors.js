const { isAdmin } = require('../../middlewares/auth')
const upload = require('../../middlewares/upload')
const {
  deleteDirector,
  getDirectors,
  getDirectorsById,
  postDirector,
  updateDirector
} = require('../controllers/directors')

const directorsRouter = require('express').Router()

directorsRouter.get('/', [isAdmin], getDirectors)
directorsRouter.get('/:id', getDirectorsById)
directorsRouter.post(
  '/',
  [isAdmin],
  upload('FilmsAndDirectors').single('image'),
  postDirector
)
directorsRouter.put(
  '/:id',
  [isAdmin],
  upload('FilmsAndDirectors').single('image'),
  updateDirector
)
directorsRouter.delete('/:id', [isAdmin], deleteDirector)

module.exports = directorsRouter
