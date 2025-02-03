const mongoose = require('mongoose')

const filmDirectorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    numberOfFilms: { type: Number, required: true },
    films: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Films'
      }
    ]
  },
  {
    timestamps: true,
    collection: 'filmsDirectors'
  }
)

const filmsDirectors = mongoose.model(
  'filmsDirectors',
  filmDirectorSchema,
  'filmsDirectors'
)

module.exports = filmsDirectors
