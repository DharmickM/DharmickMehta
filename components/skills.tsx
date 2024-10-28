"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  BrainCircuit,
  Code2,
  Database,
  Layout,
  LineChart,
  Workflow,
} from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Development",
    icon: Code2,
    items: ["Git", "REST APIs", "GraphQL", "Testing", "CI/CD"]
  },
  {
    category: "Data Science",
    icon: BrainCircuit,
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"]
  },
  {
    category: "Visualization",
    icon: LineChart,
    items: ["D3.js", "Recharts", "Plotly", "Matplotlib", "Seaborn"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Skills & Expertise</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <skill.icon className="h-6 w-6" />
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}