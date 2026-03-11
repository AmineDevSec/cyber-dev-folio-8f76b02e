const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 90, icon: "🌐" },
        { name: "JavaScript", level: 85, icon: "⚡" },
        { name: "React", level: 45, icon: "⚛️" },
        { name: "Bootstrap", level: 75, icon: "🎨" },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "PHP", level: 80, icon: "🔧" },
        { name: "Python", level: 70, icon: "🐍" },
        { name: "SQL", level: 85, icon: "🗄️" },
        { name: "C", level: 65, icon: "🏗️" },
      ]
    },
    {
      title: "Cybersecurity Tools",
      skills: [
        { name: "Kali Linux", level: 60, icon: "🐧" },
        { name: "Web-Exploitation", level: 55, icon: "🔍" },
        { name: "Aircrack-ng", level: 50, icon: "📡" },
        { name: "Network", level: 45, icon: "🔬" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="cyber-title text-3xl md:text-4xl mb-4">
            Skills & Technologies
          </h2>
          <p className="cyber-text max-w-2xl mx-auto">
            My technical proficiency across different domains
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        {/* Skills grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-cyber-glow p-8 hover-lift">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    {/* Skill name and level */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Skill bar */}
                    <div className="skill-bar">
                      <div 
                        className="skill-progress transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="card-cyber p-6">
            <h4 className="text-lg font-semibold text-accent mb-4">
              Currently Learning
            </h4>
            <ul className="space-y-2 text-sm cyber-text">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Advanced React Patterns
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Penetration Testing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Cloud Security (AWS)
              </li>
            </ul>
          </div>
          
          <div className="card-cyber p-6">
            <h4 className="text-lg font-semibold text-primary mb-4">
              Certifications Goal
            </h4>
            <ul className="space-y-2 text-sm cyber-text">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                CompTIA Security+
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Certified Ethical Hacker (CEH)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                CTF-Certificate
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;