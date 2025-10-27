"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Send, Search } from "lucide-react"

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [messages, setMessages] = useState([
    { id: 1, sender: "You", text: "Hey! How was your trip to Bali?", timestamp: "10:30 AM", isOwn: true },
    {
      id: 2,
      sender: "Sarah",
      text: "Amazing! The beaches were incredible. You should definitely go!",
      timestamp: "10:32 AM",
      isOwn: false,
    },
    {
      id: 3,
      sender: "You",
      text: "I'm planning to go next month. Any recommendations?",
      timestamp: "10:33 AM",
      isOwn: true,
    },
    {
      id: 4,
      sender: "Sarah",
      text: "Definitely visit Ubud for the culture and Seminyak for the nightlife!",
      timestamp: "10:35 AM",
      isOwn: false,
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const chats = [
    { id: 1, name: "Sarah Chen", avatar: "/woman-avatar.png", lastMessage: "Definitely visit Ubud...", unread: 0 },
    { id: 2, name: "Marco Rossi", avatar: "/man-avatar.png", lastMessage: "Let's meet up in Venice!", unread: 2 },
    { id: 3, name: "Yuki Tanaka", avatar: "/asian-woman-avatar.jpg", lastMessage: "Tokyo is amazing!", unread: 0 },
    { id: 4, name: "Alex Thompson", avatar: "/man-avatar-2.png", lastMessage: "Patagonia hiking was epic", unread: 1 },
    { id: 5, name: "Emma Wilson", avatar: "/woman-avatar-2.png", lastMessage: "Marrakech market tour?", unread: 0 },
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          text: newMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isOwn: true,
        },
      ])
      setNewMessage("")
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8 h-[calc(100vh-100px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
          {/* Chat List */}
          <motion.div
            className="md:col-span-1 rounded-lg bg-card border border-border flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Search */}
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search chats..." className="pl-10 bg-background border-border" />
              </div>
            </div>

            {/* Chat List */}
            <motion.div
              className="flex-1 overflow-y-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {chats.map((chat) => (
                <motion.button
                  key={chat.id}
                  variants={itemVariants}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`w-full p-4 border-b border-border text-left transition-colors hover:bg-muted/50 ${
                    selectedChat === chat.id ? "bg-primary/10 border-l-4 border-l-primary" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary overflow-hidden flex-shrink-0">
                      <img
                        src={chat.avatar || "/placeholder.svg"}
                        alt={chat.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm">{chat.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{chat.lastMessage}</p>
                    </div>
                    {chat.unread > 0 && (
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary text-white text-xs flex items-center justify-center">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Chat Window */}
          <motion.div
            className="md:col-span-2 rounded-lg bg-card border border-border flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary overflow-hidden">
                <img
                  src={chats.find((c) => c.id === selectedChat)?.avatar || "/placeholder.svg"}
                  alt="Chat"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">{chats.find((c) => c.id === selectedChat)?.name}</p>
                <p className="text-xs text-muted-foreground">Active now</p>
              </div>
            </div>

            {/* Messages */}
            <motion.div
              className="flex-1 overflow-y-auto p-4 space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  variants={itemVariants}
                  className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.isOwn
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-muted text-foreground rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${message.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Message Input */}
            <div className="p-4 border-t border-border flex gap-2">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="bg-background border-border"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                className="p-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
