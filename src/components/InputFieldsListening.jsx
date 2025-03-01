import React, { useState } from "react";
import axios from "axios";
import { uploadFile } from "../services/SaveFileToStorage";
const apiUrl = import.meta.env.VITE_API_URL1;

const InputFieldsListening = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    URL_file: "",
    Question: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    Ans: "",
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setMessage(""); // Clear previous message
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("กรุณาเลือกไฟล์ก่อนส่งข้อมูล");
      return;
    }

    setMessage("กำลังอัปโหลดไฟล์...");

    try {
      // Upload file first
      const result = await uploadFile(file);

      if (result.files && result.files.length > 0) {
        const fileURL = result.files[0].downloadURL;
        setMessage("อัปโหลดไฟล์สำเร็จ กำลังส่งข้อมูล...");

        // Update formData with the uploaded file URL
        const updatedFormData = { ...formData, URL_file: fileURL };

        // Send form data
        const response = await axios.post(
          `${apiUrl}/createListening`,
          updatedFormData,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        console.log("Response:", response.data);
        setMessage("ส่งข้อมูลสำเร็จ!");

        // Reset form after submission
        setFormData({
          URL_file: "",
          Question: "",
          choice1: "",
          choice2: "",
          choice3: "",
          choice4: "",
          Ans: "",
        });
        setFile(null);
      } else {
        setMessage("เกิดข้อผิดพลาดในการอัปโหลดไฟล์");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("การอัปโหลดหรือส่งข้อมูลล้มเหลว กรุณาลองใหม่");
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-lg font-semibold">อัปโหลดไฟล์ & ส่งข้อมูล</h2>

      <input
        type="file"
        onChange={handleFileChange}
        className="mt-2 border border-gray-300 rounded p-2"
      />

      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}

      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full"
      >
        <div className="mb-6">
          <label
            htmlFor="Question"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Question
          </label>
          <input
            type="text"
            name="Question"
            value={formData.Question}
            onChange={handleChange}
            required
            id="Question"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {["choice1", "choice2", "choice3", "choice4"].map((choice, index) => (
          <div key={choice} className="mb-6">
            <label
              htmlFor={choice}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Choice {index + 1}
            </label>
            <input
              type="text"
              name={choice}
              value={formData[choice]}
              onChange={handleChange}
              required
              id={choice}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        ))}

        <div className="mb-6">
          <label
            htmlFor="Ans"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Answer
          </label>
          <select
            name="Ans"
            value={formData.Ans}
            onChange={handleChange}
            required
            id="Ans"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            disabled={
              !formData.choice1 ||
              !formData.choice2 ||
              !formData.choice3 ||
              !formData.choice4
            }
          >
            <option value="">Select the correct answer</option>
            {["choice1", "choice2", "choice3", "choice4"].map(
              (choice, index) => (
                <option key={choice} value={formData[choice]}>
                  {formData[choice] || `Choice ${index + 1}`}
                </option>
              )
            )}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputFieldsListening;
