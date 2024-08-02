import express from "express";
import cors from "cors";
import { setupDirectories } from "./setupDirectories.js";
import upload from "./uploadMiddleware.js";
import { processFile } from "./fileProcessing.js";
import { testSession } from "./session.js";

const app = express();
const PORT = 3000;

// Enable CORS for all origins
app.use(cors());
app.use(testSession);
// Ensure required directories exist
setupDirectories();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Endpoint to handle file upload and processing
app.post("/upload", upload.single("file"), (req, res) => {
  processFile(req, res);
});

app.get("/get-json", (req, res) => {
  if (req.session.jsonData) {
    res.json(req.session.jsonData);
  } else {
    res.status(404).json({ error: "No data found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
