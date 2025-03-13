
"use client";

import BasicLayout from "@/components/ui/layout/basicLayout";
import Chatbot from "./features/chatbot";
import Project from "./features/project";
import Contact from "./features/contact";
import Intro from "./features/intro";
import Skills from "./features/skills";
import Footer from "./features/footer";




export default function Home() {
  return (
    <div>
      
      <BasicLayout>
     <Intro></Intro>
      
     {/* Projects Section */}
     <Project></Project>

     {/* Skill Section */}
     <Skills></Skills>


     {/* Contact Section */}
     <Contact></Contact>

     {/* Floating Chatbot */}
     <div>
       <Chatbot />
     </div>
     
     
   </BasicLayout>

   <div>
      <Footer/>
   </div>
   
    </div>
    
  );
}
