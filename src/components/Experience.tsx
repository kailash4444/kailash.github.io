import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'GenAI Engineer',
    company: 'Providence Global Center',
    period: '2023 - Present',
    description: [
      'Led development of AI-powered code analysis tools using GPT-4',
      'Implemented RAG pipelines for enterprise knowledge bases',
      'Optimized prompt engineering workflows for 40% better accuracy',
    ],
  },
  {
    title: 'Data Engineering Intern',
    company: 'Tech Solutions Inc.',
    period: '2022 - 2023',
    description: [
      'Built scalable data pipelines using Apache Spark',
      'Reduced processing time by 60% through optimization',
      'Implemented real-time analytics dashboard',
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-blue-900 dark:text-blue-300"
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-800" />
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="font-medium">{exp.company}</span>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;