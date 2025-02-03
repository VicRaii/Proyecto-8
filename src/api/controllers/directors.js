const deleteFile = require('../../utils/deleteFile')
const filmsDirectors = require('../models/directors')

const getDirectors = async (req, res, next) => {
  try {
    const directors = await filmsDirectors.find().populate('films')
    return res.status(200).json(directors)
  } catch (error) {
    return res.status(400).json({
      message: 'Error getting director',
      error: error.message
    })
  }
}

const getDirectorsById = async (req, res, next) => {
  try {
    const { id } = req.params
    const director = await filmsDirectors.findById(id).populate('films')
    return res.status(200).json(director)
  } catch (error) {
    return res.status(400).json('Error getting director by ID')
  }
}

const postDirector = async (req, res, next) => {
  try {
    const newDirector = new filmsDirectors(req.body)

    if (req.file) {
      newDirector.image = req.file.path
    }

    const directorSaved = await newDirector.save()
    return res.status(200).json(directorSaved)
  } catch (error) {
    return res.status(404).json('Error posting new director' + error.message)
  }
}

const updateDirector = async (req, res, next) => {
  try {
    const { id } = req.params
    const newDirector = new filmsDirectors(req.body)
    newDirector._id = id

    if (req.file) {
      console.log('New image uploaded:', req.file.path)
      newDirector.image = req.file.path

      const oldDirector = await filmsDirectors.findById(id)

      if (oldDirector && oldDirector.image) {
        console.log('Old image to delete:', oldDirector.image)
        deleteFile(oldDirector.image)
      }
    }

    const directorUpdated = await filmsDirectors.findByIdAndUpdate(
      id,
      newDirector,
      {
        new: true
      }
    )

    if (!directorUpdated) {
      return res.status(404).json('Director not found')
    }

    return res.status(200).json(directorUpdated)
  } catch (error) {
    console.error('Error updating director:', error)
    return res.status(500).json({
      message: 'Error updating director',
      error: error.message
    })
  }
}

const deleteDirector = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedDirector = await filmsDirectors.findByIdAndDelete(id)

    if (!deletedDirector) {
      return res.status(404).json('Director not found')
    }

    console.log('Director to be deleted:', deletedDirector)

    if (deletedDirector.image) {
      console.log('Image to delete:', deletedDirector.image)
      deleteFile(deletedDirector.image)
    }

    return res.status(200).json(deletedDirector)
  } catch (error) {
    console.error('Error deleting director:', error)
    return res.status(404).json('Error deleting director')
  }
}

module.exports = {
  getDirectors,
  getDirectorsById,
  postDirector,
  updateDirector,
  deleteDirector
}
