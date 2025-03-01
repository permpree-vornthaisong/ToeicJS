// src/components/ResponsiveContainer.jsx
import React from "react";
import ResponsiveContainer2 from "../components/homePages/ResponsiveContainer";
// import ResponsiveContainer2 from "./components/homePages/ResponsiveContainer2";
const Home = ({ leftContent, rightContent }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div className="flex items-center justify-center bg-blue-500 text-white p-6 rounded-lg shadow-lg h-[40vh]">
          {leftContent}
        </div>
        <div className="flex items-center justify-center bg-gray-700 text-white p-6 rounded-lg shadow-lg h-[40vh]">
          {rightContent}
        </div>
      </div>
      <ResponsiveContainer2 />
    </>
  );
};

export default Home;
