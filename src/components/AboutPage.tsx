import { motion } from "motion/react";
import { Calendar, MapPin, Award, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Progress } from "./ui/progress";

export function AboutPage() {
  const skills = [
    { name: "Web Design", level: 95 },
    { name: "Figma", level: 90 },
    { name: "UI/UX Design", level: 88 },
    { name: "React Development", level: 85 },
    { name: "Brand Design", level: 82 },
    { name: "Animation", level: 78 },
  ];

  const experience = [
    {
      year: "2023 - Present",
      title: "Senior UI/UX Designer",
      company: "TechCorp Inc.",
      description: "Leading design initiatives for enterprise applications, improving user engagement by 40%.",
    },
    {
      year: "2021 - 2023",
      title: "Frontend Developer",
      company: "Creative Studio",
      description: "Developed responsive web applications using React and modern CSS frameworks.",
    },
    {
      year: "2019 - 2021",
      title: "Junior Designer",
      company: "StartupLab",
      description: "Designed user interfaces for mobile applications and marketing materials.",
    },
    {
      year: "2018 - 2019",
      title: "Freelance Designer",
      company: "Self-Employed",
      description: "Worked with various clients on branding and web design projects.",
    },
  ];

  const stats = [
    { icon: Award, label: "Years Experience", value: "6+" },
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Calendar, label: "Projects Completed", value: "200+" },
    { icon: MapPin, label: "Countries Served", value: "25+" },
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
            About Me
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference.
            Let me share my journey and expertise with you.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Side - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glass-card p-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1552233697-193249b08f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5NjExNjI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="MUZAMMIL KHAN working"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl text-center group hover:neon-glow-gold transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-[#FFD700] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-6">My Story</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Hi, I'm MUZAMMIL KHAN, a passionate Creative Designer and Developer
                  with over 6 years of experience in crafting digital experiences
                  that captivate and convert.
                </p>
                <p>
                  My journey began with a simple curiosity about how beautiful
                  interfaces could solve real-world problems. This curiosity
                  evolved into expertise across design and development, allowing
                  me to bridge the gap between creativity and functionality.
                </p>
                <p>
                  I specialize in creating premium, user-centered designs that
                  not only look stunning but also deliver exceptional user
                  experiences. From concept to deployment, I ensure every pixel
                  serves a purpose.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-6">My Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-[#FFD700]">{skill.level}%</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className="w-full bg-white/20 rounded-full h-2 overflow-hidden"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#FFD700] to-[#00167A] rounded-full"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-8 rounded-xl"
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            My Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FFD700] to-[#00167A] rounded-full"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="glass-card p-6 rounded-xl hover:neon-glow-gold transition-all duration-300">
                      <div className="text-[#FFD700] font-medium mb-2">
                        {exp.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-[#00167A] font-medium mb-3">
                        {exp.company}
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-[#FFD700] rounded-full border-4 border-black neon-glow-gold z-10"></div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}