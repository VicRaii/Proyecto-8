const cloudinary = require('cloudinary').v2

const deleteFile = (url) => {
  if (!url) {
    console.error('No URL provided for deletion.')
    return
  }

  console.log('URL provided for deletion:', url)

  const imgSplited = url.split('/')
  const folderName = imgSplited.at(-2)
  const fileName = imgSplited.at(-1).split('.')[0]

  console.log('Folder name:', folderName)
  console.log('File name:', fileName)

  cloudinary.uploader.destroy(`${folderName}/${fileName}`, (error, result) => {
    if (error) {
      console.error('Error deleting file:', error)
    } else {
      console.log('File deleted successfully:', result)
    }
  })
}

module.exports = deleteFile
