import express, { json } from "express";
import cors from "cors";
import multer from "multer";
import xlsx from "xlsx";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Enable CORS for all origins
app.use(cors());

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Ensure the json directory exists for saving JSON files
const jsonDir = path.join(__dirname, "json");
if (!fs.existsSync(jsonDir)) {
  fs.mkdirSync(jsonDir);
}

// Set up multer for file uploads
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

// Endpoint to handle file upload and processing
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const filePath = path.join(uploadDir, req.file.filename);
  const jsonFilePath = path.join(
    jsonDir,
    `${path.parse(req.file.filename).name}.json`
  );

  try {
    // Read the uploaded Excel file
    const workbook = xlsx.readFile(filePath);
    const sheet_name_list = workbook.SheetNames;
    const jsonData = xlsx.utils.sheet_to_json(
      workbook.Sheets[sheet_name_list[0]]
    );

    // Save JSON data to a file
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

    // Optionally delete the file after processing
    fs.unlinkSync(filePath);
    res.json(jsonData);
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).json({ error: "Error processing file." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
