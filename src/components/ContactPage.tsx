import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muzammilcodezyra@gmail.com",
      link: "muzammilcodezyra@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "92 3152909979",
      link: "tel:92-3152909979",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan Karachi",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com", color: "hover:text-white" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com", color: "hover:text-blue-400" },
    { icon: Twitter, name: "Twitter", url: "https://twitter.com", color: "hover:text-blue-300" },
    { icon: Instagram, name: "Instagram", url: "https://instagram.com", color: "hover:text-pink-400" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 particle-bg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Contact Me
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Ready to start your next project? Let's work together to create something 
            extraordinary. I'm always excited to discuss new opportunities.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold gradient-text mb-8">
                Let's Work Together!
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label htmlFor="name" className="block text-white mb-2 font-medium">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-card border-white/20 text-white placeholder-white/50 focus:border-[#FFD700] focus:ring-[#FFD700]"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label htmlFor="email" className="block text-white mb-2 font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-card border-white/20 text-white placeholder-white/50 focus:border-[#FFD700] focus:ring-[#FFD700]"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="subject" className="block text-white mb-2 font-medium">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass-card border-white/20 text-white placeholder-white/50 focus:border-[#FFD700] focus:ring-[#FFD700]"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-white mb-2 font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-card border-white/20 text-white placeholder-white/50 focus:border-[#FFD700] focus:ring-[#FFD700] resize-none"
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-medium py-4 rounded-full transition-all duration-300 hover:neon-glow-gold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center group-hover:neon-glow-gold transition-all duration-300">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white font-medium hover:text-[#FFD700] transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-6">
                Follow Me
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`glass-card p-4 rounded-xl text-center group hover:neon-glow transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-8 h-8 mx-auto mb-2 text-white group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-6">
                Location
              </h3>
              
              <div className="relative aspect-video bg-gradient-to-br from-[#00167A] to-[#000] rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[#FFD700] mx-auto mb-4 neon-glow-gold" />
                    <p className="text-white font-medium">San Francisco, CA</p>
                    <p className="text-white/70 text-sm">Available for remote work worldwide</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#FFD700] rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#FFD700] rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#FFD700] rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#FFD700] rounded-br-lg"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-12 rounded-xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              I'm currently available for new projects and collaborations. 
              Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FFD700" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFD700] text-black px-8 py-4 rounded-full font-medium hover:bg-[#FFD700]/90 transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                View My Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}