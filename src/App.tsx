import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ServicesPage } from "./components/ServicesPage";
import { PortfolioPage } from "./components/PortfolioPage";
import { ResumePage } from "./components/ResumePage";
import { TestimonialsPage } from "./components/TestimonialsPage";
import { ContactPage } from "./components/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onPageChange={handlePageChange} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "portfolio":
        return <PortfolioPage />;
      case "resume":
        return <ResumePage />;
      case "testimonials":
        return <TestimonialsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  // Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center particle-bg">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Loading Animation */}
          <div className="relative mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border-4 border-[#FFD700]/30 border-t-[#FFD700] rounded-full mx-auto"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-16 h-16 border-4 border-[#00167A]/30 border-b-[#00167A] rounded-full m-auto"
            />
          </div>

          {/* Loading Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl font-bold gradient-text mb-4"
          >
            MUZAMMIL KHAN
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white/80 text-lg"
          >
            Loading Portfolio...
          </motion.p>

          {/* Loading Progress */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-[#FFD700] to-[#00167A] rounded-full mt-8 max-w-xs mx-auto"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Navigation */}
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />

      {/* Page Content with Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#FFD700]/10 to-transparent rounded-full blur-xl"
        />
        
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-[#00167A]/10 to-transparent rounded-full blur-xl"
        />

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-xl"
        />
      </div>

      {/* Page Transition Overlay */}
      <motion.div
        key={`${currentPage}-overlay`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 bg-gradient-to-r from-[#FFD700] to-[#00167A] z-40 origin-left"
        style={{ transformOrigin: "left center" }}
      />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 glass-card rounded-full flex items-center justify-center hover:neon-glow-gold transition-all duration-300 z-30"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button>
    </div>
  );
}