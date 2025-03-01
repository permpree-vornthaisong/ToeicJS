import React, { useState } from "react";
import { uploadFile } from "../services/SaveFileToStorage";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [uploadedFileURL, setUploadedFileURL] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage("กรุณาเลือกไฟล์");
            return;
        }

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
        <div>
            <h2>อัปโหลดไฟล์</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>อัปโหลด</button>
            {message && <p>{message}</p>}
            {uploadedFileURL && (
                <div>
                    <p>ไฟล์ที่อัปโหลด:</p>
                    <a href={uploadedFileURL} target="_blank" rel="noopener noreferrer">
                        {uploadedFileURL}
                    </a>
                </div>
            )}
        </div>
    );
};

export default FileUpload;