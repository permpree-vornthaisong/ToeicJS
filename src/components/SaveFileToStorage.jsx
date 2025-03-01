// src/components/InputFieldsListening.jsx

import React, { useState } from "react";
import { uploadFile } from "../services/SaveFileToStorage";
import axios from "axios";

const InputFieldsListening = () => {
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

            if (result.downloadURL) {
                setUploadedFileURL(result.downloadURL);
                setFormData((prevData) => ({
                    ...prevData,
                    URL_file: result.downloadURL,
                }));
            }
        } catch (error) {
            setMessage(error.message || "การอัปโหลดล้มเหลว กรุณาลองใหม่");
        }
    };

    const [formData, setFormData] = useState({
        URL_file: "",
        Question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        Ans: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://127.0.0.1:5001/test-63698/us-central1/createListening",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Response:", response.data);

            setFormData({
                URL_file: "",
                Question: "",
                choice1: "",
                choice2: "",
                choice3: "",
                choice4: "",
                Ans: "",
            });

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                อัปโหลดไฟล์
            </button>
            {message && <p>{message}</p>}
            {uploadedFileURL && (
                <div>
                    <p>ไฟล์ที่อัปโหลด:</p>
                    <a href={uploadedFileURL} target="_blank" rel="noopener noreferrer">
                        {uploadedFileURL}
                    </a>
                </div>
            )}

            <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="URL_file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        URL_file
                    </label>
                    <input
                        type="text"
                        name="URL_file"
                        value={formData.URL_file}
                        onChange={handleChange}
                        required
                        id="URL_file"
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="Question" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Question
                    </label>
                    <input
                        type="text"
                        name="Question"
                        value={formData.Question}
                        onChange={handleChange}
                        required
                        id="Question"
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                {["choice1", "choice2", "choice3", "choice4"].map((choice, index) => (
                    <div key={choice} className="mb-6">
                        <label htmlFor={choice} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Choice {index + 1}
                        </label>
                        <input
                            type="text"
                            name={choice}
                            value={formData[choice]}
                            onChange={handleChange}
                            required
                            id={choice}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                ))}

                <div className="mb-6">
                    <label htmlFor="Ans" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Answer
                    </label>
                    <select
                        name="Ans"
                        value={formData.Ans}
                        onChange={handleChange}
                        required
                        id="Ans"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Select the correct answer</option>
                        <option value={formData.choice1}>{formData.choice1 || "Choice 1"}</option>
                        <option value={formData.choice2}>{formData.choice2 || "Choice 2"}</option>
                        <option value={formData.choice3}>{formData.choice3 || "Choice 3"}</option>
                        <option value={formData.choice4}>{formData.choice4 || "Choice 4"}</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default InputFieldsListening;
