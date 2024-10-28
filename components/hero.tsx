"use client"

import { motion } from "framer-motion"
import { ArrowDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-pattern" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Hello, I'm Dharmick
              </h1>
              <p className="mx-auto lg:mx-0 max-w-[700px] text-muted-foreground md:text-xl">
                A <span className="font-semibold text-foreground">Strategy & Data Analyst</span> passionate about transforming complex data into actionable insights that drive business growth and innovation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/0 animate-pulse" />
            <Image
              src="/dharmhighdefcirc.png"
              alt="Dharmick Mehta"
              fill
              className="object-cover rounded-full"
              priority
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button variant="ghost" size="icon" asChild>
          <a href="#about" className="animate-bounce">
            <ArrowDownIcon className="h-6 w-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  )
}