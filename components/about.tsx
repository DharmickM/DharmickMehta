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
          Data Scientist and Machine Learning Engineer with 4+ years of experience in developing and implementing data-driven solutions. 
          Expertise in Python, TensorFlow, and SQL with a strong foundation in statistical analysis and machine learning. 
          Passionate about solving complex problems and creating impactful solutions through data science and AI.
        </p>
      </Card>
    </motion.div>
  )
}