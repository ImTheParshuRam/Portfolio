"use client"

import BasicLayout from "@/components/ui/layout/basicLayout"
import Chatbot from "./features/chatbot"
import Project from "./features/project"
import Contact from "./features/contact"
import Intro from "./features/intro"
import Skills from "./features/skills"
import Footer from "./features/footer"

export default function Home() {
  return (
    <div className="bg-purple-950 dark:bg-gradient-to-br dark:from-purple-950 dark:via-indigo-950 dark:to-slate-950 bg-white min-h-screen">
      <BasicLayout>
        <Intro />
        <Project />
        <Skills />
        <Contact />
        <div>
          <Chatbot />
        </div>
      </BasicLayout>
      <Footer />
    </div>
  )
}
