// src/api.js
const apiUrl = import.meta.env.VITE_API_URL;

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`https://savefiletostorage-dt2hxwb2ya-uc.a.run.app/SaveFileToStorage`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "การอัปโหลดล้มเหลว กรุณาลองใหม่");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("ข้อผิดพลาดในการอัปโหลด:", error);
    throw error;
  }
};
