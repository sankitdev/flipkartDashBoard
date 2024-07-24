import React from "react";
import { useExcelParser } from "../Hooks/useExcelParser";

/**
 * Component to handle file upload and display parsed Excel data
 * @returns {JSX.Element}
 */

const ExcelUploader = () => {
  const { data, error, parseExcelFile } = useExcelParser();
  function handleFileUpload(event) {
    const file = event.target.files[0];
    parseExcelFile(file).catch((err) =>
      console.log("Error parsing Excel file:", err)
    );
  }
  return (
    <>
      <div>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
        {error && <p>Error: {error.message}</p>}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
};

export default ExcelUploader;
