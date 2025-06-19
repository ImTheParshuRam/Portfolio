"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Chatbot from "../features/chatbot"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark)

    setDarkMode(shouldBeDark)
    updateTheme(shouldBeDark)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    updateTheme(newMode)
  }

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 bg-amber-50/90 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-700/20 border-orange-200/30 shadow-lg shadow-orange-200/10 dark:shadow-purple-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="relative group cursor-pointer">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-600 dark:via-pink-600 dark:to-blue-600 from-orange-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
                Parshu Ram
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 dark:from-purple-600/20 dark:via-pink-600/20 dark:to-blue-600/20 from-orange-600/20 via-pink-600/20 to-yellow-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-slate-700 dark:text-slate-300 text-amber-800 hover:text-purple-600 dark:hover:text-purple-400 hover:text-orange-600 transition-colors group"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-600 dark:to-pink-600 from-orange-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                </motion.div>
              ))}

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="p-3 ml-4 bg-slate-100 dark:bg-slate-800 bg-amber-100/80 hover:bg-slate-200 dark:hover:bg-slate-700 hover:bg-amber-200/80 rounded-full transition-all duration-300 group shadow-sm shadow-orange-200/20 dark:shadow-purple-500/10"
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-5 h-5 text-amber-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* AI Assistant Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setChatOpen(true)}
                className="relative ml-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-600 dark:to-pink-600 from-orange-500 to-pink-500 text-white rounded-full font-medium overflow-hidden group shadow-lg shadow-orange-500/25 dark:shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI Assistant
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-600 dark:to-purple-600 from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-300 text-amber-800"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-slate-900/95 bg-amber-50/95 backdrop-blur-xl border-t border-slate-200/20 dark:border-slate-700/20 border-orange-200/30"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 text-slate-700 dark:text-slate-300 text-amber-800 hover:text-purple-600 dark:hover:text-purple-400 hover:text-orange-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700 border-orange-200">
                  <button
                    onClick={toggleDarkMode}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 bg-amber-100/80 rounded-full text-sm shadow-sm shadow-orange-200/20 dark:shadow-purple-500/10"
                  >
                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    {darkMode ? "Light" : "Dark"}
                  </button>

                  <button
                    onClick={() => {
                      setChatOpen(true)
                      setMenuOpen(false)
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-600 dark:to-pink-600 from-orange-500 to-pink-500 text-white rounded-full text-sm shadow-lg shadow-orange-500/25 dark:shadow-purple-500/25"
                  >
                    <Sparkles className="w-4 h-4" />
                    AI Assistant
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Chatbot */}
      {chatOpen && <Chatbot isFullScreen={true} closeChat={() => setChatOpen(false)} />}
    </>
  )
}
