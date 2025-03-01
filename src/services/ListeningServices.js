// src/services/ListeningServices.js
import axios from 'axios';

const API_BASE_URL = `http://127.0.0.1:5001/test-63698/us-central1/listening`;

// ดึงข้อมูลทั้งหมด
export const getAllListenings = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getAllListenings`);
        return response.data;
    } catch (error) {
        console.error('Error fetching listenings:', error);
        throw error;
    }
};

// สร้างเอกสารใหม่
export const createListening = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/createListening`, data);
        return response.data;
    } catch (error) {
        console.error('Error creating listening:', error);
        throw error;
    }
};

// อัปเดตเอกสาร
export const updateListening = async (data) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/updateListening`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating listening:', error);
        throw error;
    }
};

// ลบเอกสาร
export const deleteListening = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/deleteListening`, { data: { id } });
        return response.data;
    } catch (error) {
        console.error('Error deleting listening:', error);
        throw error;
    }
};
