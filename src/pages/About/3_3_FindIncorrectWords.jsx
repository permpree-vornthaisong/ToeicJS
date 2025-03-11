import React from "react";
import { useNavigate } from "react-router-dom";
import ChoiceReadingPart5 from "../../components/5_ChoiceReadingPart5";
import ChoiceReadingPart6 from "../../components/6_ChoiceReadingPart6";

const FindIncorrectWords = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white bg-cover bg-center text-black min-h-screen flex items-start">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full">
        {/* ขนาดใหญ่ (PART 5) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-3 flex flex-col items-center justify-start leading-tight bg-purple-500/60 backdrop-blur-xl text-black px-10 py-6 rounded-lg shadow-lg">
          <p className="text-4xl md:text-5xl font-bold mb-4 tracking-wide drop-shadow-lg mt-2">
            PART 6 Find Incorrect Words
          </p>
        </div>

        {/* ขนาดกลาง (START) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col items-center justify-start leading-tight bg-purple-500/60 backdrop-blur-xl text-black px-10 py-6 rounded-lg shadow-lg">
          <p className="text-3xl md:text-4xl font-bold mb-4 tracking-wide drop-shadow-lg mt-2">
            START
          </p>
        </div>

        {/* ขนาดเล็ก (TIMER) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center justify-start leading-tight bg-purple-500/60 backdrop-blur-xl text-black px-10 py-6 rounded-lg shadow-lg">
          <p className="text-2xl md:text-3xl font-bold mb-4 tracking-wide drop-shadow-lg mt-2">
            TIMER
          </p>
        </div>

        {/* ChoiceReadingPart5 */}
        <div className="col-span-1 md:col-span-2 lg:col-span-6">
          <div className="text-black">
            <ChoiceReadingPart6 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindIncorrectWords;
