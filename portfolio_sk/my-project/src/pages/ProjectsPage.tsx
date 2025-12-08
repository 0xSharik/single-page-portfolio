import { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      category: 'Web Development',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A mobile-first task management application built with React Native',
      category: 'Mobile Apps',
      tags: ['React Native', 'Firebase'],
    },
    {
      id: 3,
      title: 'Sentiment Analysis Tool',
      description: 'AI-powered sentiment analysis using Python and NLTK',
      category: 'Data Science',
      tags: ['Python', 'NLTK', 'Machine Learning'],
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-accent2 mb-4">Browse Projects</h1>
          <p className="text-lg text-accent1">Discover amazing projects shared by our community</p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-accent1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-accent1/20 bg-tertiary/50 rounded-lg text-accent2 placeholder-accent1 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-primary/50 backdrop-blur-sm rounded-xl overflow-hidden border border-accent1/10 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-accent2 mb-2">{project.title}</h3>
                <p className="text-accent1 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-tertiary/50 rounded-full text-accent2">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <button className="text-sm font-medium text-secondary hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
