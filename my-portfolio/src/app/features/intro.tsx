"use client"

import { useEffect, useRef, useState } from "react"
import Typed from "typed.js"
import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin, ArrowRight, Sparkles, Code, Zap, Flame, Rocket, Crown } from "lucide-react"

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const typed = new Typed(typedRef.current, {
      strings: ["Full Stack Developer", "AI Architect", "Digital Innovator", "Code Magician", "Future Builder"],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
      backDelay: 2000,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  const floatingElements = [
    { icon: Code, delay: 0, position: "top-1/4 left-1/4" },
    { icon: Zap, delay: 1, position: "top-1/3 right-1/4" },
    { icon: Sparkles, delay: 2, position: "bottom-1/3 left-1/3" },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ImTheParshuRam",
      label: "GitHub",
      color:
        "hover:bg-amber-200/60 hover:text-amber-900 hover:shadow-amber-500/30 dark:hover:bg-gray-400/20 dark:hover:text-gray-300 dark:hover:shadow-gray-500/30",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/parshu-ram-sharma-739aaa250/",
      label: "LinkedIn",
      color:
        "hover:bg-blue-200/60 hover:text-blue-900 hover:shadow-blue-500/30 dark:hover:bg-blue-400/20 dark:hover:text-blue-400 dark:hover:shadow-blue-500/30",
    },
    {
      icon: Mail,
      href: "mailto:parshu13.raam@gmail.com",
      label: "Email",
      color:
        "hover:bg-red-200/60 hover:text-red-900 hover:shadow-red-500/30 dark:hover:bg-red-400/20 dark:hover:text-red-400 dark:hover:shadow-red-500/30",
    },
  ]

  // Fixed positions for floating elements to prevent hydration mismatch
  const fixedFloatingShapes = [
    { width: 4, height: 4, left: 10, top: 20 },
    { width: 6, height: 6, left: 80, top: 15 },
    { width: 3, height: 3, left: 25, top: 70 },
    { width: 5, height: 5, left: 90, top: 80 },
    { width: 4, height: 4, left: 60, top: 30 },
    { width: 3, height: 3, left: 15, top: 50 },
    { width: 5, height: 5, left: 75, top: 60 },
    { width: 4, height: 4, left: 40, top: 85 },
  ]

  // Fixed positions for energy particles
  const fixedEnergyParticles = [
    { left: 25, top: 30 },
    { left: 35, top: 45 },
    { left: 45, top: 25 },
    { left: 55, top: 60 },
    { left: 65, top: 35 },
    { left: 30, top: 70 },
    { left: 70, top: 50 },
    { left: 40, top: 80 },
    { left: 80, top: 25 },
    { left: 20, top: 60 },
    { left: 60, top: 75 },
    { left: 50, top: 40 },
    { left: 75, top: 70 },
    { left: 85, top: 45 },
    { left: 15, top: 35 },
  ]

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Parshu_Ram_CV.pdf';
    link.download = 'Parshu_Ram_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gradient-to-br dark:from-purple-950 dark:via-indigo-950 dark:to-slate-950">
      {/* Pure White Light Mode - No Gradients */}
      <div className="absolute inset-0">
        {/* Light Mode: Pure White Only */}
        <div className="absolute inset-0 dark:hidden bg-white"></div>

        {/* Dark Mode: Original Gradients */}
        <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Fixed Floating Geometric Shapes - Only render on client */}
      {isClient && (
        <div className="absolute inset-0">
          {fixedFloatingShapes.map((shape, i) => (
            <motion.div
              key={i}
              className="absolute bg-orange-400/40 dark:bg-white/20 rounded-full shadow-lg"
              style={{
                width: `${shape.width}px`,
                height: `${shape.height}px`,
                left: `${shape.left}%`,
                top: `${shape.top}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-15, 15, -15],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      )}

      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-300/30 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-300/30 dark:bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300/30 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23F97316&quot; fillOpacity=&quot;0.06&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Clean Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-amber-100/80 dark:bg-slate-800/95 backdrop-blur-xl rounded-full border border-orange-300/60 dark:border-slate-600/80 group hover:border-orange-400/80 dark:hover:border-cyan-400/60 transition-all duration-500 shadow-lg shadow-orange-200/30 dark:shadow-purple-500/10"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Crown className="w-5 h-5 text-orange-600 dark:text-cyan-400" />
              </motion.div>
              <span className="text-sm font-bold text-orange-700 dark:text-white">Welcome to the Future</span>
            </motion.div>

            {/* Clean Stylish Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <motion.h1
                    className="text-5xl lg:text-7xl font-black leading-tight tracking-tight"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <span className="relative inline-block group">
                      <span className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-700 dark:from-white dark:via-purple-200 dark:to-cyan-200 bg-clip-text text-transparent font-extrabold">
                        PARSHU
                      </span>
                      <motion.div
                        className="absolute -inset-1 bg-orange-300/20 dark:bg-gradient-to-r dark:from-purple-400/20 dark:to-cyan-400/20 rounded-xl blur-lg"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </span>
                    <br />
                    <span className="relative inline-block group mt-2">
                      <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-extrabold">
                        RAM
                      </span>
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-400 dark:to-purple-400 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                      />
                    </span>
                  </motion.h1>

                  {/* Clean Decorative Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-400 dark:from-cyan-400 dark:to-purple-400 rounded-xl opacity-70 shadow-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Flame className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-yellow-400 dark:from-purple-400 dark:to-pink-400 rounded-xl opacity-70 shadow-lg"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      rotate: [360, 180, 0],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Rocket className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Clean Typed Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl lg:text-3xl font-light relative"
            >
              <span className="text-amber-800 dark:text-gray-300 font-medium">I&apos;m a </span>
              <span
                ref={typedRef}
                className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-bold"
              />
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="text-orange-600 dark:text-cyan-400 text-3xl font-bold"
              >
                |
              </motion.span>
            </motion.div>

            {/* Clean Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg lg:text-xl text-amber-800 dark:text-gray-300 max-w-2xl leading-relaxed font-medium">
                Crafting <span className="text-orange-700 dark:text-cyan-400 font-bold">next-generation</span> digital
                experiences with <span className="text-pink-700 dark:text-purple-400 font-bold">AI-powered</span>{" "}
                solutions and
                <span className="text-red-700 dark:text-pink-400 font-bold"> immersive</span> interfaces.
              </p>

              {/* Clean Stats */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {[
                  {
                    number: "20+",
                    label: "Technologies",
                    icon: Code,
                    color: "from-orange-500 to-pink-500 dark:from-cyan-400 dark:to-blue-500",
                    bgColor: "bg-orange-50/80 dark:bg-slate-800/95",
                    borderColor: "border-orange-300 dark:border-slate-600/80",
                  },
                  {
                    number: "10+",
                    label: "Projects",
                    icon: Sparkles,
                    color: "from-pink-500 to-red-500 dark:from-purple-400 dark:to-pink-500",
                    bgColor: "bg-pink-50/80 dark:bg-slate-800/95",
                    borderColor: "border-pink-300 dark:border-slate-600/80",
                  },
                  {
                    number: "2+",
                    label: "Years",
                    icon: Zap,
                    color: "from-yellow-500 to-orange-500 dark:from-pink-400 dark:to-red-500",
                    bgColor: "bg-yellow-50/80 dark:bg-slate-800/95",
                    borderColor: "border-yellow-300 dark:border-slate-600/80",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-orange-300/40 dark:bg-gradient-to-r dark:from-purple-500/20 dark:to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div
                      className={`relative flex items-center gap-3 px-6 py-4 ${stat.bgColor} backdrop-blur-xl rounded-2xl border ${stat.borderColor} group-hover:border-opacity-80 dark:group-hover:border-cyan-400/60 transition-all duration-300 shadow-lg shadow-orange-200/20 dark:shadow-purple-500/10`}
                    >
                      <div
                        className={`p-2 bg-gradient-to-r ${stat.color} rounded-lg shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <stat.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-amber-900 dark:text-white font-bold text-lg">{stat.number}</div>
                        <div className="text-amber-700 dark:text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Clean CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-cyan-500 dark:via-purple-500 dark:to-pink-500 rounded-2xl text-white font-bold overflow-hidden transition-all duration-300 shadow-lg shadow-orange-500/30 dark:shadow-purple-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 dark:from-pink-500 dark:via-purple-500 dark:to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Let&apos;s Create Magic
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-orange-400/80 dark:border-cyan-400/50 rounded-2xl text-amber-900 dark:text-white font-bold backdrop-blur-xl hover:bg-orange-100/60 dark:hover:bg-slate-800/60 hover:border-orange-500 dark:hover:border-cyan-400 transition-all duration-300 flex items-center gap-2 justify-center relative overflow-hidden shadow-lg shadow-orange-200/20 dark:shadow-cyan-500/10"
                onClick={handleDownloadCV}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download CV</span>
              </motion.button>
            </motion.div>

            {/* Clean Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group relative p-4 bg-amber-100/60 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-orange-300/50 dark:border-slate-600/80 text-amber-800 dark:text-white ${color} transition-all duration-300 shadow-lg shadow-orange-200/20 dark:shadow-purple-500/10`}
                  aria-label={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  <Icon className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Clean Enhanced Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Clean Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 p-1 opacity-60">
                  <div className="w-full h-full rounded-full bg-white dark:bg-purple-950"></div>
                </div>
              </motion.div>

              <motion.div
                className="absolute inset-4 rounded-full border-2 border-orange-400/50 dark:border-cyan-400/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Clean Profile Image Container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-orange-300/60 dark:border-purple-400/30 backdrop-blur-xl shadow-2xl shadow-orange-300/20 dark:shadow-purple-500/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src="/images/userAsset/good.jpg" alt="Parshu Ram Sharma" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-orange-400/20 dark:from-purple-900/50 dark:via-transparent dark:to-cyan-400/20"></div>
              </motion.div>

              {/* Clean Floating Tech Orbs */}
              {floatingElements.map(({ icon: Icon, position, delay }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${position} w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 dark:from-cyan-400 dark:to-purple-400 rounded-2xl flex items-center justify-center text-white shadow-2xl`}
                  animate={{
                    y: [-15, 15, -15],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: delay,
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
              ))}

              {/* Fixed Energy Particles - Only render on client */}
              {isClient &&
                fixedEnergyParticles.map((particle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-orange-400 dark:bg-cyan-400 rounded-full"
                    style={{
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      x: [0, i % 2 === 0 ? 50 : -50],
                      y: [0, i % 3 === 0 ? 50 : -50],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                ))}
            </div>
          </motion.div>
        </div>

        {/* Clean Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-4 text-orange-600 dark:text-cyan-400">
            <span className="text-sm font-medium">Explore the Future</span>
            <motion.div
              className="w-8 h-12 border-2 border-orange-400/60 dark:border-cyan-400/50 rounded-full flex justify-center relative overflow-hidden backdrop-blur-xl"
              whileHover={{ borderColor: "rgba(251, 146, 60, 0.8)", scale: 1.1 }}
            >
              <motion.div
                className="w-2 h-4 bg-gradient-to-b from-orange-400 to-pink-400 dark:from-cyan-400 dark:to-purple-400 rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
