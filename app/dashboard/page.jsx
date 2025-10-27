"use client"

import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, Users, MapPin, Heart } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    { icon: TrendingUp, label: "Total Posts", value: "287", color: "text-primary", bgColor: "bg-primary/10" },
    { icon: Users, label: "Followers", value: "12.4K", color: "text-secondary", bgColor: "bg-secondary/10" },
    { icon: MapPin, label: "Countries", value: "45", color: "text-accent", bgColor: "bg-accent/10" },
    { icon: Heart, label: "Total Likes", value: "45.2K", color: "text-primary", bgColor: "bg-primary/10" },
  ]

  const postsData = [
    { month: "Jan", posts: 12, likes: 240 },
    { month: "Feb", posts: 19, likes: 221 },
    { month: "Mar", posts: 15, likes: 229 },
    { month: "Apr", posts: 22, likes: 200 },
    { month: "May", posts: 28, likes: 229 },
    { month: "Jun", posts: 25, likes: 240 },
  ]

  const engagementData = [
    { day: "Mon", engagement: 400 },
    { day: "Tue", engagement: 300 },
    { day: "Wed", engagement: 200 },
    { day: "Thu", engagement: 278 },
    { day: "Fri", engagement: 189 },
    { day: "Sat", engagement: 239 },
    { day: "Sun", engagement: 349 },
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Your travel and engagement analytics</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                whileHover={{ y: -2 }}
              >
                <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Charts */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Posts & Likes Chart */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg bg-card border border-border"
            whileHover={{ y: -2 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Posts & Likes Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={postsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="posts" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="likes" fill="var(--color-secondary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Engagement Chart */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg bg-card border border-border"
            whileHover={{ y: -2 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Weekly Engagement</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="engagement"
                  stroke="var(--color-primary)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-primary)", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>

        {/* Top Performing Posts */}
        <motion.div
          className="mt-6 p-6 rounded-lg bg-card border border-border"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">Top Performing Posts</h2>
          <div className="space-y-3">
            {[
              { title: "Bali Sunset", likes: 3456, comments: 234 },
              { title: "Venice Canals", likes: 2891, comments: 189 },
              { title: "Tokyo Nights", likes: 4123, comments: 312 },
            ].map((post, i) => (
              <motion.div
                key={i}
                className="p-3 rounded-lg bg-background border border-border flex items-center justify-between"
                whileHover={{ x: 4 }}
              >
                <p className="font-medium text-foreground">{post.title}</p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
