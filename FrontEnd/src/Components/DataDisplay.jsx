import React, { useContext, useEffect } from "react";
import { DataContext } from "./Context/DataContext";

const DataDisplay = () => {
  const { jsonData, setJsonData } = useContext(DataContext);

  useEffect(() => {
    const storedData = localStorage.getItem("jsonData");
    if (storedData) {
      setJsonData(JSON.parse(storedData));
    } else {
      fetch("http://localhost:3000/get-json")
        .then((response) => response.json())
        .then((data) => {
          setJsonData(data);
          localStorage.setItem("jsonData", JSON.stringify(data));
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [setJsonData]);

  return (
    <div>
      {jsonData ? (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      ) : (
        <p>Loading or No data found</p>
      )}
    </div>
  );
};

export default DataDisplay;
