import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-background ">
      {/* Hero Section */}
      <Hero />

      <div className="container mx-auto px-4 lg:px-8 bg-grid-white/[0.02] bg-grid-pattern">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - About */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-[4.5rem]">
              <About />
            </div>
          </div>

          {/* Right Column - Experience, Projects & Skills */}
          <div className="lg:col-span-8 space-y-16 margin-0">
            <Experience />
            <Projects />
            <Skills />
          </div>
        </div>
      </div>
    </main>
  );
}