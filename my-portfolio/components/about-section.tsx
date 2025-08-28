import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Cloud, GitBranch, Shield, Zap, Database, GraduationCap } from "lucide-react"

const skills = [
  { icon: Server, name: "Infrastructure", level: "Expert" },
  { icon: Cloud, name: "Cloud Platforms", level: "Advanced" },
  { icon: GitBranch, name: "CI/CD", level: "Expert" },
  { icon: Shield, name: "Security", level: "Advanced" },
  { icon: Zap, name: "Automation", level: "Expert" },
  { icon: Database, name: "Databases", level: "Advanced" },
]

const technologies = [
  "Kubernetes",
  "Docker",
  "AWS",
  "Azure",
  "Terraform",
  "Ansible",
  "Jenkins",
  "GitLab CI",
  "Prometheus",
  "Grafana",
  "ELK Stack",
  "Redis",
]

const education = [
  {
    degree: "Bachelor of Engineering in Computer and Systems Engineer ",
    institution: "Helwan University",
    year: "2026",
    details: "Focus on Cybersecurity.",
  },
  {
    degree: "DevOps Engineer",
    institution: "Digital Egypt Pioneers Initiative (DEPI)",
    year: "2025",
    details: "Comprehensive DevOps training covering CI/CD, cloud platforms, and infrastructure as code",
  },
  {
    degree: "React Web developer",
    institution: "Digital Egypt Pioneers Initiative (DEPI)",
    year: "2024",
    details: "Comprehensive training on MERN Stack Technology. Build a real-time chat application and E-Commerce App",
  },
  {
    degree: "Red Hat System Administration I & II",
    institution: "National Telecommunication Institute (NTI)",
    year: "2024",
    details: "Container orchestration and cluster management",
  },
  {
    degree: "Cyber Security Summer Camp",
    institution: "Information Technology Institute (ITI)",
    year: "2024",
    details: "Intensive program on cybersecurity fundamentals, ethical hacking, and network security",
  },
  // {
  //   degree: "AWS Solutions Architect Professional",
  //   institution: "Amazon Web Services",
  //   year: "2023",
  //   details: "Advanced cloud architecture and enterprise solutions",
  // },
  // {
  //   degree: "Certified Kubernetes Administrator (CKA)",
  //   institution: "Cloud Native Computing Foundation",
  //   year: "2022",
  //   details: "Container orchestration and cluster management",
  // },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono">
          <span className="text-accent glow-text">ABOUT</span> ME
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="neon-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-accent font-mono">PROFILE</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Experienced DevOps Engineer with 3+ months of expertise in cloud infrastructure, automation, and scalable
                system design. Passionate about building robust, secure, and efficient deployment pipelines that enable
                rapid software delivery while maintaining system reliability.
              </p>
            </CardContent>
          </Card>

          <Card className="neon-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-accent font-mono">EXPERTISE</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <skill.icon className="w-4 h-4 text-accent" />
                    <div>
                      <div className="text-sm font-medium">{skill.name}</div>
                      <div className="text-xs text-muted-foreground">{skill.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="neon-border bg-card/50 backdrop-blur-sm mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6 text-accent font-mono flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              EDUCATION & CERTIFICATIONS
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent/30 pl-4 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <Badge variant="outline" className="neon-border bg-accent/10 text-accent w-fit">
                      {edu.year}
                    </Badge>
                  </div>
                  <p className="text-accent font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.details}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* <Card className="neon-border bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-accent font-mono">TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="neon-border bg-accent/10 text-accent">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  )
}
