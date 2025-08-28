'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Kubernetes Cluster Automation",
    description:
      "Automated Kubernetes cluster provisioning and management using Terraform and Helm charts. Implemented auto-scaling, monitoring, and security policies.",
    technologies: ["Kubernetes", "Terraform", "Helm", "Prometheus"],
    github: "#",
    demo: "#",
  },
  {
    title: "CI/CD Pipeline Optimization",
    description:
      "Redesigned CI/CD pipeline reducing deployment time by 70%. Implemented blue-green deployments and automated rollback mechanisms.",
    technologies: ["Jenkins", "Docker", "AWS", "GitLab"],
    github: "#",
    demo: "#",
  },
  {
    title: "Infrastructure Monitoring Stack",
    description:
      "Built comprehensive monitoring solution with custom dashboards, alerting, and log aggregation for microservices architecture.",
    technologies: ["Grafana", "Prometheus", "ELK Stack", "Jaeger"],
    github: "#",
    demo: "#",
  },
  {
    title: "Multi-Cloud Migration",
    description:
      "Led migration of legacy infrastructure to multi-cloud architecture, improving reliability and reducing costs by 40%.",
    technologies: ["AWS", "Azure", "Terraform", "Ansible"],
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono">
          <span className="text-accent glow-text">PROJECTS</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-accent font-mono">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-sans leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button onClick={()=> window.open(project.github,"_self")} size="sm" variant="outline" className="neon-border hover:bg-accent/20 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button onClick={()=> window.open(project.demo,"_self")} size="sm" variant="outline" className="neon-border hover:bg-accent/20 bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
