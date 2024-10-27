
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Hero from '@/components/hero';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Projects />
      <Skills />
      
    </div>
  );
}
