// src/services/readingServicesPart5.js
import axios from "axios";

const API_URL = "http://127.0.0.1:5001/test-63698/us-central1";

// ✅ Fetch all Reading Part 5 questions
export const getAllReadingPart5 = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllReadingPart5`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    throw error;
  }
};

// ✅ Submit new Reading Part 5 questions
export const createReadingPart5 = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/createReadingPart5`, data);
    return response.data;
  } catch (error) {
    console.error("❌ Error submitting data:", error);
    throw error;
  }
};

// ✅ Update an existing Reading Part 5 question
export const updateReadingPart5 = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/updateReadingPart5`, {
      id,
      ...updatedData,
    });
    return response.data;
  } catch (error) {
    console.error("❌ Error updating data:", error);
    throw error;
  }
};

// ✅ Delete a Reading Part 5 question
export const deleteReadingPart5 = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteReadingPart5`, {
      data: { id },
    });
    return response.data;
  } catch (error) {
    console.error("❌ Error deleting data:", error);
    throw error;
  }
};
