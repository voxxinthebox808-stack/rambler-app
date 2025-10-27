"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import PostCard from "@/components/post-card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function FeedPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "/woman-avatar.png",
      location: "Bali, Indonesia",
      image: "/tropical-beach-sunset.jpg",
      caption: "Golden hour at Seminyak Beach. Nothing beats watching the sunset over the ocean.",
      likes: 2341,
      comments: 156,
      timestamp: "2 hours ago",
      liked: false,
    },
    {
      id: 2,
      author: "Marco Rossi",
      avatar: "/man-avatar.png",
      location: "Venice, Italy",
      image: "/venice-canal-gondola.jpg",
      caption: "Getting lost in the canals of Venice is the best way to explore. Every corner tells a story.",
      likes: 1892,
      comments: 203,
      timestamp: "4 hours ago",
      liked: false,
    },
    {
      id: 3,
      author: "Yuki Tanaka",
      avatar: "/asian-woman-avatar.jpg",
      location: "Tokyo, Japan",
      image: "/tokyo-neon-night-city.jpg",
      caption: "The energy of Tokyo at night is unmatched. Shibuya Crossing never gets old.",
      likes: 3156,
      comments: 289,
      timestamp: "6 hours ago",
      liked: false,
    },
    {
      id: 4,
      author: "Alex Thompson",
      avatar: "/man-avatar-2.png",
      location: "Patagonia, Argentina",
      image: "/mountain-landscape-patagonia.jpg",
      caption: "Hiking to Laguna de los Tres Picos. The views are absolutely breathtaking.",
      likes: 2567,
      comments: 178,
      timestamp: "8 hours ago",
      liked: false,
    },
    {
      id: 5,
      author: "Emma Wilson",
      avatar: "/woman-avatar-2.png",
      location: "Marrakech, Morocco",
      image: "/moroccan-market-medina.jpg",
      caption: "The colors and chaos of the medina are absolutely mesmerizing. A sensory overload in the best way.",
      likes: 1734,
      comments: 142,
      timestamp: "10 hours ago",
      liked: false,
    },
  ])

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <motion.div
          className="mb-8 flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Your Feed
            </h1>
            <p className="text-muted-foreground mt-2">Discover stories from travelers around the world</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <Button className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 rounded-full w-14 h-14 p-0 shadow-glow">
              <Plus className="w-6 h-6" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Posts */}
        <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
          {posts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <PostCard post={post} onLike={handleLike} />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="px-8 bg-transparent hover:bg-muted border-2 border-primary/30 hover:border-primary"
            >
              Load More Stories
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
