import React, { useState } from "react";
import axios from "axios";
import { uploadFile } from "../services/SaveFileToStorage"; // นำเข้าฟังก์ชัน uploadFile
const apiUrl = import.meta.env.VITE_API_URL1;

const InputFieldsQuestions = () => {
  const [file, setFile] = useState(null); // เพิ่ม state สำหรับเก็บไฟล์รูปภาพ
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    URL_file: "", // เพิ่ม URL_file สำหรับเก็บ URL รูปภาพ
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
      setMessage("กรุณาเลือกไฟล์รูปภาพก่อนส่งข้อมูล");
      return;
    }

    setMessage("กำลังอัปโหลดไฟล์รูปภาพ...");

    try {
      // Upload file first
      const result = await uploadFile(file);

      if (result.files && result.files.length > 0) {
        const fileURL = result.files[0].downloadURL;
        setMessage("อัปโหลดไฟล์รูปภาพสำเร็จ กำลังส่งข้อมูล...");

        // Update formData with the uploaded file URL
        const updatedFormData = { ...formData, URL_file: fileURL };

        // ✅ ส่งข้อมูลไปยัง API `createListeningQuestion`
        const response = await axios.post(
          `${apiUrl}/createListeningQuestion`,
          updatedFormData,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        console.log("✅ Response:", response.data);
        setMessage("ส่งข้อมูลสำเร็จ!");

        // ✅ รีเซ็ตฟอร์ม
        setFormData({
          URL_file: "",
          Question: "",
          choice1: "",
          choice2: "",
          choice3: "",
          choice4: "",
          Ans: "",
        });
        setFile(null); // รีเซ็ตไฟล์รูปภาพ
      } else {
        setMessage("เกิดข้อผิดพลาดในการอัปโหลดไฟล์รูปภาพ");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setMessage("การอัปโหลดหรือส่งข้อมูลล้มเหลว กรุณาลองใหม่");
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-lg font-semibold text-white">เพิ่มคำถาม Listening</h2>

      <input
        type="file"
        onChange={handleFileChange}
        className="mt-2 border border-gray-300 rounded p-2"
      />

      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}

      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-md"
      >
        {/* ✅ ฟิลด์คำถาม */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Question
          </label>
          <input
            type="text"
            name="Question"
            value={formData.Question}
            onChange={handleChange}
            required
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* ✅ ฟิลด์ตัวเลือก */}
        {["choice1", "choice2", "choice3", "choice4"].map((choice, index) => (
          <div key={choice} className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Choice {index + 1}
            </label>
            <input
              type="text"
              name={choice}
              value={formData[choice]}
              onChange={handleChange}
              required
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}

        {/* ✅ ฟิลด์เลือกคำตอบที่ถูกต้อง */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Answer
          </label>
          <select
            name="Ans"
            value={formData.Ans}
            onChange={handleChange}
            required
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            disabled={
              !formData.choice1 ||
              !formData.choice2 ||
              !formData.choice3 ||
              !formData.choice4
            }
          >
            <option value="">เลือกคำตอบที่ถูกต้อง</option>
            {["choice1", "choice2", "choice3", "choice4"].map(
              (choice, index) => (
                <option key={choice} value={formData[choice]}>
                  {formData[choice] || `Choice ${index + 1}`}
                </option>
              )
            )}
          </select>
        </div>

        {/* ✅ ปุ่มส่งข้อมูล */}
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

export default InputFieldsQuestions;