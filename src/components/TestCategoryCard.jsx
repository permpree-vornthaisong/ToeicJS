// src/components/PanoramaCard.jsx
import React from "react";

const PanoramaCard = ({ image, title, scaleY }) => {
  return (
    <div
      className="panorama-card"
      style={{
        width: "180px",
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
        margin: "10px",
        overflow: "hidden",
        transform: `perspective(800px) scaleY(${scaleY})`, // บีบการ์ดในแนวตั้ง
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          display: "block",
        }}
      />
    </div>
  );
};

export default PanoramaCard;
