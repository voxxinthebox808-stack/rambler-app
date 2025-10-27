"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Trash2, Check, Calendar } from "lucide-react"

export default function BucketListPage() {
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      name: "Iceland - Northern Lights",
      status: "planned",
      priority: "high",
      date: "2025-03-15",
      image: "/tropical-beach-sunset.jpg",
    },
    {
      id: 2,
      name: "New Zealand - Milford Sound",
      status: "planned",
      priority: "high",
      date: "2025-06-20",
      image: "/mountain-landscape-patagonia.jpg",
    },
    {
      id: 3,
      name: "Peru - Machu Picchu",
      status: "visited",
      priority: "high",
      date: "2024-09-10",
      image: "/tropical-beach-sunset.jpg",
    },
    {
      id: 4,
      name: "Egypt - Pyramids of Giza",
      status: "planned",
      priority: "medium",
      date: "2025-12-01",
      image: "/moroccan-market-medina.jpg",
    },
    {
      id: 5,
      name: "Norway - Fjords",
      status: "visited",
      priority: "high",
      date: "2024-07-15",
      image: "/mountain-landscape-patagonia.jpg",
    },
    {
      id: 6,
      name: "Thailand - Bangkok & Islands",
      status: "planned",
      priority: "medium",
      date: "2025-04-10",
      image: "/tropical-beach-sunset.jpg",
    },
  ])

  const toggleStatus = (id) => {
    setDestinations(
      destinations.map((dest) =>
        dest.id === id ? { ...dest, status: dest.status === "visited" ? "planned" : "visited" } : dest,
      ),
    )
  }

  const deleteDestination = (id) => {
    setDestinations(destinations.filter((dest) => dest.id !== id))
  }

  const plannedCount = destinations.filter((d) => d.status === "planned").length
  const visitedCount = destinations.filter((d) => d.status === "visited").length

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
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Bucket List</h1>
              <p className="text-muted-foreground mt-1">Track your dream destinations</p>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 rounded-full w-12 h-12 p-0">
              <Plus className="w-6 h-6" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              className="p-4 rounded-lg bg-card border border-border"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-2xl font-bold text-primary">{destinations.length}</p>
              <p className="text-sm text-muted-foreground">Total Destinations</p>
            </motion.div>
            <motion.div
              className="p-4 rounded-lg bg-card border border-border"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-2xl font-bold text-secondary">{plannedCount}</p>
              <p className="text-sm text-muted-foreground">Planned</p>
            </motion.div>
            <motion.div
              className="p-4 rounded-lg bg-card border border-border"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-2xl font-bold text-accent">{visitedCount}</p>
              <p className="text-sm text-muted-foreground">Visited</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
              <TabsTrigger value="all">All ({destinations.length})</TabsTrigger>
              <TabsTrigger value="planned">Planned ({plannedCount})</TabsTrigger>
              <TabsTrigger value="visited">Visited ({visitedCount})</TabsTrigger>
            </TabsList>

            {/* All Tab */}
            <TabsContent value="all" className="mt-6">
              <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
                {destinations.map((dest) => (
                  <DestinationCard
                    key={dest.id}
                    destination={dest}
                    onToggle={toggleStatus}
                    onDelete={deleteDestination}
                    variants={itemVariants}
                  />
                ))}
              </motion.div>
            </TabsContent>

            {/* Planned Tab */}
            <TabsContent value="planned" className="mt-6">
              <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
                {destinations
                  .filter((d) => d.status === "planned")
                  .map((dest) => (
                    <DestinationCard
                      key={dest.id}
                      destination={dest}
                      onToggle={toggleStatus}
                      onDelete={deleteDestination}
                      variants={itemVariants}
                    />
                  ))}
              </motion.div>
            </TabsContent>

            {/* Visited Tab */}
            <TabsContent value="visited" className="mt-6">
              <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
                {destinations
                  .filter((d) => d.status === "visited")
                  .map((dest) => (
                    <DestinationCard
                      key={dest.id}
                      destination={dest}
                      onToggle={toggleStatus}
                      onDelete={deleteDestination}
                      variants={itemVariants}
                    />
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Countdown Widget */}
        <motion.div
          className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-foreground mb-4">Next Trip Countdown</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Days", value: "45" },
              { label: "Hours", value: "12" },
              { label: "Minutes", value: "34" },
              { label: "Seconds", value: "56" },
            ].map((item, i) => (
              <div key={i} className="text-center p-3 rounded-lg bg-background border border-border">
                <p className="text-2xl font-bold text-primary">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function DestinationCard({ destination, onToggle, onDelete, variants }) {
  return (
    <motion.div
      variants={variants}
      className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all flex items-center gap-4"
      whileHover={{ y: -2 }}
    >
      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{destination.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Calendar className="w-3 h-3 text-muted-foreground" />
          <p className="text-xs text-muted-foreground">{new Date(destination.date).toLocaleDateString()}</p>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              destination.priority === "high" ? "bg-secondary/20 text-secondary" : "bg-muted text-muted-foreground"
            }`}
          >
            {destination.priority}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onToggle(destination.id)}
          className={`p-2 rounded-lg transition-colors ${
            destination.status === "visited"
              ? "bg-accent/20 text-accent"
              : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary"
          }`}
        >
          <Check className="w-5 h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onDelete(destination.id)}
          className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-destructive/20 hover:text-destructive transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  )
}
