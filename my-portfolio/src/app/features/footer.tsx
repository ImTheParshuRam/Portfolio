"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
    setIsDarkMode(storedTheme ? storedTheme === "dark" : prefersDark);
  
    // Listen for theme changes
    const handleThemeChange = () => {
      setIsDarkMode(localStorage.getItem("theme") === "dark");
    };
  
    // Observer for class changes on <html> for theme updates
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  
    window.addEventListener("storage", handleThemeChange);
  
    return () => {
      window.removeEventListener("storage", handleThemeChange);
      observer.disconnect();
    };
  }, []);
  

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className={`relative py-16 px-6 mt-[-1px] transition-all duration-500 ${
        isDarkMode ? "bg-gradient-to-r from-gray-900 to-black text-white" : "bg-gradient-to-r from-orange-300 to-orange-500 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        
        {/* Brand Name / Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bold text-4xl md:text-5xl text-gray-300"
        >
          Parshu Ram Sharma
        </motion.div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
          <Link href="#projects" className="hover:text-gray-200 transition text-xl font-semibold">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-gray-200 transition text-xl font-semibold">
            Skills
          </Link>
          <Link href="#contactme" className="hover:text-gray-200 transition text-xl font-semibold">
            Contact Me
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-5">
          <motion.a whileHover={{ scale: 1.2, y: -5 }} href="https://www.linkedin.com/in/parshu-ram-sharma-739aaa250/" target="_blank">
            <FaLinkedin className="text-3xl hover:text-blue-400 transition" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, y: -5 }} href="https://github.com/ImTheParshuRam" target="_blank">
            <FaGithub className="text-3xl hover:text-gray-400 transition" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, y: -5 }} href="https://x.com/pariferking" target="_blank">
            <FaTwitter className="text-3xl hover:text-blue-300 transition" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, y: -5 }} href="https://www.instagram.com/mrparshu_ram?igsh=bDhqMDY5ZHhlc2Ni" target="_blank">
            <FaInstagram className="text-3xl hover:text-pink-400 transition" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, y: -5 }} href="mailto:parshu13.raam@gmail.com">
            <HiOutlineMail className="text-3xl hover:text-red-400 transition" />
          </motion.a>
        </div>
      </div>

      {/* Scroll To Top Button */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-all"
        >
          <ArrowUp size={28} />
        </motion.button>
      )}

      {/* Bottom Border Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500"></div>
    </footer>
  );
}
