import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = ["All", "Web", "Mobile", "UI/UX", "Branding"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web",
      description: "A modern e-commerce platform with advanced filtering and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1590965918603-0dce981d13b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtb2NrdXAlMjBkYXJrfGVufDF8fHx8MTc1OTYxMTYyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      features: ["Responsive Design", "Payment Integration", "Admin Dashboard", "Real-time Updates"],
      year: "2024"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile",
      description: "Secure and intuitive mobile banking application with biometric authentication.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NTExMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React Native", "Firebase", "Biometric SDK"],
      features: ["Biometric Login", "Transaction History", "Bill Payments", "Investment Tracking"],
      year: "2024"
    },
    {
      id: 3,
      title: "Creative Agency Website",
      category: "Web",
      description: "Portfolio website for a creative agency showcasing their work with stunning animations.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBzcGFjZXxlbnwxfHx8fDE3NTk1NjY5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
      features: ["3D Animations", "Parallax Scrolling", "Case Studies", "Contact Forms"],
      year: "2023"
    },
    {
      id: 4,
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity redesign for a tech startup including logo and guidelines.",
      image: "https://images.unsplash.com/photo-1552233697-193249b08f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5NjExNjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Adobe Illustrator", "Figma", "After Effects"],
      features: ["Logo Design", "Brand Guidelines", "Business Cards", "Marketing Materials"],
      year: "2023"
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      category: "UI/UX",
      description: "Data visualization dashboard for business analytics with real-time insights.",
      image: "https://images.unsplash.com/photo-1590965918603-0dce981d13b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtb2NrdXAlMjBkYXJrfGVufDF8fHx8MTc1OTYxMTYyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "D3.js", "Chart.js", "Node.js"],
      features: ["Real-time Data", "Interactive Charts", "Export Reports", "Multi-user Access"],
      year: "2023"
    },
    {
      id: 6,
      title: "Fitness Mobile App",
      category: "Mobile",
      description: "Comprehensive fitness tracking app with workout plans and progress monitoring.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NTExMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Flutter", "Firebase", "HealthKit"],
      features: ["Workout Tracking", "Progress Analytics", "Social Features", "Nutrition Logging"],
      year: "2022"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            Portfolio
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            A showcase of my recent work spanning web development, mobile applications, 
            UI/UX design, and brand identity projects.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter
                  ? "bg-[#FFD700] text-black neon-glow-gold"
                  : "glass-card text-white hover:text-[#FFD700] hover:bg-white/20"
              }`}
            >
              <Filter className="w-4 h-4" />
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="glass-card rounded-xl overflow-hidden hover:neon-glow-gold transition-all duration-500">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="text-white text-lg font-medium flex items-center gap-2"
                    >
                      <Eye className="w-5 h-5" />
                      View Details
                    </motion.div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#FFD700] text-black px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#FFD700] text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white/70 hover:text-[#FFD700] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white/70 hover:text-[#FFD700] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-[#FFD700]">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-8 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-[#FFD700] mb-4">{selectedProject.category} • {selectedProject.year}</p>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="bg-[#FFD700] text-black px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature: string) => (
                        <li key={feature} className="flex items-center text-white/80">
                          <div className="w-2 h-2 rounded-full bg-[#FFD700] mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#FFD700] text-black px-6 py-3 rounded-full font-medium hover:bg-[#FFD700]/90 transition-all duration-300 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-card text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.button>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}