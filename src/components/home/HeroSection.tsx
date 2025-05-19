import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-primary-900/90 to-primary-700/90">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/931166/pexels-photo-931166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fresh flowers"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="max-w-2xl">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hare Kṛṣṇa
          </motion.h1>
          <motion.p 
            className="text-white/90 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We Deliver Fresh Flowers 
          </motion.p>

          <motion.p 
            className="text-white/90 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bringing nature's beauty to your doorsteps
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/category/flowers"
              className="bg-secondary-300 hover:bg-secondary-400 text-gray-800 font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              Shop Flowers <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/category/plants"
              className="bg-white hover:bg-gray-100 text-primary-600 font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              Explore Plants <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;