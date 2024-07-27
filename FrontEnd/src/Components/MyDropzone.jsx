import { useDropzone } from "react-dropzone";
import { AiOutlineClose } from "react-icons/ai";

function MyDropzone({ setVisible }) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        {...getRootProps()}
        className="relative w-1/2 h-1/2 flex justify-center items-center border-2 border-dashed border-blue-500 p-5 cursor-pointer bg-white"
      >
        <input {...getInputProps()} />
        <p>Drag & Drop Here</p>
        <button
          className="absolute top-2 right-2 text-xl text-black"
          onClick={(e) => {
            e.stopPropagation();
            setVisible(false);
          }}
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}

export default MyDropzone;
