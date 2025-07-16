import React from 'react'

const ImageUpload = (props) => {
  // Handler for when a file is selected via the input
  const imageHandler = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      props.handleImageUpload(file); // Pass the file to the parent component's handler
    }
  };

  return (
    // Main container for the upload area with dark theme styling
    <div className="bg-gray-800 shadow-xl rounded-2xl p-8 mb-8 border border-gray-700 hover:border-purple-600 transition-all duration-300 ease-in-out transform hover:scale-[1.01]">
      {/* Label acting as the clickable upload area */}
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-3 border-dashed border-gray-600 rounded-xl p-10 text-center hover:border-purple-500 transition-all duration-300 ease-in-out group"
      >
        {/* Text prompt for uploading */}
        <span className="text-2xl font-bold text-gray-300 group-hover:text-purple-400 transition-colors duration-300 flex items-center justify-center flex-col">
          {/* Icon for visual appeal */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mb-4 text-gray-500 group-hover:text-purple-500 transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v8"
            />
          </svg>
          Drag & Drop Your Image Here or <span className="text-purple-400 underline ml-2">Click to Upload</span>
        </span>
        {/* Sub-text for accepted file types */}
        <p className="text-sm text-gray-500 mt-3">Supports JPG, PNG, WEBP, and more (Max file size: 10MB)</p>
      </label>

      {/* Hidden file input element */}
      <input id="fileInput" type="file" className="hidden" onChange={imageHandler} accept="image/*" />
    </div>
  );
};

export default ImageUpload
