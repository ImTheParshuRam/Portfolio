"use client"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowUpRight, Sparkles, Code, Star, Calendar, Users, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const projects = [
  {
    id: 1,
    title: "VR Physics Lab Experiment",
    description:
      "A virtual reality-based interactive physics lab to help students learn experimental concepts in a practical environment.",
    detailedDescription:
      "Revolutionary VR platform that transforms traditional physics education through immersive 3D simulations. Students can conduct experiments in zero-gravity environments, manipulate molecular structures, and visualize complex physics phenomena in ways never before possible.",
    skills: ["AR/VR", "Blender", "C#", "Unity", "WebXR"],
    github: "",
    live: "https://www.linkedin.com/posts/parshu-ram-sharma-739aaa250_virtualreality-educationinnovation-physicseducation-activity-7245856946375778304-oC7R",
    image: "/images/projects/Ar_Vr_img.png",
    featured: true,
    gradient: "from-purple-500 via-pink-500 to-cyan-500",
    category: "VR/AR",
    year: "2024",
    team: "4 Members",
    status: "Live",
    impact: "500+ Students Engaged",
  },
  {
    id: 2,
    title: "AI Mock Interview Trainer",
    description:
      "A platform that conducts AI-driven video-based mock interviews, analyzes responses, and provides real-time feedback.",
    detailedDescription:
      "Next-generation AI interview platform powered by advanced machine learning algorithms. Features real-time facial expression analysis, speech pattern recognition, and personalized feedback generation to help candidates ace their interviews.",
    skills: ["Next.js", "PostgreSQL", "Neon", "Drizzle ORM", "Gemini AI", "Tailwind CSS", "WebRTC"],
    github: "https://github.com/ImTheParshuRam/aimock",
    live: "https://aimock-ten.vercel.app/",
    image: "/images/projects/ai_int_img.png",
    featured: true,
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    category: "AI/ML",
    year: "2024",
    team: "Solo Project",
    status: "Production",
    impact: "1000+ Mock Interviews",
  },
  {
    id: 3,
    title: "Weather Forecast Pro",
    description: "A sophisticated weather application with advanced forecasting and beautiful visualizations.",
    detailedDescription:
      "Modern weather application featuring real-time data visualization, 7-day forecasts, interactive maps, and personalized weather alerts. Built with performance optimization and stunning UI animations.",
    skills: ["HTML", "CSS", "JavaScript", "Chart.js", "Weather API"],
    github: "https://github.com/ImTheParshuRam/web_dev/tree/master/project/New%20Upload/weatherAppProject",
    live: "https://weather-app-delta-wine-23.vercel.app/",
    image: "/images/projects/weather_app.jpg",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    category: "Web App",
    year: "2023",
    team: "Solo Project",
    status: "Live",
    impact: "2000+ Daily Users",
  },
  {
    id: 4,
    title: "Plan-with-Love Tour Guide",
    description: "A React-based tour guide application that showcases destinations through an intuitive interface.",
    detailedDescription:
      "Comprehensive travel planning platform with interactive destination cards, personalized recommendations, booking integration, and social sharing features. Designed for modern travelers seeking unique experiences.",
    skills: ["ReactJS", "CSS", "React Router", "API Integration"],
    github: "https://github.com/ImTheParshuRam/web_dev/tree/master/project/React%20Project/plan-with-love",
    live: "",
    image: "/images/projects/tour.png",
    gradient: "from-green-500 via-teal-500 to-cyan-500",
    category: "React",
    year: "2023",
    team: "Solo Project",
    status: "Development",
    impact: "Travel Planning Simplified",
  },
  // {
  //   id: 5,
  //   title: "E-Commerce Platform",
  //   description: "Full-stack e-commerce solution with modern payment integration and admin dashboard.",
  //   detailedDescription:
  //     "Complete e-commerce ecosystem featuring advanced product management, secure payment processing, real-time inventory tracking, and comprehensive analytics dashboard for business insights.",
  //   skills: ["Next.js", "Stripe", "MongoDB", "Tailwind", "Node.js"],
  //   github: "",
  //   live: "",
  //   image: "/placeholder.svg?height=300&width=400",
  //   gradient: "from-indigo-500 via-purple-500 to-pink-500",
  //   category: "Full Stack",
  //   year: "2024",
  //   team: "3 Members",
  //   status: "Beta",
  //   impact: "E-commerce Revolution",
  // },
  // {
  //   id: 6,
  //   title: "Blockchain Voting System",
  //   description: "Secure and transparent voting platform built on blockchain technology.",
  //   detailedDescription:
  //     "Revolutionary voting system leveraging blockchain technology to ensure transparency, security, and immutability. Features smart contracts, real-time vote tracking, and cryptographic security.",
  //   skills: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
  //   github: "",
  //   live: "",
  //   image: "/placeholder.svg?height=300&width=400",
  //   gradient: "from-yellow-500 via-orange-500 to-red-500",
  //   category: "Blockchain",
  //   year: "2024",
  //   team: "2 Members",
  //   status: "Prototype",
  //   impact: "Democratic Innovation",
  // },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const controls = useAnimation()

  // Duplicate projects for infinite scroll
  const infiniteProjects = [...projects, ...projects, ...projects]

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  useEffect(() => {
    controls.start({
      x: -currentIndex * 450,
      transition: { duration: 0.8, ease: "easeInOut" },
    })
  }, [currentIndex, controls])

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gradient-to-br dark:from-purple-950 dark:via-indigo-950 dark:to-slate-950 relative overflow-hidden"
    >
      {/* Background Effects - Only for Dark Mode */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-300/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-orange-100/60 dark:bg-gradient-to-r dark:from-cyan-500/20 dark:via-purple-500/20 dark:to-pink-500/20 backdrop-blur-xl rounded-full border border-orange-300/50 dark:border-cyan-400/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-orange-600 dark:text-cyan-400" />
            </motion.div>
            <span className="text-sm font-medium text-orange-700 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-purple-400 dark:bg-clip-text dark:text-transparent">
              Featured Projects
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-700 dark:from-white dark:via-cyan-200 dark:to-purple-200 bg-clip-text text-transparent">
              DIGITAL
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              MASTERPIECES
            </span>
          </h2>

          <p className="text-xl text-amber-800 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of{" "}
            <span className="text-orange-700 dark:text-cyan-400 font-semibold">revolutionary projects</span> that push
            the boundaries of <span className="text-pink-700 dark:text-purple-400 font-semibold">technology</span> and{" "}
            <span className="text-red-700 dark:text-pink-400 font-semibold">innovation</span>.
          </p>
        </motion.div>

        {/* Fixed Infinite Slider Container */}
        <div
          className="relative mb-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={controls}
              style={{ width: `${infiniteProjects.length * 450}px` }}
            >
              {infiniteProjects.map((project, index) => (
                <ProjectCard key={`${project.id}-${Math.floor(index / projects.length)}`} project={project} />
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-400 dark:to-purple-400 scale-125"
                    : "bg-amber-400 dark:bg-gray-600 hover:bg-amber-500 dark:hover:bg-gray-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-cyan-500 dark:via-purple-500 dark:to-pink-500 rounded-2xl text-white font-bold text-lg overflow-hidden transition-all duration-300 shadow-lg shadow-orange-500/25 dark:shadow-purple-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 dark:from-pink-500 dark:via-purple-500 dark:to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              <Code className="w-6 h-6" />
              View All Projects
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Project Card Component with Better Dark Mode Visibility
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Fixed button visibility logic
  const hasValidGithub = project.github && project.github !== "" && project.github !== "#"
  const hasValidLive = project.live && project.live !== "" && project.live !== "#"

  return (
    <motion.div
      className="relative w-96 h-[500px] flex-shrink-0"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      whileHover={{ y: -10 }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT SIDE - Enhanced Dark Mode Visibility */}
        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
          <div className="relative h-full bg-amber-50/90 dark:bg-slate-800/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-orange-300/50 dark:border-slate-600/80 hover:border-orange-400/70 dark:hover:border-cyan-400/60 transition-all duration-500 shadow-lg shadow-orange-200/20 dark:shadow-slate-900/50">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-orange-400/20 dark:from-slate-900/80 dark:via-slate-800/40 dark:to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <div
                  className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-bold rounded-full backdrop-blur-xl border border-white/20 shadow-lg`}
                >
                  {project.category}
                </div>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full shadow-lg">
                    <Star className="w-3 h-3" />
                    FEATURED
                  </div>
                </motion.div>
              )}
            </div>

            {/* Content Section - Enhanced Dark Mode */}
            <div className="p-6 pb-4 bg-white/80 dark:bg-slate-800/90">
              <h3 className="text-xl font-bold text-amber-900 dark:text-white mb-3 leading-tight">{project.title}</h3>
              <p className="text-amber-700 dark:text-slate-200 mb-4 leading-relaxed text-sm line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* ALL TECHNOLOGIES on Front - Enhanced Dark Mode */}
            <div className="px-6 pb-6 bg-white/80 dark:bg-slate-800/90">
              <h4 className="text-amber-900 dark:text-white font-semibold mb-3 text-sm">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-orange-200/60 dark:bg-slate-700/80 backdrop-blur-xl border border-orange-300/50 dark:border-slate-600/60 text-orange-700 dark:text-cyan-300 text-xs font-medium rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE - Enhanced Dark Mode Visibility */}
        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <div className="relative h-full bg-orange-100/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-orange-400/60 dark:border-slate-600/80 p-6 shadow-lg shadow-orange-200/30 dark:shadow-slate-900/50">
            <div className="relative z-10 h-full flex flex-col">
              {/* Header with Project Info - Enhanced Dark Mode */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-amber-900 dark:text-white mb-3">{project.title}</h3>
                <div className="flex items-center gap-4 text-sm text-amber-700 dark:text-slate-200 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-orange-600 dark:text-cyan-400" />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-pink-600 dark:text-purple-400" />
                    {project.team}
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-yellow-600 dark:text-pink-400" />
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Detailed Description - Enhanced Dark Mode */}
              <div className="flex-1 mb-6">
                <p className="text-amber-800 dark:text-slate-100 leading-relaxed mb-4">{project.detailedDescription}</p>

                {/* Impact - Enhanced Dark Mode */}
                <div className="p-3 bg-green-200/60 dark:bg-slate-700/80 rounded-xl border border-green-400/50 dark:border-slate-600/60">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300 font-semibold">
                    <Star className="w-4 h-4" />
                    Impact: {project.impact}
                  </div>
                </div>
              </div>

              {/* Action Buttons - Enhanced Dark Mode */}
              {(hasValidGithub || hasValidLive) && (
                <div className="flex gap-3">
                  {hasValidGithub && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 dark:from-purple-600 dark:to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 dark:hover:from-purple-700 dark:hover:to-cyan-700 transition-all duration-300 shadow-lg"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  )}
                  {hasValidLive && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 dark:from-cyan-600 dark:to-pink-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-pink-600 dark:hover:from-cyan-700 dark:hover:to-pink-700 transition-all duration-300 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </motion.a>
                  )}
                </div>
              )}

              {/* Show message if no valid links - Enhanced Dark Mode */}
              {!hasValidGithub && !hasValidLive && (
                <div className="text-center p-4 bg-amber-200/60 dark:bg-slate-700/80 rounded-xl border border-amber-300/50 dark:border-slate-600/60">
                  <p className="text-amber-800 dark:text-slate-200 text-sm font-medium">
                    🚧 Project links coming soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
