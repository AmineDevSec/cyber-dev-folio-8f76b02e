import certificateImg from "@/assets/certificate-cyphx.png";
import certificateCorex from "@/assets/certificate-corex.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="cyber-title text-3xl md:text-4xl mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        {/* About content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Text content */}
          <div className="space-y-6">
            <div className="card-cyber-glow p-8 hover-lift">
              <h3 className="text-xl font-bold text-primary mb-4">
                Security Informatique & Network
              </h3>
              <p className="cyber-text mb-4">
                First-year student in Computer and Network Security in ESTBM Morocco, currently learning cybersecurity fundamentals, operating systems, and network security using Linux. I also have basic knowledge of HTML, CSS, JavaScript, and React and aim to develop practical skills to solve real-world problems.
              </p>
              <p className="cyber-text">
                My goal is to use my knowledge in web technologies to help and support young entrepreneurs by creating useful digital solutions.
              </p>
            </div>
            
            <div className="card-cyber p-4">
              <h4 className="text-lg font-semibold text-accent mb-3">
                🏆 CyphX Arena JR — Top 2 Winners
              </h4>
              <img src={certificateImg} alt="CyphX Arena JR Certificate of Achievement" className="w-full rounded-lg border border-border/30 mb-3" />
              <p className="cyber-text text-sm">
                Certificate of Achievement from <span className="text-primary font-semibold">Club CyphX ESTBM</span> for outstanding performance, teamwork, and mastery across eight technical challenges.
              </p>
            </div>

            <div className="card-cyber p-4">
              <h4 className="text-lg font-semibold text-accent mb-3">
                🏆 COREX Origins CTF — 2nd Place
              </h4>
              <img src={certificateCorex} alt="COREX Origins CTF Certificate" className="w-full rounded-lg border border-border/30 mb-3" />
              <p className="cyber-text text-sm">
                Certificate of Participation from <span className="text-primary font-semibold">COREX Club</span> for achieving 2nd place in the 1st Edition of COREX Origins CTF, hosted by the Highest School of Technology - Beni Mellal, February 7-8, 2026.
              </p>
            </div>
          </div>
          
          {/* Stats/Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="card-cyber text-center p-6 hover-glow">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="card-cyber text-center p-6 hover-glow">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
            </div>
            
            <div className="card-cyber-glow p-6">
              <h4 className="text-lg font-semibold text-primary mb-4">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Cybersecurity
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  Frontend Development
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Backend Systems
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  Database Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;