const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="text-primary">Mohamed Amine</span>
              <span className="text-accent">.</span>
            </div>
            <p className="cyber-text text-sm max-w-xs">
              Full Stack Developer and Cybersecurity enthusiast building secure, 
              scalable web solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:mohmmadaminehra@gmail.com" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </a>
              <a 
                href="https://linkedin.com/in/mohamed-amine-hra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/AmineDevSec" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>
            © {currentYear} Mohamed Amine Ahra. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;