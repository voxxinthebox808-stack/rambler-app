"use client"

import { motion } from "framer-motion"
import { Heart, MessageCircle, Share2 } from "lucide-react"

export default function PostCard({ post, onLike }) {
  return (
    <motion.div
      className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-glow transition-all"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-border bg-gradient-to-r from-background to-transparent">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary overflow-hidden ring-2 ring-accent/30"
            whileHover={{ scale: 1.1 }}
          >
            <img src={post.avatar || "/placeholder.svg"} alt={post.author} className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <p className="font-semibold text-foreground">{post.author}</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span>📍</span> {post.location}
            </p>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">{post.timestamp}</span>
      </div>

      {/* Image with parallax effect */}
      <div className="relative w-full aspect-square overflow-hidden bg-muted group">
        <motion.img
          src={post.image || "/placeholder.svg"}
          alt={post.caption}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Actions */}
      <div className="p-4 border-b border-border flex items-center gap-2 bg-gradient-to-r from-background to-transparent">
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onLike(post.id)}
          className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
        >
          <Heart className={`w-5 h-5 ${post.liked ? "fill-secondary text-secondary" : ""}`} />
          <span className="text-sm font-medium">{post.likes}</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{post.comments}</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors ml-auto"
        >
          <Share2 className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Caption */}
      <div className="p-4">
        <p className="text-foreground text-sm leading-relaxed">
          <span className="font-semibold text-primary">{post.author}</span> {post.caption}
        </p>
      </div>
    </motion.div>
  )
}
