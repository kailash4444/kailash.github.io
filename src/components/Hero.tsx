import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white z-10 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Narreddy Kailash Reddy
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-200 mb-8">
          AI Engineer | GenAI | IIT Guwahati
        </h2>
        
        <div className="h-16 mb-8">
          <TypeAnimation
            sequence={[
              'Generative AI',
              1500,
              'Langchain',
              1500,
              'Databricks',
              1500,
              'GPT-4',
              1500,
              'Prompt Engineering',
              1500,
            ]}
            wrapper="span"
            speed={50}
            className="text-2xl md:text-3xl text-blue-300"
            repeat={Infinity}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          onClick={() => window.open('/resume.pdf', '_blank')}
        >
          View Resume
        </motion.button>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white opacity-80" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;