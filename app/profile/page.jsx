"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MapPin, Heart, Plane, Settings } from "lucide-react"

export default function ProfilePage() {
  const user = {
    name: "Sarah Chen",
    bio: "Wanderlust-driven explorer | Photography enthusiast | Coffee lover",
    avatar: "/woman-avatar.png",
    followers: 12400,
    following: 3200,
    posts: 287,
    countries: 45,
    trips: 23,
  }

  const stories = [
    { id: 1, image: "/tropical-beach-sunset.jpg", title: "Bali Sunset" },
    { id: 2, image: "/venice-canal-gondola.jpg", title: "Venice Canals" },
    { id: 3, image: "/tokyo-neon-night-city.jpg", title: "Tokyo Nights" },
    { id: 4, image: "/mountain-landscape-patagonia.jpg", title: "Patagonia" },
    { id: 5, image: "/moroccan-market-medina.jpg", title: "Marrakech" },
    { id: 6, image: "/tropical-beach-sunset.jpg", title: "Maldives" },
  ]

  const highlights = [
    { title: "Beach Vibes", count: 12 },
    { title: "Mountain Peaks", count: 8 },
    { title: "City Lights", count: 15 },
    { title: "Cultural Sites", count: 10 },
  ]

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
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary overflow-hidden flex-shrink-0">
              <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">{user.name}</h1>
              <p className="text-muted-foreground mb-4">{user.bio}</p>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{user.posts}</p>
                  <p className="text-xs text-muted-foreground">Posts</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{user.followers}</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{user.following}</p>
                  <p className="text-xs text-muted-foreground">Following</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">{user.countries}</p>
                  <p className="text-xs text-muted-foreground">Countries</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="bg-primary hover:bg-primary/90">Follow</Button>
                <Button variant="outline" className="bg-transparent">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Travel Stats */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-card rounded-xl border border-border">
            <div className="text-center">
              <Plane className="w-6 h-6 text-secondary mx-auto mb-2" />
              <p className="text-sm font-semibold text-foreground">{user.trips} Trips</p>
              <p className="text-xs text-muted-foreground">Total journeys</p>
            </div>
            <div className="text-center">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold text-foreground">{user.countries} Countries</p>
              <p className="text-xs text-muted-foreground">Visited</p>
            </div>
            <div className="text-center">
              <Heart className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-sm font-semibold text-foreground">156 Favorites</p>
              <p className="text-xs text-muted-foreground">Saved places</p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="stories" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
              <TabsTrigger value="stories">Stories</TabsTrigger>
              <TabsTrigger value="highlights">Highlights</TabsTrigger>
              <TabsTrigger value="bucket-list">Bucket List</TabsTrigger>
            </TabsList>

            {/* Stories Tab */}
            <TabsContent value="stories" className="mt-6">
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {stories.map((story) => (
                  <motion.div
                    key={story.id}
                    variants={itemVariants}
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:brightness-75 transition-all"
                    />
                    <div className="absolute inset-0 flex items-end p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-semibold">{story.title}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Highlights Tab */}
            <TabsContent value="highlights" className="mt-6">
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="p-4 rounded-lg bg-card border border-border text-center hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <p className="text-2xl font-bold text-primary mb-1">{highlight.count}</p>
                    <p className="text-sm text-muted-foreground">{highlight.title}</p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Bucket List Tab */}
            <TabsContent value="bucket-list" className="mt-6">
              <motion.div className="space-y-3" variants={containerVariants} initial="hidden" animate="visible">
                {[
                  { place: "Iceland - Northern Lights", status: "Planned" },
                  { place: "New Zealand - Milford Sound", status: "Planned" },
                  { place: "Peru - Machu Picchu", status: "Visited" },
                  { place: "Egypt - Pyramids of Giza", status: "Planned" },
                  { place: "Norway - Fjords", status: "Visited" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="p-4 rounded-lg bg-card border border-border flex items-center justify-between hover:border-primary/50 transition-colors"
                  >
                    <p className="text-foreground font-medium">{item.place}</p>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.status === "Visited" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      {item.status}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
