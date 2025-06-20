"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code, Database, Palette, Brain, Cpu, Zap, Star, Sparkles, Globe, Shield } from "lucide-react"
import { useState } from "react"

const skillCategories = [
  {
    title: "Frontend Mastery",
    icon: Palette,
    color: "from-pink-500 via-purple-500 to-cyan-500",
    skills: [
      { name: "HTML", level: 95, icon: "HTML" },
      { name: "CSS", level: 92, icon: "CSS" },
      { name: "JavaScript", level: 90, icon: "JavaScript" },
      { name: "React", level: 88, icon: "React" },
      { name: "NextJs", level: 85, icon: "NextJs" },
      { name: "Tailwind", level: 90, icon: "Tailwind" },
      { name: "Bootstrap", level: 80, icon: "Bootstrap" },
      { name: "MaterialUI", level: 75, icon: "MaterialUI" },
    ],
  },
  {
    title: "Backend Power",
    icon: Database,
    color: "from-blue-500 via-cyan-500 to-purple-500",
    skills: [
      { name: "NodeJs", level: 85, icon: "NodeJs" },
      { name: "Express", level: 82, icon: "Express" },
      { name: "MongoDB", level: 80, icon: "MongoDB" },
      { name: "Postgress", level: 78, icon: "Postgress" },
      { name: "Drizzle", level: 75, icon: "Drizzle" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Code,
    color: "from-purple-500 via-indigo-500 to-blue-500",
    skills: [
      { name: "Git", level: 90, icon: "Git" },
      { name: "Github", level: 88, icon: "Github" },
      { name: "Docker", level: 70, icon: "Docker" },
      { name: "K8s", level: 65, icon: "K8s" },
      { name: "Vercel", level: 85, icon: "Vercel" },
      { name: "Postman", level: 80, icon: "Postman" },
      { name: "Bash", level: 75, icon: "Bash" },
    ],
  },
  {
    title: "AI & Analytics",
    icon: Brain,
    color: "from-green-500 via-teal-500 to-cyan-500",
    skills: [
      { name: "Gemini", level: 80, icon: "Gemini" },
      { name: "ChartJs", level: 85, icon: "ChartJs" },
      { name: "GraphQL", level: 70, icon: "GraphQL" },
    ],
  },
]

const achievements = [
  {
    icon: Code,
    number: "20+",
    label: "Technologies Mastered",
    color: "text-orange-500 dark:text-cyan-400",
  },
  {
    icon: Star,
    number: "10+",
    label: "Projects Completed",
    color: "text-pink-500 dark:text-purple-400",
  },
  { icon: Zap, number: "2+", label: "Years Experience", color: "text-yellow-500 dark:text-pink-400" },
  {
    icon: Globe,
    number: "1000+",
    label: "Lines of Code",
    color: "text-emerald-500 dark:text-green-400",
  },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gradient-to-br dark:from-purple-950 dark:via-indigo-950 dark:to-slate-950 relative overflow-hidden"
    >
      {/* Background Effects - Only for Dark Mode */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-300/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
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
              <Cpu className="w-5 h-5 text-orange-600 dark:text-cyan-400" />
            </motion.div>
            <span className="text-sm font-medium text-orange-700 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-purple-400 dark:bg-clip-text dark:text-transparent">
              Technical Arsenal
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-700 dark:from-white dark:via-cyan-200 dark:to-purple-200 bg-clip-text text-transparent">
              SKILLS &
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              EXPERTISE
            </span>
          </h2>

          <p className="text-xl text-amber-800 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive arsenal of{" "}
            <span className="text-orange-700 dark:text-cyan-400 font-semibold">cutting-edge technologies</span> and
            <span className="text-pink-700 dark:text-purple-400 font-semibold"> modern frameworks</span> to build the
            future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Section - About & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative">
              <h3 className="text-4xl lg:text-5xl font-black text-amber-900 dark:text-white mb-8">
                <span className="text-6xl lg:text-7xl bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                  T
                </span>
                ech Wizard & Code Architect
              </h3>

              <div className="space-y-6 text-amber-700 dark:text-gray-300 leading-relaxed text-lg">
                <p>
                  Hey there! I&apos;m <span className="text-amber-900 dark:text-white font-bold">Parshu Ram Sharma</span>, a
                  passionate{" "}
                  <span className="text-orange-700 dark:text-cyan-400 font-semibold">Full Stack Developer</span> and{" "}
                  <span className="text-pink-700 dark:text-purple-400 font-semibold">AI Enthusiast</span> currently
                  pursuing B.Tech in Information Technology.
                </p>
                <p>
                  I specialize in crafting{" "}
                  <span className="text-red-700 dark:text-pink-400 font-semibold">
                    next-generation web applications
                  </span>{" "}
                  using modern frameworks like{" "}
                  <span className="text-orange-700 dark:text-cyan-400 font-semibold">Next.js</span>,{" "}
                  <span className="text-pink-700 dark:text-blue-400 font-semibold">React.js</span>, and{" "}
                  <span className="text-yellow-700 dark:text-purple-400 font-semibold">Tailwind CSS</span>.
                </p>
                <p>
                  My expertise spans the entire development spectrum, from{" "}
                  <span className="text-emerald-700 dark:text-green-400 font-semibold">AI-powered backends</span> to{" "}
                  <span className="text-orange-700 dark:text-yellow-400 font-semibold">stunning user interfaces</span>,
                  always pushing the boundaries of what&apos;s possible.
                </p>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-orange-200/40 dark:bg-gradient-to-r dark:from-purple-500/20 dark:to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-6 bg-amber-50/90 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-orange-300/50 dark:border-slate-600/80 group-hover:border-orange-400/70 dark:group-hover:border-cyan-400/60 transition-all duration-300 shadow-lg shadow-orange-200/20 dark:shadow-purple-500/10">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 rounded-xl shadow-lg">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className={`text-3xl font-black ${achievement.color}`}>{achievement.number}</div>
                        <div className="text-amber-600 dark:text-gray-400 text-sm font-medium">{achievement.label}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Scrollable Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400 dark:scrollbar-thumb-cyan-400 scrollbar-track-orange-100/50 dark:scrollbar-track-slate-800/50 pr-4"
          >
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-amber-50/90 dark:bg-slate-800/95 backdrop-blur-xl rounded-3xl p-8 border border-orange-300/50 dark:border-purple-400/30 group-hover:border-orange-400/70 dark:group-hover:border-cyan-400/50 transition-all duration-500 shadow-lg shadow-orange-200/20 dark:shadow-purple-500/10">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl shadow-lg`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-amber-900 dark:text-white">{category.title}</h4>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className="group/skill relative"
                        >
                          <div className="relative p-4 bg-orange-100/60 dark:bg-slate-700/80 backdrop-blur-xl rounded-2xl border border-orange-300/40 dark:border-slate-600/80 group-hover/skill:border-orange-400/60 dark:group-hover/skill:border-cyan-400/60 transition-all duration-300 shadow-sm shadow-orange-100/20 dark:shadow-purple-500/5">
                            {/* Skill Icon & Name */}
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 relative">
                                <Image
                                  src={`/images/stack/${skill.icon}.${["HTML", "CSS", "React", "Tailwind", "Express", "Postgress", "Gemini", "Drizzle"].includes(skill.icon) ? "png" : "svg"}`}
                                  alt={skill.name}
                                  width={32}
                                  height={32}
                                  className="object-contain"
                                />
                              </div>
                              <span className="text-amber-900 dark:text-white font-semibold group-hover/skill:text-orange-600 dark:group-hover/skill:text-cyan-400 transition-colors">
                                {skill.name}
                              </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative">
                              <div className="w-full h-2 bg-amber-300/40 dark:bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                />
                              </div>
                              <span className="absolute -top-6 right-0 text-xs text-orange-600 dark:text-cyan-400 font-bold">
                                {skill.level}%
                              </span>
                            </div>

                            {/* Hover Glow */}
                            {hoveredSkill === skill.name && (
                              <div className="absolute inset-0 bg-orange-300/30 dark:bg-gradient-to-r dark:from-cyan-400/20 dark:to-purple-400/20 rounded-2xl blur-xl" />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-cyan-500 dark:via-purple-500 dark:to-pink-500 rounded-2xl text-white font-bold text-xl cursor-pointer group relative overflow-hidden shadow-lg shadow-orange-500/25 dark:shadow-purple-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 dark:from-pink-500 dark:via-purple-500 dark:to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Shield className="w-8 h-8 relative z-10" />
            <span className="relative z-10">Ready to Build the Future Together</span>
            <Sparkles className="w-8 h-8 relative z-10 group-hover:animate-spin" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
