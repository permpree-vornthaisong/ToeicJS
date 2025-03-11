// src/components/ResponsiveContainer.jsx
import React from "react";
import ResponsiveContainer2 from "../components/homePages/ResponsiveContainer";
// import ResponsiveContainer2 from "./components/homePages/ResponsiveContainer2";

import Panorama from "../components/TestCategoryList";
const Home = ({ leftContent, rightContent }) => {
  return (
    <>
      <div className="bg-[rgb(211,50,50)] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          <div className="flex items-center justify-center  text-white p-6 col-span-6 rounded-lg shadow-lg h-[40vh]">
            <Panorama />
          </div>
        </div>
        <ResponsiveContainer2 />
      </div>
    </>
  );
};

export default Home;
