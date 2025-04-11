
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-hero-pattern flex items-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span>Hi, I'm </span>
              <span className="highlight-text">Souvik Biswas</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Researcher & Computer Scientist
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Exploring the intersection of computer vision, deep learning, and assistive technologies to create solutions that matter.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#research"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-research text-white rounded-md hover:bg-research-dark transition-colors"
              >
                View My Research
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-research text-research rounded-md hover:bg-research hover:text-white transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* Profile image placeholder - replace with actual image later */}
              <div className="w-full h-full bg-gradient-to-br from-research-light to-research flex items-center justify-center">
                <span className="text-white text-5xl font-bold">SB</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
