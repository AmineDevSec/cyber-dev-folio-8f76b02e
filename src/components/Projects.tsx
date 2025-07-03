const Projects = () => {
  const projectCategories = [
    {
      title: "Web Development",
      description: "Frontend and responsive design projects",
      icon: "🌐",
      color: "primary",
      projects: [
        { name: "E-commerce Platform", tech: "HTML, CSS, Bootstrap", status: "In Progress" },
        { name: "Portfolio Website", tech: "React, Tailwind CSS", status: "Completed" },
        { name: "Landing Page Design", tech: "HTML, CSS, JavaScript", status: "Completed" },
        { name: "Responsive Dashboard", tech: "React, CSS Grid", status: "Planning" },
      ]
    },
    {
      title: "Programming",
      description: "Backend development and database projects",
      icon: "💻",
      color: "accent",
      projects: [
        { name: "User Management System", tech: "PHP, MySQL", status: "Completed" },
        { name: "Data Analysis Tool", tech: "Python, Pandas", status: "In Progress" },
        { name: "API Development", tech: "Laravel, SQL", status: "Planning" },
        { name: "Automation Scripts", tech: "Python, JavaScript", status: "Ongoing" },
      ]
    },
    {
      title: "Kali Linux & Security",
      description: "Cybersecurity tools and ethical hacking",
      icon: "🔒",
      color: "secondary",
      projects: [
        { name: "Network Scanning", tech: "Nmap, Wireshark", status: "Learning" },
        { name: "WiFi Security Testing", tech: "Aircrack-ng, Kali", status: "Practicing" },
        { name: "Vulnerability Assessment", tech: "OpenVAS, Metasploit", status: "Learning" },
        { name: "Security Documentation", tech: "Research, Reports", status: "Ongoing" },
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "text-green-400";
      case "In Progress": return "text-blue-400";
      case "Planning": return "text-yellow-400";
      case "Learning": return "text-purple-400";
      case "Practicing": return "text-orange-400";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="cyber-title text-3xl md:text-4xl mb-4">
            Projects & Expertise
          </h2>
          <p className="cyber-text max-w-2xl mx-auto">
            Showcasing my journey across web development, programming, and cybersecurity
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        {/* Project categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projectCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              {/* Category header */}
              <div className="card-cyber-glow p-6 text-center hover-lift">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {category.title}
                </h3>
                <p className="cyber-text text-sm">{category.description}</p>
              </div>

              {/* Projects list */}
              <div className="space-y-4">
                {category.projects.map((project, projectIndex) => (
                  <div 
                    key={projectIndex} 
                    className="card-cyber p-4 hover-glow group cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full bg-muted ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.tech}</p>
                    
                    {/* Progress bar for visual effect */}
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: project.status === "Completed" ? "100%" : 
                                 project.status === "In Progress" ? "70%" : 
                                 project.status === "Learning" ? "40%" : 
                                 project.status === "Practicing" ? "60%" : "20%" 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="cyber-text mb-6">
            Want to see more details or collaborate on a project?
          </p>
          <button className="btn-cyber px-8 py-3 text-lg">
            View GitHub Repository
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;