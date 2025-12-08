import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock project data - in a real app, this would come from an API
  const project = {
    id: id,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with modern web technologies.',
    longDescription: 'This project is a complete e-commerce platform built with React, Node.js, and MongoDB. It includes features like user authentication, product catalog, shopping cart, and payment integration.',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    author: 'Jane Doe',
    createdAt: '2023-10-15',
    updatedAt: '2023-10-20',
    price: 49.99,
    rating: 4.8,
    image: 'https://via.placeholder.com/1200x600',
    features: [
      'User authentication and authorization',
      'Product catalog with categories',
      'Shopping cart functionality',
      'Checkout process with payment integration',
      'Order history and tracking',
      'Admin dashboard',
    ],
    requirements: [
      'Node.js 14+',
      'MongoDB 4.4+',
      'npm or yarn',
    ],
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center text-accent1 hover:text-secondary transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-secondary">
                  {project.category}
                </span>
                <span className="text-sm text-accent1">
                  Updated {project.updatedAt}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-accent2 mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-accent1 max-w-3xl">
                {project.description}
              </p>
            </div>
            <div className="bg-tertiary/50 backdrop-blur-sm p-6 rounded-xl border border-accent1/10 w-full md:w-auto md:min-w-[300px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-secondary">${project.price}</span>
                <div className="flex items-center text-amber-400">
                  ★ {project.rating}
                </div>
              </div>
              <button className="w-full btn btn-primary mb-4">
                Download Project
              </button>
              <button className="w-full btn btn-outline">
                Add to Wishlist
              </button>
            </div>
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            {/* Project Image */}
            <div className="rounded-xl overflow-hidden mb-8 border border-accent1/10">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>

            {/* Project Description */}
            <div className="prose prose-invert max-w-none mb-12">
              <h2 className="text-2xl font-bold text-accent2 mb-4">Project Overview</h2>
              <p className="text-accent1">
                {project.longDescription}
              </p>

              <h3 className="text-xl font-semibold text-accent2 mt-8 mb-4">Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-accent1">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-accent2 mt-8 mb-4">Requirements</h3>
              <ul className="space-y-2">
                {project.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-accent1">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Author Info */}
            <div className="bg-tertiary/50 backdrop-blur-sm p-6 rounded-xl border border-accent1/10">
              <h3 className="text-lg font-semibold text-accent2 mb-4">Author</h3>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-xl font-bold">
                  {project.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-accent2">{project.author}</h4>
                  <p className="text-sm text-accent1">Full Stack Developer</p>
                </div>
              </div>
              <button className="w-full mt-4 btn btn-outline">
                Contact Author
              </button>
            </div>

            {/* Project Details */}
            <div className="bg-tertiary/50 backdrop-blur-sm p-6 rounded-xl border border-accent1/10">
              <h3 className="text-lg font-semibold text-accent2 mb-4">Project Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-accent1">Category:</span>
                  <span className="text-accent2 font-medium">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent1">Created:</span>
                  <span className="text-accent2 font-medium">{project.createdAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent1">Last Updated:</span>
                  <span className="text-accent2 font-medium">{project.updatedAt}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-tertiary/50 backdrop-blur-sm p-6 rounded-xl border border-accent1/10">
              <h3 className="text-lg font-semibold text-accent2 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
