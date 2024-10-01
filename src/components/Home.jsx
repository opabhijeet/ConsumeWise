import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleCapture = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = () => {
    // Handle the submit logic here
    console.log('Image submitted:', image);
    navigate("/analysis")
  };

  return (
    <div className="flex flex-col justify-center items-center p-6 bg-gray-100 min-h-screen w-full">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Upload Ingredient List</h1>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload} 
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <button 
          onClick={handleSubmit} 
          className="mb-6 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Or Capture Image</h2>
        <input 
          type="file" 
          accept="image/*" 
          capture="environment" 
          onChange={handleCapture} 
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <p className="text-sm text-gray-500 text-center mb-4">Use your device camera to capture an image.</p>
        {image && <img src={image} alt="Uploaded" className="mt-4 max-w-full rounded shadow-md" />}
      </div>
    </div>
  );
}

export default Home;