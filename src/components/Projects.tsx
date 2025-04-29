import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'CodeBuddy',
    description: 'AI-powered code review and analysis tool using GPT-4 and LangChain',
    stack: ['Python', 'OpenAI API', 'FastAPI', 'React'],
    github: 'https://github.com/username/codebuddy',
    live: 'https://codebuddy-demo.com',
  },
  {
    title: 'DRackSim',
    description: 'Distributed rack simulation platform for data center optimization',
    stack: ['C++', 'CUDA', 'Python', 'Docker'],
    github: 'https://github.com/username/dracksim',
  },
  {
    title: 'File Sharing Platform',
    description: 'Secure P2P file sharing system with blockchain verification',
    stack: ['Node.js', 'React', 'Ethereum', 'IPFS'],
    github: 'https://github.com/username/p2p-share',
    live: 'https://p2p-share.com',
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-blue-900 dark:text-blue-300"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;