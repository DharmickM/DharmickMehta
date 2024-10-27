import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Column - Fixed Sidebar */}
      <div className="w-full lg:w-1/3 lg:fixed lg:left-0 lg:top-14 lg:h-[calc(100vh-3.5rem)] p-8 bg-background border-r overflow-y-auto">
        <div className="space-y-8">
          {/* Profile Image Container */}
          <div className="w-full h-auto object-cover">
            <img
              src="/dharmhighdef.webp"
              alt="David"
              className="w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </div>
          {/* About Section */}
          <About />
        </div>
      </div>

      {/* Right Column - Scrollable Content */}
      <div className="w-full lg:w-2/3 lg:ml-[33.333333%]">
        <Experience />
      </div>
    </div>
  );
}