const { isAuth, isAdmin } = require('../../middlewares/auth')
const upload = require('../../middlewares/upload')
const {
  getFilms,
  getFilmsById,
  getFilmsByGenre,
  getFilmsByYear,
  gettingFilmsByRunningTime,
  postFilm,
  updateFilm,
  deleteFilm
} = require('../controllers/films')

const filmsRouter = require('express').Router()

filmsRouter.get('/', [isAdmin], getFilms)
filmsRouter.get('/:id', getFilmsById)
filmsRouter.get('/genre/:genre', getFilmsByGenre)
filmsRouter.get('/year/:year', getFilmsByYear)
filmsRouter.get('/runningTime/:runningTime', gettingFilmsByRunningTime)
filmsRouter.post('/', [isAuth], upload.single('image'), postFilm)
filmsRouter.put('/:id', [isAdmin], upload.single('image'), updateFilm)
filmsRouter.delete('/:id', [isAdmin], deleteFilm)

module.exports = filmsRouter
