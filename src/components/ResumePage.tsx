import { motion } from "motion/react";
import { Download, Calendar, MapPin, Award, Briefcase, GraduationCap } from "lucide-react";

export function ResumePage() {
  const education = [
    {
      degree: "Master of Design",
      field: "User Experience Design",
      school: "Stanford University",
      year: "2016 - 2018",
      location: "California, USA",
      description: "Specialized in human-computer interaction and design thinking methodologies."
    },
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      school: "MIT",
      year: "2012 - 2016",
      location: "Massachusetts, USA",
      description: "Focus on software engineering with emphasis on front-end development."
    },
    {
      degree: "Design Certification",
      field: "Visual Communication",
      school: "Parsons School of Design",
      year: "2015",
      location: "New York, USA",
      description: "Intensive program covering typography, branding, and visual identity design."
    }
  ];

  const experience = [
    {
      position: "Senior UI/UX Designer",
      company: "TechCorp Inc.",
      year: "2023 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      achievements: [
        "Led design initiatives for 3 major product launches",
        "Improved user engagement by 40% through redesign",
        "Mentored junior designers and established design systems",
        "Collaborated with cross-functional teams of 20+ members"
      ]
    },
    {
      position: "Frontend Developer",
      company: "Creative Studio",
      year: "2021 - 2023",
      location: "Los Angeles, CA",
      type: "Full-time",
      achievements: [
        "Developed 25+ responsive web applications",
        "Reduced page load times by 60% through optimization",
        "Implemented modern React architecture patterns",
        "Built reusable component library used across teams"
      ]
    },
    {
      position: "Junior Designer",
      company: "StartupLab",
      year: "2019 - 2021",
      location: "Austin, TX",
      type: "Full-time",
      achievements: [
        "Designed UI for 10+ mobile applications",
        "Created brand identities for 15+ startups",
        "Conducted user research and usability testing",
        "Maintained 95% client satisfaction rating"
      ]
    },
    {
      position: "Freelance Designer",
      company: "Self-Employed",
      year: "2018 - 2019",
      location: "Remote",
      type: "Freelance",
      achievements: [
        "Completed 50+ design projects",
        "Built client base of 30+ businesses",
        "Generated $150k+ in annual revenue",
        "Specialized in e-commerce and SaaS design"
      ]
    }
  ];

  const skills = [
    { category: "Design Tools", items: ["Figma", "Adobe Creative Suite", "Sketch", "Principle", "Framer"] },
    { category: "Development", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"] },
    { category: "Design Skills", items: ["UI/UX Design", "Prototyping", "User Research", "Design Systems", "Branding"] },
    { category: "Other", items: ["Project Management", "Team Leadership", "Client Relations", "Agile/Scrum"] }
  ];

  const certifications = [
    { name: "Google UX Design Professional Certificate", issuer: "Google", year: "2023" },
    { name: "Certified Scrum Master", issuer: "Scrum Alliance", year: "2022" },
    { name: "Adobe Certified Expert", issuer: "Adobe", year: "2021" },
    { name: "React Developer Certification", issuer: "Meta", year: "2021" }
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
            Resume
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional journey, skills, and achievements 
            in design and development.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FFD700" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFD700] text-black px-8 py-4 rounded-full font-medium hover:bg-[#FFD700]/90 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.button>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Education Section */}
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Education</h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="relative pl-8 border-l-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-colors duration-300"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-[#FFD700] rounded-full neon-glow-gold"></div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-[#FFD700] font-medium">{edu.field}</p>
                      <p className="text-white/80">{edu.school}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                      </div>
                      
                      <p className="text-white/70 leading-relaxed pt-2">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold gradient-text mb-8">Skills</h2>
              
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <h3 className="text-lg font-bold text-[#FFD700] mb-3">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="bg-white/10 text-white px-3 py-2 rounded-full text-sm hover:bg-[#FFD700]/20 hover:text-[#FFD700] transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00167A] to-[#0040FF] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Certifications</h2>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-between p-4 glass-card rounded-lg hover:neon-glow-gold transition-all duration-300"
                  >
                    <div>
                      <h3 className="font-bold text-white">{cert.name}</h3>
                      <p className="text-white/70">{cert.issuer}</p>
                    </div>
                    <span className="text-[#FFD700] font-medium">{cert.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00167A] to-[#0040FF] rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Work Experience</h2>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFD700] to-[#00167A]"></div>

                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      className="relative pl-16"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-4 top-2 w-4 h-4 bg-[#FFD700] rounded-full border-4 border-black neon-glow-gold"></div>

                      <div className="glass-card p-6 rounded-xl hover:neon-glow-gold transition-all duration-300">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                            <p className="text-[#FFD700] font-medium">{exp.company}</p>
                          </div>
                          <span className="bg-[#00167A] text-white px-3 py-1 rounded-full text-sm">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.year}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>

                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.6 + index * 0.2 + achIndex * 0.1 }}
                              className="flex items-start text-white/80"
                            >
                              <div className="w-2 h-2 rounded-full bg-[#FFD700] mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-12 rounded-xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Let's Work Together
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Ready to bring your next project to life? I'm always excited to 
              discuss new opportunities and creative challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FFD700" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFD700] text-black px-8 py-4 rounded-full font-medium hover:bg-[#FFD700]/90 transition-all duration-300"
              >
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}