"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { motion } from "framer-motion"
import { ArrowUp, Heart, Sparkles, Code, Zap, Star } from "lucide-react"

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/parshu-ram-sharma-739aaa250/",
      label: "LinkedIn",
      color: "hover:text-blue-500 hover:bg-blue-300/30 dark:hover:text-blue-400 dark:hover:bg-blue-400/20",
    },
    {
      icon: FaGithub,
      href: "https://github.com/ImTheParshuRam",
      label: "GitHub",
      color: "hover:text-gray-600 hover:bg-gray-300/30 dark:hover:text-gray-300 dark:hover:bg-gray-400/20",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/pariferking",
      label: "Twitter",
      color: "hover:text-cyan-500 hover:bg-cyan-300/30 dark:hover:text-cyan-400 dark:hover:bg-cyan-400/20",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/mrparshu_ram?igsh=bDhqMDY5ZHhlc2Ni",
      label: "Instagram",
      color: "hover:text-pink-500 hover:bg-pink-300/30 dark:hover:text-pink-400 dark:hover:bg-pink-400/20",
    },
    {
      icon: HiOutlineMail,
      href: "mailto:parshu13.raam@gmail.com",
      label: "Email",
      color: "hover:text-red-500 hover:bg-red-300/30 dark:hover:text-red-400 dark:hover:bg-red-400/20",
    },
  ]

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <div>
      <footer className="relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-purple-950 dark:via-indigo-950 dark:to-slate-950 border-t border-orange-300/30 dark:border-purple-400/20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-300/20 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-300/20 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-300/20 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <motion.div className="lg:col-span-2">
              <div className="mb-8">
                <motion.h3
                  className="text-4xl lg:text-5xl font-black mb-3"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span
                    className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-700 dark:from-white dark:via-cyan-200 dark:to-purple-200 bg-clip-text text-transparent"
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    PARSHU RAM
                  </span>
                  <br />
                  <span
                    className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    SHARMA
                  </span>
                </motion.h3>
                <p className="text-amber-800 dark:text-gray-300 text-lg font-medium">
                  <span className="text-orange-700 dark:text-cyan-400">Full Stack Developer</span>
                  {" & "}
                  <span className="text-pink-700 dark:text-purple-400">AI Architect</span>
                </p>
              </div>

              <p className="text-amber-700 dark:text-gray-300 leading-relaxed mb-8 max-w-md text-lg">
                {"Crafting the "}
                <span className="text-orange-700 dark:text-cyan-400 font-semibold">future of digital experiences</span>
                {" with cutting-edge technology and "}
                <span className="text-pink-700 dark:text-purple-400 font-semibold">innovative solutions</span>
                {"."}
              </p>

              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5, rotateZ: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`group relative p-4 bg-amber-100/60 dark:bg-gradient-to-r dark:from-purple-500/20 dark:to-cyan-500/20 backdrop-blur-xl rounded-2xl border border-orange-300/50 dark:border-purple-400/30 text-amber-800 dark:text-gray-300 ${color} transition-all duration-300 shadow-lg shadow-orange-200/20 dark:shadow-purple-500/10`}
                    aria-label={label}
                  >
                    <div className="absolute inset-0 bg-orange-300/20 dark:bg-gradient-to-r dark:from-cyan-400/10 dark:to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    <Icon className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-2xl font-bold text-amber-900 dark:text-white mb-8 flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-orange-600 dark:text-cyan-400" />
                </motion.div>
                Navigation
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group text-amber-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 flex items-center gap-3 text-lg"
                    >
                      <motion.span
                        className="w-2 h-2 bg-orange-400 dark:bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-2xl font-bold text-amber-900 dark:text-white mb-8 flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Code className="w-6 h-6 text-pink-600 dark:text-purple-400" />
                </motion.div>
                Connect
              </h4>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 text-amber-700 dark:text-gray-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-orange-200/60 dark:bg-gradient-to-r dark:from-purple-500/20 dark:to-cyan-500/20 rounded-lg shadow-lg shadow-orange-200/20 dark:shadow-purple-500/10">
                    <HiOutlineMail className="w-5 h-5 text-orange-600 dark:text-cyan-400" />
                  </div>
                  <a
                    href="mailto:parshu13.raam@gmail.com"
                    className="hover:text-orange-600 dark:hover:text-cyan-400 transition-colors text-lg"
                  >
                    parshu13.raam@gmail.com
                  </a>
                </motion.div>

                <motion.div className="flex items-center gap-4 text-amber-700 dark:text-gray-300" whileHover={{ x: 5 }}>
                  <div className="p-2 bg-emerald-200/60 dark:bg-gradient-to-r dark:from-green-500/20 dark:to-cyan-500/20 rounded-lg shadow-lg shadow-emerald-200/20 dark:shadow-green-500/10">
                    <motion.div
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>
                  <span className="text-lg">Available for projects</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-8 border-t border-orange-300/30 dark:border-purple-400/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3 text-amber-700 dark:text-gray-300 text-lg">
                <span>{"© 2024 Parshu Ram Sharma. Crafted with"}</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart className="w-5 h-5 text-red-400" />
                </motion.div>
                <span>{"and lots of"}</span>
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="text-2xl"
                >
                  ☕
                </motion.span>
              </div>

              <div className="flex items-center gap-6 text-amber-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-600 dark:text-cyan-400" />
                  <span>{"Next.js & Tailwind CSS"}</span>
                </div>
                <div className="w-1 h-1 bg-amber-400 dark:bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-pink-600 dark:text-purple-400" />
                  <span>Deployed on Vercel</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400"></div>
      </footer>

      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 p-3 bg-white/20 dark:bg-slate-900/20 backdrop-blur-xl text-orange-600 dark:text-cyan-400 rounded-full shadow-lg hover:shadow-orange-500/25 dark:hover:shadow-cyan-500/25 transition-all duration-300 z-40 group border border-orange-300/30 dark:border-cyan-400/30 hover:bg-white/30 dark:hover:bg-slate-800/30"
        >
          <div className="absolute inset-0 bg-orange-200/20 dark:bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          <ArrowUp className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
        </motion.button>
      )}
    </div>
  )
}
