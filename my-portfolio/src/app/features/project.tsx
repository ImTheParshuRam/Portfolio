"use client";

import { motion } from "framer-motion";
import Image from "next/image"; 

const projects = [
  {
    id: 1,
    title: "VR Physics Lab Experiment",
    description: "A virtual reality-based interactive physics lab to help students learn experimental concepts in a practical environment.",
    skills: ["AR/VR", "Blender", "C#"],
    github: "", 
    live: "https://www.linkedin.com/posts/parshu-ram-sharma-739aaa250_virtualreality-educationinnovation-physicseducation-activity-7245856946375778304-oC7R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4ZKZ0B9BHQF33ufhDsSiUwn5Zlr7Dcs-Y",
    image: "/images/projects/Ar_Vr_img.png", 
  },
  {
    id: 2,
    title: "AI Mock Interview Trainer",
    description: "A platform that conducts AI-driven video-based mock interviews, analyzes responses, and provides real-time feedback on body language, tone, and verbal responses.",
    skills: ["Next.js", "PostgreSQL", "Neon", "Drizzle ORM", "Gemini AI", "Tailwind CSS"],
    github: "https://github.com/ImTheParshuRam/aimock",
    live: "", 
    image: "/images/projects/ai_int_img.png", 
  },
  {
    id: 3,
    title: "Weather App",
    description: "A simple weather application built with HTML, CSS, and JavaScript, deployed on Vercel.",
    skills: ["HTML", "CSS", "JavaScript", "Vercel"],
    github: "https://github.com/ImTheParshuRam/web_dev/tree/master/project/New%20Upload/weatherAppProject",
    live: "https://weather-app-delta-wine-23.vercel.app/",
    image: "/images/projects/weather_app.jpg", 
  },
  {
    id: 4,
    title: "Plan-with-Love (Tour Guide App)",
    description: "A React-based tour guide application that showcases destinations through an intuitive card-based interface.",
    skills: ["ReactJS", "CSS"],
    github: "https://github.com/ImTheParshuRam/web_dev/tree/master/project/React%20Project/plan-with-love",
    live: "", 
    image: "/images/projects/tour.png", 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-10 py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-orange-500 mb-12">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative p-6 rounded-2xl shadow-lg overflow-hidden group bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-52 rounded-t-2xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 ease-in-out group-hover:opacity-90"
              />
            </div>

            <div className="p-6 text-gray-900 dark:text-white">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm opacity-80">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-xs font-semibold rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-6">
                {project.github && <a href={project.github} className="text-blue-500 hover:text-blue-700 font-medium">GitHub</a>}
                {project.live && <a href={project.live} className="text-green-500 hover:text-green-700 font-medium">Live</a>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
