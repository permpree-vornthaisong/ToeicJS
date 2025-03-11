// src/services/readingServicesPart6.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL1;

/** ✅ สร้างเอกสารใหม่ (เพิ่มชุดคำถาม Reading Part 6) */
export const createReadingPart6 = async (payload) => {
    try {
        console.log("📤 Sending payload:", payload); // ✅ ตรวจสอบข้อมูลก่อนส่ง
        const response = await axios.post(`${API_BASE_URL}/createReadingPart6`, payload, {
            headers: { "Content-Type": "application/json" },
        });

        console.log("✅ Document created:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Error creating document:", error.response ? error.response.data : error);
        throw error;
    }
};

/** ✅ ดึงข้อมูลทั้งหมดของ Reading Part 6 */
export const getAllReadingPart6 = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getAllReadingPart6`);
        console.log("📥 Received data:", response.data); // ✅ ตรวจสอบข้อมูลที่ดึงมา
        return response.data;
    } catch (error) {
        console.error("❌ Error fetching documents:", error.response ? error.response.data : error);
        return [];
    }
};

/** ✅ อัปเดตเอกสาร */
export const updateReadingPart6 = async (id, payload) => {
    try {
        console.log(`📤 Updating document ID: ${id}`, payload);
        const response = await axios.put(`${API_BASE_URL}/updateReadingPart6`, { id, ...payload }, {
            headers: { "Content-Type": "application/json" },
        });

        console.log("✅ Document updated:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Error updating document:", error.response ? error.response.data : error);
        throw error;
    }
};

/** ✅ ลบเอกสาร */
export const deleteReadingPart6 = async (id) => {
    try {
        console.log(`🗑 Deleting document ID: ${id}`);
        const response = await axios.delete(`${API_BASE_URL}/deleteReadingPart6`, {
            headers: { "Content-Type": "application/json" },
            data: { id },
        });

        console.log("✅ Document deleted:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Error deleting document:", error.response ? error.response.data : error);
        throw error;
    }
};
