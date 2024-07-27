import React, { useContext } from "react";
import { DataContext } from "./Context/DataContext";

const DataDisplay = () => {
  const { jsonData } = useContext(DataContext);

  return (
    <div>
      {jsonData ? (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default DataDisplay;
