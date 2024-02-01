import React, { useState } from 'react';
import axios from "axios";


const UserPanel = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [name, setName] = useState("");
    
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file:any = event.target.files?.[0];
      setSelectedImage(file);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
      };

      const handleSubmit = async() => {
        try {
           
            const apiUrl = "http://localhost:8080/item";
            const data = { name,selectedImage };
            const response = await axios.post(apiUrl, data);
      
            // Handle the response as needed
            console.log("Server Response:", response.data);
          } catch (error) {
            // Handle errors
            console.error("Error:", error);
          }
        console.log("Submitted:", name, selectedImage);
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
        value={name}
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



