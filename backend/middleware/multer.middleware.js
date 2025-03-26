const multer = require('multer')
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'public/property-images/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, `property_image_${file.originalname.split(" ").join("")}`);
  },
});

const upload = multer({ storage: storage })

module.exports = { upload };