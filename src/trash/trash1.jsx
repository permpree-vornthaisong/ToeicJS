/src/components/NavbarComponent.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaChevronDown } from "react-icons/fa";
import LogoComponent from "./LogoComponent";

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeItem, setActiveItem] = useState("home");

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const menuItems = [
        {
            title: "Home",
            icon: <FaHome className="mr-2" />,
            id: "home",
            path: "/",
            subItems: []
        },
        {
            title: "About",
            icon: <FaInfoCircle className="mr-2" />,
            id: "about",
            subItems: [
                { title: "Listening", path: "/listening" },
                { title: "Reading", path: "/reading" },
                { title: "Vocabulary", path: "/vocabulary" }
            ]
        },
        {
            title: "Services",
            icon: <FaCogs className="mr-2" />,
            id: "services",
            subItems: [
                { title: "Consulting", path: "/consulting" },
                { title: "Development", path: "/development" },
                { title: "Design", path: "/design" }
            ]
        },
        {
            title: "Contact",
            icon: <FaEnvelope className="mr-2" />,
            id: "contact",
            path: "/contact",
            subItems: []
        }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <LogoComponent />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {menuItems.map((item) => (
                            <div key={item.id} className="relative group">
                                {item.subItems.length === 0 ? (
                                    <Link
                                        to={item.path}
                                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                                            activeItem === item.id ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                                        }`}
                                        onClick={() => setActiveItem(item.id)}
                                    >
                                        {item.icon}
                                        {item.title}
                                    </Link>
                                ) : (
                                    <>
                                        <button
                                            className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            {item.icon}
                                            {item.title}
                                            <FaChevronDown className="ml-1" />
                                        </button>
                                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    to={subItem.path}
                                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                    onClick={() => setActiveItem(subItem.path)}
                                                >
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}

                        <button onClick={toggleDarkMode} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Toggle dark mode">
                            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Toggle menu">
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={toggleMenu}>
                <div
                    className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out transform ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <LogoComponent />
                            <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                                <FiX size={24} />
                            </button>
                        </div>
                        <div className="mt-6 space-y-2">
                            {menuItems.map((item) => (
                                <div key={item.id}>
                                    {item.subItems.length === 0 ? (
                                        <Link
                                            to={item.path}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.icon}
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <>
                                            <button className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
                                                {item.icon}
                                                {item.title}
                                                <FaChevronDown className="ml-auto" />
                                            </button>
                                            <div className="pl-8 mt-2 space-y-2">
                                                {item.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.title}
                                                        to={subItem.path}
                                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subItem.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                            <button onClick={toggleDarkMode} className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
                                {isDarkMode ? (
                                    <>
                                        <FiSun className="mr-2" /> Light Mode
                                    </>
                                ) : (
                                    <>
                                        <FiMoon className="mr-2" /> Dark Mode
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
