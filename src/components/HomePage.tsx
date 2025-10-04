import { motion } from "motion/react";
import { ChevronDown, Download, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import pic from "./pic.jpg";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div className="min-h-screen relative overflow-hidden particle-bg">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16 flex items-center justify-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">MUZAMMIL</span>
              <br />
              <span className="text-white">KHAN</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl lg:text-3xl text-[#FFD700] mb-4">
                Creative Designer & Developer
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Crafting exceptional digital experiences with a passion for
                innovation and a keen eye for detail. Transforming ideas into
                stunning realities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FFD700" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPageChange("portfolio")}
                className="bg-[#FFD700] text-black px-8 py-4 rounded-full font-medium hover:bg-[#FFD700]/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View My Work
                <ChevronDown className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPageChange("contact")}
                className="glass-card text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden neon-glow-gold border-4 border-[#FFD700]">
                <ImageWithFallback
                  src={pic}
                  alt="MUZAMMIL KHAN - FULL STACK DEVELOPER &"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">💼</span>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">🎨</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 text-center"
        >
          <p className="text-sm mb-2">Scroll to explore</p>
          <ChevronDown className="w-6 h-6 mx-auto" />
        </motion.div>
      </motion.div>
    </div>
  );
}