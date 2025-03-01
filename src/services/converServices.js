// src/services/converServices.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL1;

/** ✅ อัปโหลดไฟล์ไป Firebase Storage */
export const uploadFileToStorage = async (file) => {
    if (!file) {
        alert("Please select a file.");
        return null;
    }

    const formDataUpload = new FormData();
    formDataUpload.append("file", file);

    try {
        const response = await axios.post(`${API_BASE_URL}/SaveFileToStorage`, formDataUpload, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.data.files && response.data.files.length > 0) {
            return response.data.files[0].downloadURL;
        }
        return null;
    } catch (error) {
        console.error("❌ Error uploading file:", error);
        return null;
    }
};

/** ✅ สร้างเอกสารใหม่ */
export const createListeningConver = async (payload) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/createListeningConver`, payload, {
            headers: { "Content-Type": "application/json" },
        });

        console.log("✅ Document created:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Error creating document:", error);
        throw error;
    }
};

/** ✅ ดึงข้อมูลทั้งหมด */
export const getAllListeningConvers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getAllListeningConvers`);
        return response.data;
    } catch (error) {
        console.error("❌ Error fetching documents:", error);
        return [];
    }
};

/** ✅ อัปเดตเอกสาร */
export const updateListeningConver = async (id, payload) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/updateListeningConver`, { id, ...payload }, {
            headers: { "Content-Type": "application/json" },
        });

        console.log("✅ Document updated:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Error updating document:", error);
        throw error;
    }
};

/** ✅ ลบเอกสาร */
export const deleteListeningConver = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/deleteListeningConver`, {
            headers: { "Content-Type": "application/json" },
            data: { id },
        });

        console.log("✅ Document deleted:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Error deleting document:", error);
        throw error;
    }
};
