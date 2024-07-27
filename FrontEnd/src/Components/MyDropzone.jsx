import React, { useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import ProgressBar from "./ProgrssBar";
import { DataContext } from "./Context/DataContext";

function MyDropzone({ setVisible }) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const { setJsonData } = useContext(DataContext);

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);

    axios
      .post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.lengthComputable) {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setUploadProgress(progress);
          }
        },
      })
      .then((response) => {
        setUploadProgress(100); // Set progress to 100% on success
        setUploading(false);
        setVisible(false); // Close dropzone on success
        setJsonData(response.data);
      })
      .catch((error) => {
        console.error("Upload failed:", error);
        setUploading(false);
      });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => uploadFile(file));
      setIsDragActive(false); // Reset drag state
    },
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        {...getRootProps()}
        className={`relative w-1/2 h-1/2 flex flex-col justify-center items-center border-2 p-5 cursor-pointer bg-white transition-colors 
        ${isDragActive ? "border-green-500 bg-gray-100" : "border-blue-500"}`}
      >
        <input {...getInputProps()} />
        <button
          className="absolute top-2 right-2 text-xl text-black"
          onClick={(e) => {
            e.stopPropagation();
            setVisible(false);
          }}
        >
          <AiOutlineClose />
        </button>
        <p className={`${isDragActive ? "text-green-500" : "text-gray-700"}`}>
          Drag & Drop Here
        </p>
        {uploading && <ProgressBar progress={uploadProgress} />}{" "}
        {/* Use ProgressBar component */}
      </div>
    </div>
  );
}

export default MyDropzone;
