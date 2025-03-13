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
    
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else {
      setIsDarkMode(prefersDark);
    }

    const handleThemeChange = () => {
      const updatedTheme = localStorage.getItem("theme");
      setIsDarkMode(updatedTheme === "dark");
    };

    window.addEventListener("storage", handleThemeChange);
    return () => window.removeEventListener("storage", handleThemeChange);
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`relative py-20 px-6 mt-[-1px] backdrop-blur-md transition-all duration-500 ${
        isDarkMode ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white" : "bg-orange-300 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="absolute left-0 bottom-0 text-gray-600 text-7xl select-none font-bold"
        >
          Parshu Ram Sharma
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <Link href="#projects" className="hover:text-white transition text-3xl">Projects</Link>
          <Link href="#skills" className="hover:text-white transition text-3xl">Skills</Link>
          <Link href="#contactme" className="hover:text-white transition text-3xl">Contact Me</Link>
        </div>

        <div className="flex gap-4">
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/parshu-ram-sharma-739aaa250/" target="_blank" className="hover:text-white transition">
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/ImTheParshuRam" target="_blank" className="hover:text-white transition">
            <FaGithub size={28} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://x.com/pariferking" target="_blank" className="hover:text-white transition">
            <FaTwitter size={28} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/mrparshu_ram?igsh=bDhqMDY5ZHhlc2Ni" target="_blank" className="hover:text-white transition">
            <FaInstagram size={28} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="mailto:parshu13.raam@gmail.com" className="hover:text-white transition">
            <HiOutlineMail size={28} />
          </motion.a>
        </div>
      </div>

      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </footer>
  );
}
