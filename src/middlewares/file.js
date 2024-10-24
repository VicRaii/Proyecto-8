const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Función para crear el storage dinámico
const createCloudinaryStorage = (folderName = "FilmsAndDirectors") => {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
      return {
        folder: folderName,
        allowed_formats: ["jpg", "png", "gif", "jpeg", "webp"],
      };
    },
  });
};

// Función para crear el middleware de upload
const createUploadMiddleware = (folderName) => {
  const storage = createCloudinaryStorage(folderName);
  return multer({ storage });
};

module.exports = createUploadMiddleware;
