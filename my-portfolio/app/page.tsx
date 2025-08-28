import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-accent/30 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © 2025 Omar Hussein. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  )
}