import React, { useState } from 'react';


const UserPanel = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [inputText, setInputText] = useState("");
    
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file:any = event.target.files?.[0];
      setSelectedImage(file);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
      };

      const handleSubmit = () => {
        
        console.log("Submitted:", inputText, selectedImage);
      };
    
  return (
    
    <div className="w-300 h-600 bg-white p-4 shadow-md rounded-md">

    <div className="flex flex-col items-center justify-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
        />
      {selectedImage && (
          <img
          src={URL.createObjectURL(selectedImage)}
          alt="Selected Image"
          className="w-200 h-400 "
          />
          )}
    </div>
    <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={handleInputChange}
        className="mt-4 p-2 border border-gray-300 rounded-md w-full"
      />
       <button
        className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
        onClick={handleSubmit}
      >
        Submit
      </button>
     </div>
  )
}

export default UserPanel



