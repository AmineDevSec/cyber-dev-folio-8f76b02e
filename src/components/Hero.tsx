import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-cyber.jpg";
const Hero = () => {
  const socialLinks = [{
    name: "LinkedIn",
    url: "https://linkedin.com/in/mohmmad-amine-hra-142986364",
    icon: "💼"
  }, {
    name: "GitHub",
    url: "https://github.com/AmineDevSec",
    icon: "🔗"
  }, {
    name: "Email",
    url: "mailto:mohmmadaminehra@gmail.com",
    icon: "📧"
  }];
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Cybersecurity background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      
      {/* Matrix effect overlay */}
      <div className="absolute inset-0 matrix-bg"></div>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-slide-in">
        <div className="space-y-6">
          {/* Greeting */}
          <div className="text-accent font-mono text-lg animate-cyber-pulse">
            {">"} Hello, World!
          </div>
          
          {/* Name with cyber effect */}
          <h1 className="cyber-title leading-tight">Mohamed Amine AHRA</h1>
          
          {/* Title with typing effect */}
          <div className="cyber-subtitle">
            <span className="glow-text">Programmer</span> | 
            <span className="text-accent ml-2">Cybersecurity Learner</span> | 
            <span className="text-primary ml-2">Full Stack Dev in Progress</span>
          </div>
          
          {/* Description */}
          <p className="cyber-text max-w-2xl mx-auto text-lg leading-relaxed">
            Welcome to my portfolio. I'm a cybersecurity studying at the Higher School of Technology and a self-learner in full-stack development. 
            Here, you'll find my latest projects and the skills I'm building with Kali Linux, modern web tools and penetration testing as I continue to expand my knowledge and experience.
          </p>
          
          {/* Social links */}
          <div className="flex justify-center gap-4 mt-8">
            {socialLinks.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="card-cyber-glow px-4 py-2 text-sm hover-lift" title={link.name}>
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </a>)}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button variant="cyber" size="lg" className="hover-glow" onClick={() => document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Explore Projects
            </Button>
            <Button variant="cyber-secondary" size="lg" className="hover-lift">
              Download CV
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-accent" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-20 bg-gradient-to-b from-primary to-transparent opacity-50"></div>
      <div className="absolute bottom-1/4 right-10 w-2 h-20 bg-gradient-to-t from-accent to-transparent opacity-50"></div>
    </section>;
};
export default Hero;