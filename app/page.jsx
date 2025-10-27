"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Heart, Users, Globe } from "lucide-react"
import RamblerLogo from "@/components/rambler-logo"

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const features = [
    {
      icon: MapPin,
      title: "Share Stories",
      description: "Document your travels with photos, captions, and locations",
    },
    {
      icon: Globe,
      title: "Discover Places",
      description: "Explore trending destinations and hidden gems worldwide",
    },
    {
      icon: Users,
      title: "Connect Nomads",
      description: "Meet fellow travelers and join the global community",
    },
    {
      icon: Heart,
      title: "Save Favorites",
      description: "Build your bucket list and track visited destinations",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
                <RamblerLogo className="w-12 h-12" />
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Rambler
                </span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  className="text-5xl sm:text-6xl font-bold text-foreground leading-tight"
                  variants={itemVariants}
                >
                  Share your journeys.
                </motion.h1>
                <motion.p className="text-2xl text-primary font-semibold" variants={itemVariants}>
                  Discover the world — one story at a time.
                </motion.p>
              </div>

              <motion.p className="text-lg text-muted-foreground leading-relaxed max-w-md" variants={itemVariants}>
                Connect with travelers worldwide, share your adventures, and discover incredible destinations. Rambler
                is the social platform built for nomads and explorers.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <Link href="/feed">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    Explore Stories
                  </Button>
                </Link>
                <Link href="/feed">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    Get Started
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div className="grid grid-cols-3 gap-4 pt-8" variants={itemVariants}>
                {[
                  { number: "50K+", label: "Travelers" },
                  { number: "180+", label: "Countries" },
                  { number: "100K+", label: "Stories" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-bold text-primary">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl" />
              <motion.div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <RamblerLogo className="w-32 h-32" />
                  <p className="text-xl font-semibold text-foreground">Explore the World</p>
                </div>
              </motion.div>

              {/* Animated Map Pins */}
              {[
                { top: "10%", left: "20%", delay: 0 },
                { top: "60%", left: "70%", delay: 0.2 },
                { top: "40%", left: "80%", delay: 0.4 },
                { top: "70%", left: "30%", delay: 0.6 },
              ].map((pin, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-secondary rounded-full"
                  style={{ top: pin.top, left: pin.left }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: pin.delay }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Rambler?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to share, discover, and connect with the global travel community.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground">Ready to Start Your Journey?</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of travelers sharing their stories and discovering new destinations.
          </p>
          <Link href="/feed">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Exploring Now
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
