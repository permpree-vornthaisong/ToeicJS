import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hourDeg = (hours + minutes / 60) * 30;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const secondDeg = seconds * 6;

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "6px solid black",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      {/* Hour Hand */}
      <div
        style={{
          width: "6px",
          height: "50px", // Increased length for better visibility
          backgroundColor: "black",
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transformOrigin: "bottom center", // Centered transform origin
          transform: `translateX(-50%) rotate(${hourDeg}deg)`,
          borderRadius: "5px",
        }}
      ></div>

      {/* Minute Hand */}
      <div
        style={{
          width: "4px",
          height: "65px", // Increased length
          backgroundColor: "gray",
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transformOrigin: "bottom center", // Centered transform origin
          transform: `translateX(-50%) rotate(${minuteDeg}deg)`,
          borderRadius: "5px",
        }}
      ></div>

      {/* Second Hand */}
      <div
        style={{
          width: "2px",
          height: "75px", // Increased length
          backgroundColor: "red",
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transformOrigin: "bottom center", // Centered transform origin
          transform: `translateX(-50%) rotate(${secondDeg}deg)`,
          borderRadius: "5px",
        }}
      ></div>

      {/* Center Circle */}
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "black",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the dot perfectly
        }}
      ></div>

      {/* Hour Markers */}
      {[...Array(12)].map((_, i) => ( // Changed to 12 for full circle
        <div
          key={i}
          style={{
            position: "absolute",
            width: i % 3 === 0 ? "6px" : "3px",
            height: "12px", // Slightly increased height
            backgroundColor: "black",
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-90px)`, // Adjusted positioning
            borderRadius: i % 3 === 0 ? "2px" : "1px", // Rounded ends for thicker markers
          }}
        ></div>
      ))}
    </div>
  );
};

export default Clock;