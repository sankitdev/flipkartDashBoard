import React, { useState } from "react";
import Body from "./src/Components/Body";
import SideBar from "./src/Components/SideBar";
import Nav from "./src/Components/Nav";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  function toggleSideBar() {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <Nav toggleSideBar={toggleSideBar} />
      <div className="flex h-screen">
        <SideBar isVisible={isVisible} />
        <Body />
      </div>
    </>
  );
};

export default App;
