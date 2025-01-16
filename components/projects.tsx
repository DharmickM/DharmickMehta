"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Forecasting Model",
    description:
      "Advanced time series forecasting model built with Python, used for strategic decision making.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "SARIMAX", "AWS SageMaker", "Linear Algebra"],
    demo: "#",
    github: "#",
    link: "/time-series-forecasting/SARIMAX",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with Next.js and Framer Motion.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    demo: "#",
    github: "#",
    link: "https://github.com/DharmickM/DharmickMehta",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-10 bg-muted/50 rounded-sm space-y-8 scroll-mt-20"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <Link href={project.link}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CardTitle className="cursor-pointer text-foreground hover:text-name-acent transition-colors duration-200">
                          {project.title}
                        </CardTitle>
                      </motion.div>
                    </Link>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
