"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Cloud, Database, Shield, GitBranch, MonitorSpeaker, Code, Terminal, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "HCCDA",],
    color: "text-cyan-400",
  },
  {
    title: "Infrastructure",
    icon: Server,
    skills: ["Kubernetes", "Docker", "Terraform", "Ansible"],
    color: "text-green-400",
  },
  {
    title: "CI/CD & DevOps",
    icon: GitBranch,
    skills: ["Jenkins", "GitHub Actions", "GitLab CI"],
    color: "text-purple-400",
  },
  {
    title: "Monitoring & Logging",
    icon: MonitorSpeaker,
    skills: ["Prometheus", "Grafana"],
    color: "text-orange-400",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "SQLite"],
    color: "text-blue-400",
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["Vault", "SAST/DAST", "Container Security", "IAM", "SSL/TLS"],
    color: "text-red-400",
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Bash", "JavaScript", "YAML", "C++", "Java", "Nodejs", "React"],
    color: "text-yellow-400",
  },
  {
    title: "Tools & Automation",
    icon: Terminal,
    skills: ["Linux", "Git", "Nginx", "Apache", "Scripting"],
    color: "text-pink-400",
  },
]

export function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section id="skills" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            A comprehensive toolkit for building, deploying, and maintaining scalable infrastructure
          </p>
        </div> */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Technical Arsenal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono">
            <span className="text-accent glow-text">Skills & Technologies</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.title}
                className="group relative overflow-hidden border-accent/20 bg-card/50 backdrop-blur-sm hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-accent/10 ${category.color} transition-colors duration-300`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`
                          font-mono text-xs bg-accent/5 text-muted-foreground border-accent/20 
                          hover:bg-accent/10 hover:text-accent transition-all duration-300
                          ${hoveredCategory === index ? "animate-pulse" : ""}
                        `}
                        style={{
                          animationDelay: `${skillIndex * 100}ms`,
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Stats */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent font-mono">50+</div>
            <div className="text-sm text-muted-foreground font-mono">Technologies</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent font-mono">5+</div>
            <div className="text-sm text-muted-foreground font-mono">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent font-mono">100+</div>
            <div className="text-sm text-muted-foreground font-mono">Deployments</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent font-mono">24/7</div>
            <div className="text-sm text-muted-foreground font-mono">Uptime Focus</div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
