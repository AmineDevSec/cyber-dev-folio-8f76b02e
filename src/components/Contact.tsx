import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "mohamed.amine.ahra@example.com",
      link: "mailto:mohamed.amine.ahra@example.com"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+212 6XX XXX XXX",
      link: "tel:+212600000000"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="cyber-title text-3xl md:text-4xl mb-4">
            Get In Touch
          </h2>
          <p className="cyber-text max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? Let's connect and build something amazing together.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="card-cyber-glow p-8 hover-lift">
            <h3 className="text-xl font-bold text-primary mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" variant="cyber" size="lg" className="w-full hover-glow">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="card-cyber p-8">
              <h3 className="text-xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location info */}
            <div className="card-cyber p-8">
              <h4 className="text-lg font-semibold text-accent mb-4">
                Location & Availability
              </h4>
              <div className="space-y-3 text-sm cyber-text">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Based in Morocco 🇲🇦
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Available for remote work
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Open to freelance projects
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="card-cyber p-6 text-center">
              <div className="text-2xl text-primary font-bold">24h</div>
              <div className="text-sm text-muted-foreground">Average response time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;