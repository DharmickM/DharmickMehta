"use client"

import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon, MenuIcon, Github, Linkedin, Mail, FileText } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

const Header = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center w-full px-4">
        <div className="flex flex-1 items-center space-x-4">
        
          <nav className="hidden md:flex items-center space-x-6 text-xl font-semibold">
            
            <a className="transition-colors hover:text-foreground/80" href="/#about">About</a>
            <a className="transition-colors hover:text-foreground/80" href="/#projects">Projects</a>
            <a className="transition-colors hover:text-foreground/80" href="/#skills">Skills</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">

            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/DharmickM" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/DharmM/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:dharmick95@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </Button>
          <Button variant="default" size="sm" className="hidden md:flex items-center gap-2" asChild>
            <a href="/resume" target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <a className="transition-colors hover:text-foreground/80" href="#about">About</a>
                <a className="transition-colors hover:text-foreground/80" href="#projects">Projects</a>
                <a className="transition-colors hover:text-foreground/80" href="#skills">Skills</a>
                <Button variant="default" size="sm" className="w-fit mt-2 items-center gap-2" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>
                </Button>
                <div className="flex space-x-2 pt-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com/DharmickM" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/DharmM/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="mailto:dharmick95@gmail.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header