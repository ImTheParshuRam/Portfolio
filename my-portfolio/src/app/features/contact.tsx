"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (response.ok) {
        setSuccess("Your message has been sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setError(data.error || "Failed to send message.")
      }
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Please try again.")
    }

    setLoading(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "parshu13.raam@gmail.com",
      href: "mailto:parshu13.raam@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXX XXX XXXX",
      href: "tel:+91XXXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: "#",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gradient-to-br dark:from-purple-950 dark:via-indigo-950 dark:to-slate-950 relative overflow-hidden"
    >
      {/* Background Elements - Only for Dark Mode */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-300/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-yellow-300/20 dark:bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/60 dark:bg-gradient-to-r dark:from-purple-900/30 dark:to-pink-900/30 rounded-full mb-4">
            <Send className="w-4 h-4 text-orange-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-orange-700 dark:text-purple-300">Get In Touch</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Let&apos;s Work Together
            </span>
          </h2>

          <p className="text-lg text-amber-800 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life with cutting-edge technology and
            creative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-amber-900 dark:text-white mb-6">Let&apos;s start a conversation</h3>
              <p className="text-amber-700 dark:text-slate-400 leading-relaxed">
                I&apos;m always excited to work on new projects and collaborate with amazing people. Whether you have a
                question, want to discuss a project, or just want to say hello, I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex items-center gap-4 p-4 bg-amber-50/80 dark:bg-slate-800 rounded-xl border border-orange-200/60 dark:border-slate-700 hover:shadow-lg hover:border-orange-400/80 dark:hover:border-purple-600 transition-all duration-300 shadow-sm shadow-orange-200/20 dark:shadow-purple-500/10"
                >
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-purple-500 dark:to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-amber-900 dark:text-white">{info.title}</div>
                    <div className="text-amber-700 dark:text-slate-400">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 bg-emerald-100/80 dark:bg-green-900/20 border border-emerald-300/60 dark:border-green-800 rounded-xl shadow-sm shadow-emerald-200/20 dark:shadow-green-500/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-emerald-800 dark:text-green-400">Available for new projects</span>
              </div>
              <p className="text-sm text-emerald-700 dark:text-green-500 mt-1">
                Currently accepting new freelance and full-time opportunities
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-amber-800 dark:text-slate-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-amber-50/80 dark:bg-slate-800 border border-orange-200/60 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-400 dark:focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-amber-900 dark:text-white shadow-sm shadow-orange-100/20 dark:shadow-purple-500/5"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-amber-800 dark:text-slate-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-amber-50/80 dark:bg-slate-800 border border-orange-200/60 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-400 dark:focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-amber-900 dark:text-white shadow-sm shadow-orange-100/20 dark:shadow-purple-500/5"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-amber-800 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-amber-50/80 dark:bg-slate-800 border border-orange-200/60 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-400 dark:focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-amber-900 dark:text-white shadow-sm shadow-orange-100/20 dark:shadow-purple-500/5"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-amber-800 dark:text-slate-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-amber-50/80 dark:bg-slate-800 border border-orange-200/60 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-400 dark:focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-amber-900 dark:text-white resize-none shadow-sm shadow-orange-100/20 dark:shadow-purple-500/5"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 dark:hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-orange-500/20 dark:shadow-purple-500/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 dark:from-pink-600 dark:to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              {/* Status Messages */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-emerald-100/80 dark:bg-green-900/20 border border-emerald-300/60 dark:border-green-800 rounded-lg shadow-sm shadow-emerald-200/20 dark:shadow-green-500/10"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-emerald-800 dark:text-green-400">{success}</span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-100/80 dark:bg-red-900/20 border border-red-300/60 dark:border-red-800 rounded-lg shadow-sm shadow-red-200/20 dark:shadow-red-500/10"
                >
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-800 dark:text-red-400">{error}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
