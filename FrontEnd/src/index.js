import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "../App.jsx";
import { DataProvider } from "./Components/Context/DataContext.jsx";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);
