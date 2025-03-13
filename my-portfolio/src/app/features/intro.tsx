"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Backend Developer",
        "UI/UX Designer",
        "Coder",
      ],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative max-w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 py-16 bg-gray-100 dark:bg-gray-900">
      {/* Left Side - Text */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Hi! I am Parshu Ram Sharma</h1>
        <h2 className="text-2xl mt-2 text-gray-700 dark:text-gray-300">
          I am a <span ref={typedRef} className="text-blue-500"></span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          I’m a software developer, and this is my portfolio. Here you’ll learn about my journey as a developer.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-all">
          Hire Me
        </button>
      </div>

      {/* Right Side - Image from public folder */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 mt-8 md:mt-0 flex justify-center items-center">
        <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
        <Image
          src="/images/userAsset/good.jpg"
          alt="Parshu Ram Sharma"
          width={300}
          height={300}
          className="rounded-full shadow-lg object-cover relative z-10"
        />
      </div>
    </section>
  );
}