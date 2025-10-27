"use client"

import { motion } from "framer-motion"
import RamblerLogo from "./rambler-logo"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const travelQuotes = [
    "Jobs fill your pocket, adventures fill your soul.",
    "Travel is the only thing you buy that makes you richer.",
    "The world is a book, and those who do not travel read only one page.",
    "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
    "We travel not to escape life, but for life not to escape us.",
    "Adventure is worthwhile in itself.",
  ]

  const randomQuote = travelQuotes[Math.floor(Math.random() * travelQuotes.length)]

  return (
    <footer className="bg-gradient-to-b from-card to-background border-t border-border mt-20">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={itemVariants}
          className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20"
        >
          <p className="text-center text-lg italic text-foreground font-medium">"{randomQuote}"</p>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <div className="flex items-center justify-center gap-2 font-bold text-xl text-primary mb-2">
            <RamblerLogo className="w-6 h-6" />
            <span>Rambler</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Share your journeys. Discover the world — one story at a time.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
