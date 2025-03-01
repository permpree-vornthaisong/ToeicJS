// src/components/SidebarComponent.jsx
import React from "react";
import "../styles/SidebarComponent.css";
import { FaHome, FaUser, FaCog, FaQuestionCircle } from "react-icons/fa";

const SidebarComponent = () => {
  return (
    <div className="sidebar">
      <button className="sidebar-button">
        <FaHome />
      </button>
      <button className="sidebar-button">
        <FaUser />
      </button>
      <button className="sidebar-button">
        <FaCog />
      </button>
      <button className="sidebar-button">
        <FaQuestionCircle />
      </button>
    </div>
  );
};

export default SidebarComponent;
