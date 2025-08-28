'use client'
import { TerminalText } from "./terminal-text"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 font-mono text-accent text-sm">
            <TerminalText text="$ whoami" delay={100} />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono">
            <span className="text-accent glow-text">DEVOPS</span>
            <br />
            <span className="text-foreground">ENGINEER</span>
          </h1>

          <div className="text-lg md:text-xl text-muted-foreground mb-8 font-sans max-w-2xl mx-auto">
            <TerminalText
              text="Architecting scalable infrastructure, automating deployments, and bridging the gap between development and operations in the digital frontier."
              delay={30}
            />
          </div>
          

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={() => window.open("/#projects", "_self")} size="lg" className="neon-border bg-accent text-accent-foreground hover:bg-accent/90 font-mono" >
              VIEW PROJECTS
            </Button>
            <Button onClick={() => window.open("https://drive.google.com/file/d/1p99ftRxLuNpOAskmUdrmBIZE3nhYVPEi/view?usp=sharing", "_blank")} variant="outline" size="lg" className="neon-border hover:bg-accent/20 font-mono bg-transparent" >
              DOWNLOAD CV
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  )
}
