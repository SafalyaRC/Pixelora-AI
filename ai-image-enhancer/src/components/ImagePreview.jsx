import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  // Function to handle downloading the enhanced image
  const handleDownload = () => {
    if (props.enhanced) {
      // Create a temporary anchor element
      const link = document.createElement('a');
      // Set the href to the enhanced image URL
      link.href = props.enhanced;
      // Set the download attribute with a desired filename
      link.download = 'enhanced_image.png'; // You can make this dynamic if needed
      // Append the link to the body (required for Firefox)
      document.body.appendChild(link);
      // Programmatically click the link to trigger the download
      link.click();
      // Remove the link from the document
      document.body.removeChild(link);
    }
  };

  return (
    // Grid container for displaying original and enhanced images side-by-side
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {/* Card for the Original Image */}
      <div className="bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-700">
        {/* Header for the original image section */}
        <h2 className="text-2xl font-bold text-center bg-gray-900 text-purple-400 py-4 border-b border-gray-700">
          Original Image
        </h2>

        {/* Conditional rendering based on whether an image is uploaded */}
        {props.uploaded ? (
          // Display the uploaded image
          <img
            src={props.uploaded}
            alt="Original"
            className="w-full h-96 object-contain p-4" // object-contain to ensure image fits without cropping
          />
        ) : (
          // Placeholder when no image is selected
          <div className="flex items-center justify-center h-96 bg-gray-900 text-gray-500 text-lg font-medium">
            No Image Selected Yet
          </div>
        )}
      </div>

      {/* Card for the Enhanced Image */}
      <div className="bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-700">
        {/* Header for the enhanced image section */}
        <h2 className="text-2xl font-bold text-center bg-gray-900 text-pink-400 py-4 border-b border-gray-700">
          Enhanced Image
        </h2>

        {/* Conditional rendering for enhanced image or loading state */}
        {props.loading ? (
          // Display loading spinner when enhancement is in progress
          <div className="flex items-center justify-center h-96 bg-gray-900">
            <Loading />
          </div>
        ) : props.enhanced ? (
          // Display the enhanced image if available and not loading
          <>
            <img
              src={props.enhanced}
              alt="Enhanced"
              className="w-full h-96 object-contain p-4" // object-contain to ensure image fits without cropping
            />
            {/* Download button for the enhanced image */}
            <div className="p-4 flex justify-center">
              <button
                onClick={handleDownload}
                className="bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Enhanced Image
              </button>
            </div>
          </>
        ) : (
          // Placeholder when no enhanced image is available
          <div className="flex items-center justify-center h-96 bg-gray-900 text-gray-500 text-lg font-medium">
            Your Enhanced Image Will Appear Here
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;

