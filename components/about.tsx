"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground">
        Im a Strategy Analyst with expertise in data modeling, forecasting, and visualization, dedicated to transforming data into strategic insights. My work has spanned retail and energy sectors, where I've enhanced sales prediction accuracy for large-scale loyalty programs at Mecca and optimized energy price strategies at Manawa Energy. Skilled in Python, SQL, and machine learning, I excel in building automation solutions that streamline reporting processes
        </p>
      </Card>
    </motion.div>
  )
}