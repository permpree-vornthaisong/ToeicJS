// src/components/ResponsiveContainer.jsx
import React from "react";

const ResponsiveContainer = ({ left1, left2, right1, right2 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6">
      {/* left1 ขยาย 2 แถว */}
      <div className="relative flex items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden 
                      h-[calc(100vh-120px)] max-h-[430px] w-full col-span-6">
        {/* รูปภาพ */}
        <img
          src="/images/bgBig.png"
          alt="Test Image"
          className="w-full h-full object-cover"
        />

        {/* ข้อความ Overlay */}
        <div className="absolute inset-0 flex items-center justify-center  p-4">
          <h2 className="text-black text-xl md:text-3xl font-bold text-center">
            คลังข้อสอบ <br /> สำหรับเตรียมตัวในการสอบ TOEIC
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveContainer;
