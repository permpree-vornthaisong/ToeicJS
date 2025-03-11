// src/components/NavbarComponent.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaBook, FaHeadphones, FaFont, FaInfoCircle } from "react-icons/fa";
import LogoComponent from "./LogoComponent";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loginWithGoogle, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#FEF9E1] text-gray-800 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <LogoComponent />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="px-3 py-2 text-sm font-medium flex items-center">
              <FaHome className="mr-1" /> Home
            </Link>
            {user && (
              <>
                <Link to="/listeningNew" className="px-3 py-2 text-sm font-medium flex items-center">
                  <FaHeadphones className="mr-1" /> Listening
                </Link>
                <Link to="/reading" className="px-3 py-2 text-sm font-medium flex items-center">
                  <FaBook className="mr-1" /> Reading
                </Link>
                <Link to="/Vocab" className="px-3 py-2 text-sm font-medium flex items-center">
                  <FaFont className="mr-1" /> Vocabulary
                </Link>
                <Link to="/abouttoeic" className="px-3 py-2 text-sm font-medium flex items-center">
                  <FaInfoCircle className="mr-1" /> About
                </Link>
              </>
            )}

            {/* Login / Logout */}
            {user ? (
              <>
                <span className="px-3 py-2 text-sm font-medium">Welcome, {user.displayName}</span>
                <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-md">Logout</button>
              </>
            ) : (
              <button onClick={loginWithGoogle} className="px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-gray-100">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (เปิดเมื่อ isOpen = true) */}
      {isOpen && (
        <div className="md:hidden bg-[#FEF9E1] shadow-lg absolute top-16 left-0 w-full">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className="px-3 py-2 text-sm font-medium flex items-center" onClick={toggleMenu}>
              <FaHome className="mr-2" /> Home
            </Link>
            {user && (
              <>
                <Link to="/listeningNew" className="px-3 py-2 text-sm font-medium flex items-center" onClick={toggleMenu}>
                  <FaHeadphones className="mr-2" /> Listening
                </Link>
                <Link to="/reading" className="px-3 py-2 text-sm font-medium flex items-center" onClick={toggleMenu}>
                  <FaBook className="mr-2" /> Reading
                </Link>
                <Link to="/vocab" className="px-3 py-2 text-sm font-medium flex items-center" onClick={toggleMenu}>
                  <FaFont className="mr-2" /> Vocabulary
                </Link>
                <Link to="/abouttoeic" className="px-3 py-2 text-sm font-medium flex items-center" onClick={toggleMenu}>
                  <FaInfoCircle className="mr-2" /> About
                </Link>
              </>
            )}

            {/* Login / Logout */}
            {user ? (
              <button onClick={() => { logout(); toggleMenu(); }} className="px-4 py-2 bg-red-500 text-white rounded-md">
                Logout
              </button>
            ) : (
              <button onClick={() => { loginWithGoogle(); toggleMenu(); }} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
