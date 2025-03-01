// src/components/ResponsiveContainer.jsx
import React from "react";
import CircularProgressComponent from "./CircularProgress";

const ResponsiveContainer = ({ left1, left2, right1, right2 }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6">
            {/* left1 ขยาย 2 แถว */}
            <div className="flex items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden h-auto min-h-[40vh] w-full col-span-2">
                <img src="/images/test1.png" alt="Test Image" className="w-full h-full object-cover" />
            </div>
            <div
                className="flex flex-col justify-between items-center p-4 sm:p-6 rounded-lg shadow-lg h-auto min-h-[40vh] w-full text-white 
             bg-[url('/images/144167d0-162d-4189-90c1-ec240baa1505.webp')] bg-cover bg-center"
            >
                {/* ข้อความอยู่บนสุด */}
                <div className="text-xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold text-center leading-tight bg-white/30 backdrop-blur-lg w-full rounded-lg">
                    LISTENING
                </div>

                <div className="text-xl sm:text-3xl  md:text-3xl lg:text-3xl font-extrabold text-white text-center leading-tight">

                </div>
                {/* ปุ่มชิดด้านล่าง */}
                <button className="text-xl sm:text-2xl md:text- lg:text-2xl font-extrabold text-white text-center leading-tight bg-green-400/30 h-9 backdrop-blur-lg w-full rounded-lg">
                    GO
                </button>
            </div>
            <div
                className="flex flex-col justify-between items-center p-4 sm:p-6 rounded-lg shadow-lg h-auto min-h-[40vh] w-full text-white 
             bg-[url('/images/e5e7de0f-bd7f-4d12-8bef-8745b9406dfc.webp')] bg-cover bg-center"
            >
                {/* ข้อความอยู่บนสุด */}
                <div className="text-xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold text-center leading-tight bg-white/30 backdrop-blur-lg w-full rounded-lg">
                    READING
                </div>
                <div className="text-xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold text-center leading-tight">

                </div>

                {/* ปุ่มชิดด้านล่าง */}
                <button className="text-xl sm:text-2xl md:text- lg:text-2xl font-extrabold text-white text-center leading-tight bg-green-400/30 h-9 backdrop-blur-lg w-full rounded-lg">
                    GO
                </button>
            </div>
            <div
                className="flex flex-col justify-between items-center p-4 sm:p-6 rounded-lg shadow-lg h-auto min-h-[40vh] w-full text-white 
             bg-[url('/images/e6dc1927-8e5e-4cce-b2d8-6a50d632e764.webp')] bg-cover bg-center"
            >
                {/* ข้อความอยู่บนสุด */}
                <div className="text-xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold text-center leading-tight bg-white/30 backdrop-blur-lg w-full rounded-lg">
                    VOCABULARY
                </div>
                <div className="text-xl sm:text-3xl  md:text-3xl lg:text-3xl font-extrabold text-white text-center leading-tight">
                    IMAGE
                </div>
                {/* ปุ่มชิดด้านล่าง */}
                <button className="text-xl sm:text-2xl md:text- lg:text-2xl font-extrabold text-white text-center leading-tight bg-green-400/30 h-9 backdrop-blur-lg w-full rounded-lg">
                    GO
                </button>
            </div>
        </div>
    );
};

export default ResponsiveContainer;
