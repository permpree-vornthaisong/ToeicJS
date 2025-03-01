import React, { useState } from "react";
import { uploadFile } from "../services/SaveFileToStorage";

const AddFile = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [uploadedFileURL, setUploadedFileURL] = useState("");
    
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setMessage(""); // Clear previous message
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage("กรุณาเลือกไฟล์");
            return;
        }
        
        setMessage("กำลังอัปโหลดไฟล์...");
        
        try {
            const result = await uploadFile(file);
            setMessage(result.message || "อัปโหลดไฟล์สำเร็จ");
            
            if (result.files && result.files.length > 0) {
                setUploadedFileURL(result.files[0].downloadURL);
            }
        } catch (error) {
            setMessage(error.message || "การอัปโหลดล้มเหลว กรุณาลองใหม่");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-lg font-semibold">อัปโหลดไฟล์</h2>
            <input 
                type="file" 
                onChange={handleFileChange} 
                className="mt-2 border border-gray-300 rounded p-2"
            />
            
            <button
                onClick={handleUpload}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                อัปโหลด
            </button>

            {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}

            {uploadedFileURL && (
                <div className="mt-2 text-sm text-center">
                    <p className="text-gray-700">ไฟล์ที่อัปโหลด:</p>
                    <a
                        href={uploadedFileURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline break-all"
                    >
                        {uploadedFileURL}
                    </a>
                </div>
            )}
        </div>
    );
};

export default AddFile;
