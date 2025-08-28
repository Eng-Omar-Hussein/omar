'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"
import { useState } from "react"
import { TerminalText } from "./terminal-text"
export function  ContactSection() {
  const SenderInit = {Name:"", Email:"", Message:""}
  const [SenderData,setSenderData] = useState(SenderInit)
  const [Flag,setFlag] = useState({Accept:false,Reject:false})
  const apiUrl = "http://localhost:3001/api/messages"
  async function sendMessage(){ 
    // setFlag({...Flag,Accept:true})
    // setSenderData(SenderInit)
    // setTimeout(()=>setFlag({Accept:false,Reject:false}),2000);
    try {
        const response = await fetch(apiUrl,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(SenderData),
        });
        
        if (response.ok && response.status === 201) {
            const data = await response.json();
            setFlag({...Flag,Accept:true})
            setTimeout(()=>setFlag({Accept:false,Reject:false}),3000);
            setSenderData(SenderInit)
        
        } else {
            setFlag({...Flag,Reject:true})
            setTimeout(()=>setFlag({Accept:false,Reject:false}),5000);
            throw new Error('Failed to fetch')
        }
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono">
          <span className="text-accent glow-text">CONTACT</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="neon-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-accent font-mono">GET IN TOUCH</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a href="mailto:omarhussein.web@gmail.com" className="flex items-center gap-3" >
                <Mail className="w-5 h-5 text-accent" />
                <span className="font-sans">omarhussein@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-sans">Giza Cairo, EG</span>
              </div>
              <a href="http://www.linkedin.com/in/omar-hussein-329aa9229" className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-accent" />
                <span className="font-sans">linkedin.com/in/omar-hussein-329aa9229r</span>
              </a>
              <a href="https://github.com/Eng-Omar-Hussein" className="flex items-center gap-3">
                <Github className="w-5 h-5 text-accent" />
                <span className="font-sans">github.com/Eng-Omar-Hussein</span>
              </a>
            </CardContent>
          </Card>

          <Card className="neon-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-accent font-mono">SEND MESSAGE</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e)=>{e.preventDefault(); sendMessage()}}>
                <Input
                  placeholder="Your Name"
                  className="neon-border bg-input/50 border-accent/30 focus:border-accent"
                  value={SenderData.Name}
                  onChange={(e) => setSenderData({ ...SenderData, Name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="neon-border bg-input/50 border-accent/30 focus:border-accent"
                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  value={SenderData.Email}
                  onChange={(e)=>setSenderData({...SenderData,Email:e.target.value})}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  className="neon-border bg-input/50 border-accent/30 focus:border-accent resize-none"
                  value={SenderData.Message}
                  onChange={(e)=>setSenderData({...SenderData,Message:e.target.value})}
                  required
                />
                <Button type="submit" className="w-full neon-border bg-accent text-accent-foreground hover:bg-accent/90 font-mono">
                  SEND MESSAGE
                </Button>
                {Flag.Accept&&<div className="text-chart-2 text-center"><TerminalText text="Message Send Successfully" delay={40}/></div>}
                {Flag.Reject&&<div className="text-destructive text-center"><TerminalText text="Message Send Failed!" delay={40}/></div>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
