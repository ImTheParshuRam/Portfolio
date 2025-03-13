"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
    
    setLoading(false);
  };

  return (
    <section id="contact" className="w-full mt-10 bg-gray-200 dark:bg-gray-900 py-16 flex flex-col items-center">
      <h1 className="text-5xl text-orange-500 font-bold">Contact Me</h1>
      <h3 className="text-3xl text-gray-600 dark:text-gray-300 mt-4 capitalize">Questions, thoughts, or just want to say hello?</h3>

      <motion.form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-6 w-3/4 md:w-1/2 bg-white dark:bg-gray-800 p-8 shadow-md rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full h-12 px-4 text-lg rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" className="w-full h-12 px-4 text-lg rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400" required />
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter your subject" className="w-full h-12 px-4 text-lg rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" rows={4} className="w-full px-4 py-2 text-lg rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400" required></textarea>

        <motion.button
          type="submit"
          className="w-full py-3 text-lg bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition-all flex justify-center items-center gap-2"
          whileTap={{ scale: 0.9 }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
          <i className="fa-solid fa-paper-plane text-xl"></i>
        </motion.button>

        {success && <p className="text-green-500 text-center mt-3">{success}</p>}
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
      </motion.form>
    </section>
  );
}
