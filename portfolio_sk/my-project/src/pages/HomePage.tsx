import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-accent2 mb-6"
        >
          Welcome to DevProjects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg text-accent1 mb-8 max-w-2xl mx-auto"
        >
          A modern marketplace for academic projects. Find, share, and collaborate on amazing projects.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 justify-center"
        >
          <Link 
            to="/projects" 
            className="btn btn-primary"
          >
            Browse Projects
          </Link>
          <Link 
            to="/login" 
            className="btn btn-outline"
          >
            Sign In
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
