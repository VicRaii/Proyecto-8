const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const folderName = req.body.folder || "FilmsAndDirectors";

    return {
      folder: folderName,
      allowed_formats: ["jpg", "png", "gif", "jpeg", "webp"],
    };
  },
});
