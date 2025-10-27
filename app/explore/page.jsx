"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Sparkles } from "lucide-react"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const trendingStories = [
    {
      id: 1,
      title: "Bali Paradise",
      image: "/tropical-beach-sunset.jpg",
      likes: 5234,
      posts: 1203,
    },
    {
      id: 2,
      title: "Venice Romance",
      image: "/venice-canal-gondola.jpg",
      likes: 4891,
      posts: 987,
    },
    {
      id: 3,
      title: "Tokyo Vibes",
      image: "/tokyo-neon-night-city.jpg",
      likes: 6123,
      posts: 1456,
    },
    {
      id: 4,
      title: "Patagonia Adventure",
      image: "/mountain-landscape-patagonia.jpg",
      likes: 3456,
      posts: 678,
    },
  ]

  const destinations = [
    { name: "Paris, France", posts: 45230, trending: true },
    { name: "Tokyo, Japan", posts: 38901, trending: true },
    { name: "Bali, Indonesia", posts: 52341, trending: false },
    { name: "New York, USA", posts: 61234, trending: true },
    { name: "Barcelona, Spain", posts: 34567, trending: false },
    { name: "Dubai, UAE", posts: 28934, trending: false },
  ]

  const randomDestination = {
    name: "Santorini, Greece",
    image: "/tropical-beach-sunset.jpg",
    description: "Stunning white-washed buildings perched on volcanic cliffs overlooking the Aegean Sea.",
    posts: 23456,
    visitors: 12340,
  }

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

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search destinations, travelers, or stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-base bg-card border-border"
            />
          </div>
        </motion.div>

        {/* Random Destination of the Day */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-secondary" />
            <h2 className="text-2xl font-bold text-foreground">Destination of the Day</h2>
          </div>

          <motion.div
            className="rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow cursor-pointer"
            whileHover={{ y: -4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={randomDestination.image || "/placeholder.svg"}
                  alt={randomDestination.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{randomDestination.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{randomDestination.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <p className="text-2xl font-bold text-primary">{randomDestination.posts}</p>
                    <p className="text-xs text-muted-foreground">Stories</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <p className="text-2xl font-bold text-secondary">{randomDestination.visitors}</p>
                    <p className="text-xs text-muted-foreground">Visitors</p>
                  </div>
                </div>

                <Button className="bg-primary hover:bg-primary/90 w-full">Explore Destination</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trending Stories */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Trending Stories</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {trendingStories.map((story) => (
              <motion.div
                key={story.id}
                variants={itemVariants}
                className="rounded-lg overflow-hidden cursor-pointer group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative aspect-square">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-bold text-lg mb-2">{story.title}</h3>
                    <div className="flex gap-4 text-white text-sm">
                      <span>{story.likes} likes</span>
                      <span>{story.posts} posts</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Popular Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Popular Destinations</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer group"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                  {dest.trending && (
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-secondary/20 text-secondary">
                      Trending
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{dest.posts.toLocaleString()} posts</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
