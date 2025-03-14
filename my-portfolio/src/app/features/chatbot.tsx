"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Bot, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot({ isFullScreen, closeChat }: { isFullScreen?: boolean; closeChat?: () => void }) {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Detect if the footer is visible
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setFooterVisible(footerRect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close chatbot when clicking outside (Only for floating chatbot)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isFullScreen && isOpen) {
        const chatbotBox = document.getElementById("chatbot-box");
        if (chatbotBox && !chatbotBox.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isFullScreen]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" as const };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInput("");
    setLoading(true);
    setTyping(true);

    try {
      const response = await fetch("http://localhost:8000/chat", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      const botMessage = { text: data.response || "Sorry, I couldn't fetch a response.", sender: "bot" as const };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "⚠️ Sorry, something went wrong. Try again later.", sender: "bot" as const },
      ]);
    }

    setLoading(false);
    setTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className={
        isFullScreen
          ? "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          : "fixed right-6 z-50 flex flex-col items-end transition-all duration-300"
      }
      style={{ bottom: footerVisible ? "120px" : "24px" }}
    >
      {!isFullScreen && (
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 focus:outline-none"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Bot size={24} />}
        </motion.button>
      )}

      <AnimatePresence>
        {(isOpen || isFullScreen) && (
          <motion.div
            id="chatbot-box"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={
              isFullScreen
                ? "w-11/12 md:w-3/5 lg:w-2/5 h-5/6 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg rounded-lg p-4 relative"
                : "w-80 h-96 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg rounded-lg p-4 mt-2"
            }
          >
            {isFullScreen && closeChat && (
              <button
                onClick={closeChat}
                className="absolute top-3 right-3 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-400 transition"
              >Close
                <X size={20} />
              </button>
            )}

            <div className="h-80 overflow-y-auto border-b p-4 space-y-2">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.sender === "bot" && <Bot className="text-gray-500" size={24} />}
                  <Card className={`max-w-xs p-3 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
                    <CardContent className="p-2 text-sm">{msg.text}</CardContent>
                  </Card>
                  {msg.sender === "user" && <User className="text-blue-500" size={24} />}
                </motion.div>
              ))}
              {typing && (
                <motion.div
                  className="text-gray-500 text-sm flex gap-1 items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                >
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center gap-2 p-2">
              <Input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ask me anything..." />
              <Button onClick={sendMessage} disabled={loading}>
                {loading ? "..." : <Send size={16} />}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
