const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="cyber-title text-3xl md:text-4xl mb-4">
            Projects & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
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