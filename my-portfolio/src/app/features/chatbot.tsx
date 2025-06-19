"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Send, Bot, User, X, MessageSquare, Cpu, Minimize2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Chatbot({ isFullScreen, closeChat }: { isFullScreen?: boolean; closeChat?: () => void }) {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([
    {
      text: "Hi! I'm Parshu's AI Assistant. Ask me about his skills, projects, or experience! 🚀",
      sender: "bot",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { text: input, sender: "user" as const }
    setMessages((prevMessages) => [...prevMessages, userMessage])

    setInput("")
    setLoading(true)
    setTyping(true)

    try {
      // Using local development server
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add CORS headers if needed
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ question: input }),
      })

      if (!response.ok) {
        const errorData = await response.text()
        console.error("Server error:", errorData)
        throw new Error(`Server error: ${errorData}`)
      }

      const data = await response.json()
      console.log("Server response:", data) // Debug log

      const botMessage = { text: data.response || "Sorry, I couldn't fetch a response.", sender: "bot" as const }
      setMessages((prevMessages) => [...prevMessages, botMessage])
    } catch (error) {
      console.error("Error fetching response:", error)
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `⚠️ Error: ${typeof error === "object" && error !== null && "message" in error ? (error as { message: string }).message : String(error)}`, sender: "bot" as const },
      ])
    }

    setLoading(false)
    setTyping(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      sendMessage()
    }
  }

  const quickQuestions = ["Tell me about Parshu's skills", "What projects has he built?", "How can I contact him?"]

  // Compact Floating Chatbot
  if (!isFullScreen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Compact Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="mb-4 w-80 h-96 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-orange-300/60 dark:border-slate-700/80 shadow-2xl rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Compact Header */}
              <div className="flex-shrink-0 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 p-3 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Cpu className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-sm">AI Assistant</h3>
                      <p className="text-xs opacity-90">Online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <Minimize2 className="w-3 h-3" />
                    </motion.button>
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Compact Messages Area */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gradient-to-b from-orange-50/30 to-transparent dark:from-slate-800/30 dark:to-transparent min-h-0">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start gap-2 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.sender === "bot"
                          ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                          : "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                      }`}
                    >
                      {msg.sender === "bot" ? <Bot className="w-3 h-3" /> : <User className="w-3 h-3" />}
                    </div>
                    <div
                      className={`max-w-[200px] p-2.5 rounded-xl text-xs leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                          : "bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white border border-orange-200/50 dark:border-slate-700/50 shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {typing && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-white/90 dark:bg-slate-800/90 p-2.5 rounded-xl border border-orange-200/50 dark:border-slate-700/50">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                        />
                        <motion.div
                          className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-1.5 h-1.5 bg-pink-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions - Compact */}
              {messages.length === 1 && (
                <div className="flex-shrink-0 px-3 py-2 border-t border-orange-200/30 dark:border-slate-700/30">
                  <div className="space-y-1">
                    {quickQuestions.slice(0, 2).map((question, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setInput(question)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-left text-xs px-2.5 py-1.5 bg-orange-100/60 dark:bg-slate-700/60 hover:bg-orange-200/80 dark:hover:bg-slate-600/80 rounded-lg transition-all duration-300 text-orange-700 dark:text-cyan-300 border border-orange-200/50 dark:border-slate-600/50"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Compact Input Area */}
              <div className="flex-shrink-0 p-3 border-t border-orange-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything..."
                    className="flex-1 h-8 px-2.5 py-1 bg-white/90 dark:bg-slate-800/90 border border-orange-300/50 dark:border-slate-600/50 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                  <motion.button
                    onClick={sendMessage}
                    disabled={loading || !input.trim()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-8 w-8 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 hover:from-orange-600 hover:to-pink-600 dark:hover:from-cyan-600 dark:hover:to-purple-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all"
                  >
                    {loading ? (
                      <motion.div
                        className="w-3 h-3 border border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    ) : (
                      <Send className="w-3 h-3" />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compact Floating Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
        >
          {/* Subtle Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-pink-400 dark:from-cyan-400 dark:to-purple-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />

          {/* Compact Button */}
          <div className="relative w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 rounded-full shadow-lg flex items-center justify-center text-white border border-white/20">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <MessageSquare className="w-5 h-5" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border border-white"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      </div>
    )
  }

  // Full Screen Chatbot (unchanged)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-4xl h-[80vh] bg-white/95 dark:bg-slate-900/95 rounded-2xl shadow-2xl overflow-hidden border border-orange-300/50 dark:border-slate-700/80 flex flex-col"
      >
        {/* Header */}
        <div className="flex-shrink-0 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-cyan-500 dark:via-purple-500 dark:to-pink-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <motion.div
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Cpu className="w-6 h-6" />
                </motion.div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">AI ASSISTANT 2050</h2>
                <p className="opacity-90">Ask me anything about Parshu Ram Sharma</p>
              </div>
            </div>
            {closeChat && (
              <button onClick={closeChat} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-transparent to-orange-50/30 dark:to-slate-800/30 min-h-0">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start gap-4 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  msg.sender === "bot"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                }`}
              >
                {msg.sender === "bot" ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
              </div>
              <div
                className={`max-w-2xl p-4 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                    : "bg-white/80 dark:bg-slate-800/90 text-slate-900 dark:text-white border border-orange-200/50 dark:border-slate-700/50"
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>
              </div>
            </motion.div>
          ))}

          {typing && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white/80 dark:bg-slate-800/90 p-4 rounded-2xl border border-orange-200/50 dark:border-slate-700/50">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="flex-shrink-0 px-6 pb-4">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Quick questions to get started:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInput(question)}
                  className="px-4 py-2 bg-orange-100/60 dark:bg-slate-700/60 hover:bg-orange-200/80 dark:hover:bg-slate-600/80 rounded-full text-sm transition-colors text-orange-700 dark:text-cyan-300 border border-orange-200/50 dark:border-slate-600/50"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="flex-shrink-0 p-6 border-t border-orange-200/50 dark:border-slate-700/50 bg-white/60 dark:bg-slate-900/60">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about Parshu's skills, projects, or experience..."
              className="flex-1 h-12 px-4 py-2 border border-orange-300/50 dark:border-slate-600/50 rounded-xl bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-cyan-400 focus:border-transparent"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="h-12 px-6 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 hover:from-orange-600 hover:to-pink-600 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
