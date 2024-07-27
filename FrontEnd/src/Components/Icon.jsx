import React, { useState } from "react";
import MyDropzone from "./MyDropzone";
const Icon = () => {
  const [visible, setVisible] = useState(false);
  function handleClick() {
    setVisible(true);
  }
  return (
    <>
      <div className="text-2xl gap-8 flex absolute right-10">
        <i className="ri-file-add-line mr-20" onClick={handleClick}></i>
        <i className="ri-notification-line"></i>
        <i className="ri-chat-1-line"></i>
        <i className="ri-questionnaire-line"></i>
      </div>
      {visible && <MyDropzone setVisible={setVisible} />}
    </>
  );
};

export default Icon;
