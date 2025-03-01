// src/pages/About/2_1_ListeningPhoto.jsx
import React, { useRef, useEffect, useState } from "react";
import Choice from "../../components/choice";
import ChoiceConver from "../../components/ChoiceConver";
import "@fontsource/noto-sans-thai"; // Defaults to weight 400
import "@fontsource/noto-sans-thai/400.css"; // Explicit weight
import "@fontsource/noto-sans-thai/700.css"; // Bold
import AddListening from "../../components/SaveDataToListening";
import InputFieldsListening from "../../components/InputFieldsListening";
import InputFieldsConver from "../../components/InputFieldsConver";

// import "./2_1_ListeningPhoto.css";

const ListeningConver = () => {
  const videoRef = useRef(null);
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    const video = videoRef.current;

    const generatePoster = () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);
      setPoster(canvas.toDataURL());
    };

    const handleSeeked = () => {
      generatePoster();
      video.removeEventListener("seeked", handleSeeked); // Remove listener after generating poster
    };

    if (video) {
      video.addEventListener("loadeddata", () => {
        // Wait for video data to load
        video.currentTime = 0.5; // Seek to 1.5 seconds
        video.addEventListener("seeked", handleSeeked); // Listen for seeked event
      });
    }

    return () => {
      if (video) {
        video.removeEventListener("seeked", handleSeeked);
      }
    };
  }, []);
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div
          style={{
            fontFamily: "'Noto Sans Thai', sans-serif",
            fontWeight: 400,
          }}
          className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center justify-start leading-tight bg-purple-500/60 backdrop-blur-xl text-black p-8 rounded-lg shadow-lg"
        >
          การสอบมีเวลลาทั้งหมด 999 นาทีสอบโดยสุ่มเอาสอบสอบจาก 100
          ข้อให้เหลือนสิบข้อโดยแต่ละข้อใช้เวลาสอบ 30 วินาที
        </div>
        <div
          style={{
            fontFamily: "'Noto Sans Thai', sans-serif",
            fontWeight: 400,
          }}
          className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center leading-tight bg-purple-500/60 backdrop-blur-xl text-2xl text-black p-8 rounded-lg shadow-lg"
        >
          กดเพื่อเริ่มทำข้อสอบ
        </div>
        <div
          style={{
            fontFamily: "'Noto Sans Thai', sans-serif",
            fontWeight: 400,
          }}
          className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center justify-start leading-tight bg-purple-500/60 backdrop-blur-xl text-black p-8 rounded-lg shadow-lg"
        >
          sdasd
        </div>
        <hr
          className="col-span-1 md:col-span-2 lg:col-span-6"
          style={{ border: "1px solid purple" }}
        />
        <div className="col-span-1 md:col-span-2 lg:col-span-6">
          <ChoiceConver />
        </div>
      </div>
      <InputFieldsConver />
      <br />
    </div>
  );
};

export default ListeningConver;
