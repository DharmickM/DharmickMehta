"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="space-y-6 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="p-4 backdrop-blur-sm bg-card/50 space-y-4">
          <div className="space-y-2">
            <h2 className="text-heading-1 font-bold">About Me</h2>
            <p className="text-muted-foreground leading-relaxed text-paragraph">
              Hi there! I’m Dharmick Mehta, and I’m all about creating smart,
              sustainable solutions that make life easier. My journey started in
              New Zealand, where I co-founded a 3D printing business focused on
              turning recycled materials into eco-friendly homewares. Running
              (and eventually exiting) that business in 2023 sparked my passion
              for blending technology with sustainability—and it taught me a lot
              about what it takes to build something meaningful.
            </p>
            <p className="text-muted-foreground leading-relaxed text-paragraph">
              Since then, I've worked across renewable energy and retail, using
              data to drive decisions and improve experiences. Right now, I'm
              developing a personal finance web app to help people feel more in
              control of their money—a project that brings together my love for
              tech and my drive to make a positive impact.
            </p>
            <p className="text-muted-foreground leading-relaxed text-paragraph">
              I’m always on the lookout for opportunities to collaborate on
              projects that bring together innovation and sustainability. If
              that sounds like your world, let’s connect!
            </p>
            <p className="text-muted-foreground leading-relaxed text-paragraph">
              <span className="font-semibold text-foreground">
                Currently based in Melbourne, Australia
              </span>
            </p>
            <div className="pt-4 flex flex-wrap gap-2">
              <Badge variant="secondary">Data Science</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">Strategy</Badge>
              <Badge variant="secondary">Analytics</Badge>
            </div>
            <div className="pt-4 flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/DharmickM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/DharmM/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:dharmick95@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
