"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, MapPin, Calendar, Smile } from "lucide-react"

export default function AIToolsPage() {
  const [activeTab, setActiveTab] = useState(null)

  const tools = [
    {
      id: "recommendation",
      title: "AI Place Recommendation",
      description: "Get personalized destination recommendations based on your preferences",
      icon: MapPin,
      color: "from-primary/20 to-primary/5",
      borderColor: "border-primary/30",
    },
    {
      id: "itinerary",
      title: "Smart Itinerary Builder",
      description: "Create optimized travel itineraries with AI-powered suggestions",
      icon: Calendar,
      color: "from-secondary/20 to-secondary/5",
      borderColor: "border-secondary/30",
    },
    {
      id: "mood",
      title: "Mood-to-Place Match",
      description: "Find the perfect destination based on your current mood and vibe",
      icon: Smile,
      color: "from-accent/20 to-accent/5",
      borderColor: "border-accent/30",
    },
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
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-secondary" />
            <h1 className="text-3xl font-bold text-foreground">AI Travel Tools</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Harness the power of AI to plan your perfect journey. Get personalized recommendations, smart itineraries,
            and mood-based destination matches.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.id}
                variants={itemVariants}
                onClick={() => setActiveTab(activeTab === tool.id ? null : tool.id)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${tool.borderColor} ${
                  activeTab === tool.id ? `bg-gradient-to-br ${tool.color}` : "bg-card hover:bg-card/80"
                }`}
                whileHover={{ y: -4 }}
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tool Details */}
        {activeTab && (
          <motion.div
            className="rounded-xl border border-border bg-card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "recommendation" && <RecommendationTool />}
            {activeTab === "itinerary" && <ItineraryTool />}
            {activeTab === "mood" && <MoodTool />}
          </motion.div>
        )}

        {/* Features Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Personalized",
              description: "AI learns your preferences and travel style",
            },
            {
              title: "Real-time",
              description: "Get instant recommendations and suggestions",
            },
            {
              title: "Smart",
              description: "Optimized itineraries based on logistics",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-lg bg-card border border-border text-center"
              whileHover={{ y: -2 }}
            >
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function RecommendationTool() {
  const [result, setResult] = useState(null)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">AI Place Recommendation</h2>
        <p className="text-muted-foreground">
          Tell us about your travel preferences and we'll recommend the perfect destination
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">What's your travel style?</label>
          <Input placeholder="e.g., Adventure, Relaxation, Culture, Food..." className="bg-background border-border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Budget range</label>
          <Input placeholder="e.g., $1000-$3000" className="bg-background border-border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Duration</label>
          <Input placeholder="e.g., 2 weeks" className="bg-background border-border" />
        </div>

        <Button
          onClick={() =>
            setResult(
              "Based on your preferences, we recommend: Bali, Indonesia - Perfect for adventure and relaxation with great value!",
            )
          }
          className="w-full bg-primary hover:bg-primary/90"
        >
          Get Recommendation
        </Button>

        {result && (
          <motion.div
            className="p-4 rounded-lg bg-primary/10 border border-primary/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-foreground">{result}</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function ItineraryTool() {
  const [result, setResult] = useState(null)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Smart Itinerary Builder</h2>
        <p className="text-muted-foreground">Create an optimized travel itinerary with AI-powered suggestions</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Destination</label>
          <Input placeholder="e.g., Tokyo, Japan" className="bg-background border-border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Number of days</label>
          <Input placeholder="e.g., 7" className="bg-background border-border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Interests</label>
          <Input placeholder="e.g., Food, History, Nature" className="bg-background border-border" />
        </div>

        <Button
          onClick={() =>
            setResult(
              "Day 1: Arrive & explore Shibuya | Day 2: Senso-ji Temple & Asakusa | Day 3: Mount Fuji day trip | Day 4: Teamlab Borderless | Day 5: Tsukiji Market & Ginza | Day 6: Meiji Shrine & Harajuku | Day 7: Departure",
            )
          }
          className="w-full bg-secondary hover:bg-secondary/90"
        >
          Build Itinerary
        </Button>

        {result && (
          <motion.div
            className="p-4 rounded-lg bg-secondary/10 border border-secondary/30 space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-foreground text-sm">{result}</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function MoodTool() {
  const [result, setResult] = useState(null)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Mood-to-Place Match</h2>
        <p className="text-muted-foreground">Find the perfect destination based on your current mood and vibe</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">How are you feeling?</label>
          <div className="grid grid-cols-2 gap-2">
            {["Adventurous", "Relaxed", "Inspired", "Social", "Peaceful", "Energetic"].map((mood) => (
              <Button key={mood} variant="outline" className="bg-background border-border">
                {mood}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Climate preference</label>
          <Input placeholder="e.g., Warm, Cold, Tropical" className="bg-background border-border" />
        </div>

        <Button
          onClick={() =>
            setResult(
              "Based on your adventurous mood, we suggest: New Zealand - Perfect for hiking, outdoor activities, and stunning landscapes!",
            )
          }
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          Find My Match
        </Button>

        {result && (
          <motion.div
            className="p-4 rounded-lg bg-accent/10 border border-accent/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-foreground">{result}</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
