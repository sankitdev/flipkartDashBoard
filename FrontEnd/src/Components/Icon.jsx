import React, { useState } from "react";
import { CgAddR } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import MyDropzone from "./MyDropzone";
const Icon = () => {
  const [visible, setVisible] = useState(false);
  function handleClick() {
    setVisible(true);
  }
  return (
    <>
      <div className="text-2xl gap-8 flex absolute right-10">
        <CgAddR onClick={handleClick} />
        <FaBell />
        <CiChat1 />
        <FaRegQuestionCircle />
      </div>
      {visible && <MyDropzone setVisible={setVisible} />}
    </>
  );
};

export default Icon;
