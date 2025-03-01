import React, { useRef, useEffect, useState } from "react";

const VideoPlayer = ({ children }) => {
  const videoRef = useRef(null);
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    const video = videoRef.current;

    const generatePoster = () => {
      if (!video || !video.videoWidth || !video.videoHeight) return; // Safeguard

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) { // Check if context is available
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          setPoster(canvas.toDataURL());
      }
    };

    const handleSeeked = () => {
      generatePoster();
      video.removeEventListener("seeked", handleSeeked);
    };

    if (video) {
      video.addEventListener("loadeddata", () => {
        video.currentTime = 0.5; // Or whatever time you want for the poster
        video.addEventListener("seeked", handleSeeked);
      });
    }

    return () => {
      if (video) {
        video.removeEventListener("seeked", handleSeeked);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      width="100%"
      controls
      poster={poster}
      className="rounded-lg"
    >
      {children}
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;