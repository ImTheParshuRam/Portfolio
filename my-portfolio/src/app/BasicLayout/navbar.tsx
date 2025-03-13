"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Sun, Moon } from "lucide-react";
import Chatbot from "../features/chatbot";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDarkMode = storedTheme ? storedTheme === "dark" : prefersDark;
    setDarkMode(initialDarkMode);
    document.documentElement.classList.toggle("dark", initialDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <nav className="bg-gray-900 bg-opacity-80 text-white py-4 px-6 shadow-md w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Logo Section */}
        <div className="text-2xl font-bold">Parshu Ram Sharma</div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-gray-400">About</Link>
          <Link href="#projects" className="hover:text-gray-400">Projects</Link>
          <Link href="#contact" className="hover:text-gray-400">Contact</Link>
          <Link href="#skills" className="hover:text-gray-400">Skills</Link>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
            onClick={() => setChatOpen(true)}
          >
            <MessageCircle size={18} /> Assistant
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md"
            onClick={toggleDarkMode}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />} {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-3">
          <Link href="#about" className="hover:text-gray-400">About</Link>
          <Link href="#projects" className="hover:text-gray-400">Projects</Link>
          <Link href="#contact" className="hover:text-gray-400">Contact</Link>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
            onClick={() => setChatOpen(true)}
          >
            <MessageCircle size={18} /> Assistant
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md"
            onClick={toggleDarkMode}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />} {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
      
      {/* Full-Screen Chatbot */}
      {chatOpen && <Chatbot isFullScreen={true} closeChat={() => setChatOpen(false)} />}
    </nav>
  );
}
