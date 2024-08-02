import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, "uploads");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save uploaded file to `uploads` directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use original filename for saved file
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes("excel") || file.mimetype.includes("sheet")) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only Excel files are allowed."), false);
    }
  },
});

export default upload;
