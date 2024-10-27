"use client"

import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon, MenuIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
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
    <header className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  {/* Full-width container for the header */}
  <div className="flex h-14 items-center w-full px-4">
    {/* Full-width div for the left content (logo and navigation links) */}
    <div className="flex flex-1 items-center space-x-4">
      <a className="mr-6 flex items-center space-x-2" href="/">
        <span className="font-bold sm:inline-block text-4xl">Dharmick Mehta</span>
      </a>
      <nav className="hidden md:flex items-center space-x-6 text-xl font-semibold">
        {/* <a className="transition-colors hover:text-foreground/80" href="#about">About</a> */}
        {/* <a className="transition-colors hover:text-foreground/80" href="#skills">Skills</a> */}
        {/* {<a className="transition-colors hover:text-foreground/80" href="#projects">Projects</a>} */}
        {/* <a className="transition-colors hover:text-foreground/80" href="#contact">Contact</a> */}
      </nav>
    </div>
    {/* Right content with theme toggle and mobile menu */}
    <div className="flex items-center space-x-2">
    {<a className="transition-colors hover:text-foreground/80" href="/projects">Projects</a>}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
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
            <a className="transition-colors hover:text-foreground/80" href="#skills">Skills</a>
            <a className="transition-colors hover:text-foreground/80" href="#projects">Projects</a>
            <a className="transition-colors hover:text-foreground/80" href="#contact">Contact</a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>

  )
}

export default Header
