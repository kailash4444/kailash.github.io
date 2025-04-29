import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'Advanced Techniques in Generative AI for Code Analysis',
    conference: 'IEEE International Conference on AI Engineering',
    year: '2023',
    link: 'https://ieee.org/publication/123',
    impact: '4.2',
  },
  {
    title: 'Optimizing Large Language Models for Enterprise Applications',
    conference: 'ACM SIGKDD Conference',
    year: '2022',
    link: 'https://acm.org/publication/456',
    impact: '3.8',
  },
];

const Publications = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="publications">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-blue-900 dark:text-blue-300"
        >
          Research Publications
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      {pub.conference}
                    </span>
                    <span>Year: {pub.year}</span>
                    <span>Impact Factor: {pub.impact}</span>
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                  >
                    View Publication
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;