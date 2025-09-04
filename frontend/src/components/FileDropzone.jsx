import { useRef, useState } from "react";

export default function FileDropzone({ onFilesSelected }) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesSelected(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };
  
  const handleClick = () => {
    inputRef.current.click();
  };
  
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onFilesSelected(e.target.files);
    }
  };

  return (
    <div>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center mb-4 text-blue-400 cursor-pointer ${
          dragging ? "bg-blue-100" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <span className="text-4xl">&#128193;</span>
        <div>*drag or browse from device</div>
      </div>
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={handleFileChange}
        multiple
      />
    </div>
  );
}
