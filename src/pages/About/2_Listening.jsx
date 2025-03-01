import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // ✅ นำเข้า FaHome
import Clock from "../../components/Clock";
import React, { useRef, useEffect, useState } from "react";
import GradientProgressBar from "../../components/GradientProgressBar";
import "@fontsource/prompt"; // Defaults to weight 400
import "@fontsource/prompt/400.css"; // Specify weight
import "@fontsource/prompt/400-italic.css"; // Specify weight and style
import Choice from "../../components/choice";
import "./font.css";

const Listening = () => {
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

  const rightContent = "Right Content Here";

  // ✅ รายการเมนู
  const ListLesson = [
    {
      title: "บทที่ 1 : Photographs",
      icon: <FaHome className="mr-2" />,
      id: "home",
      path: "/listeningPhotos",
    },
    {
      title: "บทที่ 2 : Questions and Responses",
      icon: <FaHome className="mr-2" />,
      id: "home",
      path: "/listeningQuestions",
    },
    {
      title: "บทที่ 3 : Short Conversations",
      icon: <FaHome className="mr-2" />,
      id: "home",
      path: "/listeningConvers",
    },
    {
      title: "บทที่ 4 : Short Talks",
      icon: <FaHome className="mr-2" />,
      id: "home",
      path: "/listeningTalkings",
    },
  ];

  return (
    <div
      style={{
        background: "#CFD8DC",
        backgroundImage: "linear-gradient(135deg, #FAB2FF 10%, #1904E5 100%)",
      }}
      className="mali-bold p-6"
    >
      {/* ✅ Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* ✅ Welcome Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center justify-start leading-tight bg-purple-500/60 backdrop-blur-xl text-white p-8 rounded-lg shadow-lg min-h-[250px]">
          <div className="text-center w-full">
            {" "}
            {/* Center the text and occupy full width */}
            <p className="text-3xl font-bold mb-4 tracking-wide drop-shadow-lg mt-2">
              {" "}
              {/* Added mt-2 */}
              WELCOME TO LISTENING
            </p>
          </div>
          <div className="w-48 h-48 relative mt-10">
            <Clock />
          </div>
        </div>
        {/* ✅ Right Content */}
        <div className="font-bold col-span-1 md:col-span-2 lg:col-span-4 flex flex-col item-start justify-start  bg-gradient-to-r  from-purple-500 to-blue-500 text-white  rounded-lg shadow-lg min-h-[400px] px-6 pt-8 pb-10">
          <p className="text-3xl font-bold mb-4 tracking-wide drop-shadow-lg mt-2 ">
            {" "}
            {/* Added mt-2 */}
            TOEIC LISTENING PRACTICE
          </p>

          <div className="pb-2">
            {" "}
            <GradientProgressBar
              progress={20}
              height="1.2rem"
              gradientColors={["#667eea", "#764ba2"]}
            />
          </div>
          <div className="pb-2">
            {" "}
            <GradientProgressBar
              progress={20}
              height="1.2rem"
              gradientColors={["#667eea", "#764ba2"]}
            />
          </div>
          <div className="pb-2">
            {" "}
            <GradientProgressBar
              progress={20}
              height="1.2rem"
              gradientColors={["#667eea", "#764ba2"]}
            />
          </div>
          <div className="pb-2">
            {" "}
            <GradientProgressBar
              progress={20}
              height="1.2rem"
              gradientColors={["#667eea", "#764ba2"]}
            />
          </div>

          <div className=" flex flex-col justify-between h-full  rounded-lg p-4">
            {/* ส่วนข้อความ */}
            <div className="text-left w-full break-words pt-3 pb-5 px-3">
              asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
            </div>

            {/* ส่วนปุ่ม */}
            <div className="flex gap-4 justify-end items-end">
              <button className="text-xl sm:text-2xl md:text-lg lg:text-2xl font-extrabold text-white text-center leading-tight bg-black h-14 w-60 rounded-lg">
                About
              </button>

              <button className="text-xl sm:text-2xl md:text-lg lg:text-2xl font-extrabold text-white text-center leading-tight bg-black h-14 w-60 rounded-lg">
                GO
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Sidebar Menu */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-800 text-white  rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-4xl font-bold mb-8 text-center border-b border-gray-700  pb-3 pt-3">
            {" "}
            {/* Larger heading, more margin */}
            Lessons Full Test
          </h2>
          <ul className="space-y-4 px-8 pb-5">
            {" "}
            {/* Increased spacing */}
            {ListLesson.map((lesson, index) => (
              <li key={index}>
                <Link
                  to={lesson.path}
                  className="flex items-center  hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out" /* Increased padding */
                >
                  <span className="mr-3 text-3xl">
                    {" "}
                    {/* Larger icon, more margin */}
                    {lesson.icon}
                  </span>
                  <span className="text-2xl text-lime-400 font-bold">
                    {" "}
                    {/* Larger title size */}
                    <div>{lesson.title}</div>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Additional Boxes */}
        <div className="col-span-1 md:col-span-2 items-center flex-wrap justify-center lg:col-span-2 bg-gray-800 text-white  rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-4xl font-bold mb-2 text-center border-b border-gray-700  p-3">
            {" "}
            {/* Larger heading, more margin */}
            Try Listening
          </h2>
          <div className="flex items-center justify-center p-3">
            <video
              className="rounded-xl"
              ref={videoRef}
              width="100%"
              controls
              poster={poster}
            >
              <source src="/vdo/test-11-01.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 items-center flex-wrap justify-center lg:col-span-2 bg-gray-800 text-white  rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-4xl font-bold mb-2 text-center border-b border-gray-700  p-3">
            {" "}
            {/* Larger heading, more margin */}
            Try Listening And Select
          </h2>
          <div className="m-4 mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Listening;
