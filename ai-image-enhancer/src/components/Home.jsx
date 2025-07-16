import React from 'react'
import { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import {enhancedImageAPI} from '../utils/enhancedImageAPI.js' // 

const Home = () => {
  // State to store the uploaded image URL (for preview)
  const [uploadImage, setUploadImage] = useState(null);
  // State to store the enhanced image URL
  const [enhancedImage, setEnhancedImage] = useState(null);
  // State to manage loading status during image enhancement
  const [loading, setLoading] = useState(false);

  // Handler for image upload
  const handleImageUpload = async (image) => {
    // Set the uploaded image for immediate preview
    setUploadImage(URL.createObjectURL(image));
    // Set loading to true while the enhancement process is active
    setLoading(true);
    // Clear previously enhanced image
    setEnhancedImage(null);

    try {
      // Call the API to get the enhanced image URL
      const enhancedImageURL = await enhancedImageAPI(image);
      // Set the enhanced image URL
      setEnhancedImage(enhancedImageURL);
      // Set loading to false once the enhancement is complete
      setLoading(false);
    } catch (error) {
      // Log the error and display a user-friendly message
      console.error("Error enhancing image:", error);
      // Using a simple div for error message instead of alert()
      // A more robust solution would involve a state variable for error messages
      // and a dedicated modal/toast component.
      document.getElementById('errorMessageContainer').innerText = "Oops! Something went wrong while enhancing your image. Please try again.";
      setLoading(false); // Ensure loading is off on error
      setUploadImage(null); // Clear uploaded image on error for a fresh start
    }
  };

  return (
    // Container for the image upload and preview components
    <div className="w-full max-w-5xl px-4">
      {/* Container for displaying error messages */}
      <div id="errorMessageContainer" className="text-red-400 text-center mb-4 font-semibold"></div>
      {/* ImageUpload component for handling file selection */}
      <ImageUpload handleImageUpload={handleImageUpload} />
      {/* ImagePreview component to display original and enhanced images */}
      <ImagePreview loading={loading} uploaded={uploadImage} enhanced={enhancedImage?.image} />
    </div>
  );
};

export default Home
