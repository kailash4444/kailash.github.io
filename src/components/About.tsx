import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Code } from 'lucide-react';

const skills = [
  { name: 'Python', level: 95 },
  { name: 'PySpark', level: 90 },
  { name: 'OpenAI API', level: 85 },
  { name: 'SQL', level: 88 },
  { name: 'C++', level: 80 },
];

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3"
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-blue-900">About Me</h2>
            <p className="text-gray-700 mb-8 text-lg">
              As an AI Engineer specializing in Generative AI, I bring innovative solutions
              to complex problems through advanced machine learning techniques. With a strong
              foundation from IIT Guwahati and hands-on experience with cutting-edge technologies,
              I'm passionate about pushing the boundaries of what's possible with AI.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="text-center p-4 rounded-lg bg-blue-50">
                <Brain className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-semibold">AI/ML</h3>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-50">
                <Database className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-semibold">Big Data</h3>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-50">
                <Code className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-semibold">Development</h3>
              </div>
            </div>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-blue-600">{skill.level}%</span>
                  </div>
                  <motion.div
                    className="h-2 bg-blue-100 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;