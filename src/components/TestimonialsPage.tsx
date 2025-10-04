import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStartup Inc.",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTU4NzQzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Alex transformed our entire digital presence. The UI/UX design was exceptional, and the attention to detail was remarkable. Our user engagement increased by 200% after the redesign.",
      rating: 5,
      project: "E-commerce Platform Redesign"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1552233697-193249b08f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5NjExNjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Working with Alex was a game-changer for our mobile app. The design was intuitive, modern, and perfectly aligned with our brand vision. Highly recommend for any design project.",
      rating: 5,
      project: "Mobile App Design"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency Pro",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBzcGFjZXxlbnwxfHx8fDE3NTk1NjY5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Alex delivered beyond our expectations. The brand identity design was creative, professional, and captured our essence perfectly. The process was smooth and collaborative throughout.",
      rating: 5,
      project: "Brand Identity Design"
    },
    {
      id: 4,
      name: "David Park",
      role: "CTO",
      company: "DataFlow Systems",
      image: "https://images.unsplash.com/photo-1590965918603-0dce981d13b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtb2NrdXAlMjBkYXJrfGVufDF8fHx8MTc1OTYxMTYyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "The dashboard analytics design Alex created for us was outstanding. Clean, functional, and beautiful. It made complex data visualization simple and engaging for our users.",
      rating: 5,
      project: "Dashboard Analytics Design"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Founder",
      company: "HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NTExMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Alex's expertise in both design and development made our project seamless. The final product exceeded all expectations and our users love the new interface.",
      rating: 5,
      project: "Healthcare App Development"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Head of Design",
      company: "Future Corp",
      image: "https://images.unsplash.com/photo-1552233697-193249b08f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5NjExNjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Professional, creative, and reliable. Alex delivered high-quality work on time and within budget. The design system created for us is still being used across all our products.",
      rating: 5,
      project: "Design System Development"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-[#FFD700] fill-current" : "text-white/30"
        }`}
      />
    ));
  };

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
            Testimonials
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            What my clients say about working with me. Real feedback from real projects 
            that showcase the impact of great design and development.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-12"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="glass-card p-12 rounded-xl relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-[#FFD700]/20">
              <Quote className="w-16 h-16" />
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center relative z-10"
            >
              {/* Client Image */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#FFD700] neon-glow-gold">
                <ImageWithFallback
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#FFD700]">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-white/80">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </p>
                <p className="text-[#00167A] font-medium">
                  Project: {testimonials[currentIndex].project}
                </p>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card p-3 rounded-full hover:neon-glow-gold transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card p-3 rounded-full hover:neon-glow-gold transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#FFD700] neon-glow-gold"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-card p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                index === currentIndex ? "neon-glow-gold" : "hover:neon-glow-gold"
              }`}
              onClick={() => goToSlide(index)}
            >
              {/* Mini Profile */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFD700]">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {renderStars(testimonial.rating)}
              </div>

              {/* Text Preview */}
              <p className="text-white/80 text-sm leading-relaxed mb-3">
                "{testimonial.text.slice(0, 120)}..."
              </p>

              {/* Project */}
              <p className="text-[#FFD700] text-xs font-medium">
                {testimonial.project}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card p-12 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold gradient-text mb-8">
            Client Satisfaction
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#FFD700]">150+</div>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#FFD700]">98%</div>
              <p className="text-white/80">Satisfaction Rate</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#FFD700]">200+</div>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#FFD700]">25+</div>
              <p className="text-white/80">Countries Served</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FFD700" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-[#FFD700] text-black px-8 py-4 rounded-full font-medium hover:bg-[#FFD700]/90 transition-all duration-300"
          >
            Join Happy Clients
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}