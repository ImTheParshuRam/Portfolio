"use client";

import Navbar from "@/app/BasicLayout/navbar";

export default function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1 p-5 max-w-6xl mx-auto w-full">{children}</main>
    </div>
  );
}
