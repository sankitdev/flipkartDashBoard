import xlsx from "xlsx";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonDir = path.join(__dirname, "json");

export const processFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const filePath = path.join(__dirname, "uploads", req.file.filename);
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

    //Storing JSON data to a file
    req.session.jsonData = jsonData;
    // Optionally delete the file after processing
    fs.unlinkSync(filePath);
    res.json(jsonData);
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).json({ error: "Error processing file." });
  }
};
