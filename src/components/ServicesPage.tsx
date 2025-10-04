import { motion } from "motion/react";
import { Palette, Monitor, Smartphone, Zap, Globe, Camera } from "lucide-react";

export function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning user interfaces that enhance user experience and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-[#FFD700] to-[#FFA500]"
    },
    {
      icon: Monitor,
      title: "Web Development",
      description: "Building responsive, fast, and SEO-optimized websites using modern technologies and best practices.",
      features: ["React Development", "Responsive Design", "Performance Optimization", "CMS Integration"],
      color: "from-[#00167A] to-[#0040FF]"
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Designing mobile applications that provide seamless user experiences across iOS and Android platforms.",
      features: ["Native Design", "Cross-platform", "User Testing", "App Store Optimization"],
      color: "from-[#FFD700] to-[#00167A]"
    },
    {
      icon: Globe,
      title: "Brand Identity",
      description: "Developing comprehensive brand identities that communicate your values and resonate with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"],
      color: "from-[#00167A] to-[#FFD700]"
    },
    {
      icon: Zap,
      title: "Animation & Motion",
      description: "Creating engaging animations and micro-interactions that bring your digital products to life.",
      features: ["Motion Graphics", "Micro-interactions", "Lottie Animations", "Video Editing"],
      color: "from-[#FFA500] to-[#FFD700]"
    },
    {
      icon: Camera,
      title: "Creative Consulting",
      description: "Providing strategic creative guidance to help businesses achieve their digital transformation goals.",
      features: ["Strategy Sessions", "Creative Direction", "Design Audits", "Team Training"],
      color: "from-[#0040FF] to-[#00167A]"
    }
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
            Services
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and 
            create exceptional user experiences that drive results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass-card p-8 rounded-xl h-full hover:neon-glow-gold transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:neon-glow transition-all duration-300`}
                  >
                    <service.icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FFD700] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.1 }}
                        className="flex items-center text-white/70 group-hover:text-white transition-colors duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#FFD700] mr-3 group-hover:neon-glow-gold transition-all duration-300" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 w-full py-3 px-6 rounded-full border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300 font-medium"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass-card p-12 rounded-xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. I'm here to help you 
              create something extraordinary that makes a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FFD700" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFD700] text-black px-8 py-4 rounded-full font-medium hover:bg-[#FFD700]/90 transition-all duration-300"
              >
                Start a Project
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