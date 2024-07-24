// src/hooks/useExcelParser.js
import { useState } from "react";
import * as XLSX from "xlsx";

/**
 * Custom hook to handle Excel file parsing
 * @returns {Object} - Hook containing state and file handling functions
 */
export const useExcelParser = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const parseExcelFile = (file) => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.onload = (event) => {
          const data = new Uint8Array(event.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          setData(jsonData);
          resolve(jsonData);
        };
        reader.onerror = (event) => {
          setError(event.target.error);
          reject(event.target.error);
        };
        reader.readAsArrayBuffer(file);
      } catch (error) {
        setError(error);
        reject(error);
      }
    });
  };

  return { data, error, parseExcelFile };
};
