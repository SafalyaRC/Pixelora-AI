import Home from "./components/Home"

function App() {
  return (
    // Main container with dark background, centered content, and padding
    // Increased vertical padding (py-12) to ensure content has enough space from top/bottom edges
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 font-inter">
      {/* Header section for the application title and description */}
      {/* Increased margin-bottom (mb-16) to ensure the text below is not cut off */}
      {/* Added pt-4 to give more top padding within the header section itself */}
      <div className="text-center mb-16 pt-4">
        {/* Main title for the application */}
        {/* Added leading-tight to ensure the line height accommodates the text and shadow */}
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 drop-shadow-lg leading-tight">
          Pixelora AI 
        </h1>
        {/* Subtitle providing a brief description of the app's functionality */}
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Enhance your image instantly with advanced AI precision.
        </p>
      </div>

      {/* Home component, which contains the core functionality */}
      <Home />

      {/* Footer section with attribution */}
      <div className="text-sm text-gray-500 mt-12">
        Powered By <span className="font-semibold text-purple-400"> <a href="https://github.com/SafalyaRC" target="_blank">@SafalyaRC</a></span>
      </div>
    </div>
  );
}


export default App
