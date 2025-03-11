import React from "react";
import { useNavigate } from "react-router-dom";
import "@fontsource/prompt"; // Defaults to weight 400
import "@fontsource/prompt/400.css"; // Specify weight
import "@fontsource/prompt/400-italic.css"; // Specify weight and style
import "./font.css";
const Reading = () => {
  const navigate = useNavigate(); // Hook สำหรับเปลี่ยนเส้นทาง

  const lessons = [
    { text: "บทที่ 5 Incomplete Sentences", bg: "bg-gray-200", path: "/readingIncompleteSentences" },
    { text: "บทที่ 6 Find Incorrect Words", bg: "bg-gray-300", path: "/findIncorrectWords" },
    { text: "บทที่ 7 Reading Passages", bg: "bg-gray-300", path: "/readingPassages" },
  ];

  return (
    <div className="bg-[url('/images/bgMainPage.png')] bg-cover bg-center text-white min-h-screen flex items-start">
      <div
        style={{
          fontFamily: "'Noto Sans Thai', sans-serif",
          fontWeight: 400,
        }}
        className="container mx-auto px-3 py-8"
      >
        <div className="flex flex-col space-y-8 items-start">
          {/* Lesson Blocks */}
          {lessons.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)} // เมื่อคลิก จะไปที่ path นั้นๆ
              className={`${item.bg} text-black font-bold py-5 px-6 sm:px-10 md:px-12 rounded-2xl shadow-md text-2xl sm:text-2xl md:text-5xl lg:text-6xl w-full min-w-[300px] md:min-w-[500px] lg:min-w-[600px] leading-[1.5] cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-opacity-80 active:scale-95`}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reading;
