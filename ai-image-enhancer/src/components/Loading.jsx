import React from 'react'

const Loading = () => {
  return (
    // Container for the loading spinner, centered vertically and horizontally
    <div className="flex justify-center items-center h-full">
      {/* Spinner animation with dark theme colors */}
      <div className="animate-spin border-4 border-t-transparent w-16 h-16 rounded-full border-purple-500"></div>
    </div>
  );
};

export default Loading
