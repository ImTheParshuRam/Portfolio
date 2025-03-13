"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="w-full mt-10 bg-gray-200 dark:bg-gray-900 py-16 flex flex-col items-center relative">
      <motion.h1 
        className="text-5xl text-orange-500 font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>
      
      
      <div className="mt-8 flex flex-col md:flex-row items-center md:items-start w-3/4 gap-10">
        {/* Left Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-orange-500 leading-tight">
            <span className="text-6xl">M</span>e and My Tech Stack
          </h2>
    
          <div className="mt-4 text-lg text-gray-700 dark:text-gray-300 space-y-4 text-justify">
            <p>
              Hi Everyone! My name is Parshu Ram Sharma. I am a Full Stack Web Developer and Machine Learning enthusiast currently pursuing a B.Tech in Information Technology. I have experience working on AI-driven applications, web development projects, and virtual reality experiments.
            </p>
            <p>
            I specialize in modern frameworks like Next.js, React.js, and Tailwind CSS, ensuring visually appealing and user-friendly web applications. My expertise spans both front-end and back-end development, allowing me to create seamless digital experiences. My tech stack includes HTML, CSS, JavaScript, React.js, and Tailwind CSS for front-end development, while on the back-end, I work with Node.js, Express.js, PostgreSQL, MongoDB, and Drizzle ORM. Additionally, I integrate AI solutions using OpenAI, Gemini AI, and Scikit-Learn to enhance application functionality.
            </p>
            <p>
            Security, performance optimization, and AI-powered solutions are my key priorities. With a strong problem-solving mindset and the ability to collaborate effectively, I am passionate about building intelligent and impactful web applications that enhance user experiences.


            </p>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="flex flex-wrap justify-center mt-30 md:w-1/2 gap-6 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/userAsset/blob vector.png"
            alt="Blob Vector"
            width={300}
            height={300}
            className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
          />
          {[
            "HTML", "CSS", "JavaScript", "React", "NodeJs", "NextJs", "Redux", "Tailwind", "Bootstrap", "MaterialUI",
            "Express", "Git", "Github", "GraphQL", "MongoDB", "Vercel", "ChartJs", "Bash", "Docker", "K8s","Postman","Postgress","Gemini","Drizzle"
          ].map((skill, index) => (
            <motion.div 
              key={index} 
              className="p-3 bg-white dark:bg-gray-800 shadow-md rounded-lg w-20 h-20 flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
            >
              <Image
                src={`/images/stack/${skill}.${["HTML", "CSS","React", "Tailwind", "Express","Postgress","Gemini","Drizzle"].includes(skill) ? "png" : "svg"}`}
                alt={skill}
                width={40}
                height={40}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
