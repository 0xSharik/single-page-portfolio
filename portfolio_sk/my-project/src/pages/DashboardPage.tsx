import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DashboardPage = () => {
  // Mock data for user's projects
  const userProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      status: 'Published',
      downloads: 124,
      lastUpdated: '2023-10-20',
      thumbnail: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Task Management App',
      status: 'Draft',
      downloads: 0,
      lastUpdated: '2023-10-15',
      thumbnail: 'https://via.placeholder.com/150',
    },
  ];

  // Mock data for purchased projects
  const purchasedProjects = [
    {
      id: 101,
      title: 'AI Chatbot',
      author: 'John Smith',
      purchasedOn: '2023-10-10',
      thumbnail: 'https://via.placeholder.com/150',
    },
    {
      id: 102,
      title: 'Portfolio Template',
      author: 'Sarah Johnson',
      purchasedOn: '2023-09-28',
      thumbnail: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-accent2 mb-2">Dashboard</h1>
          <p className="text-accent1">Welcome back! Here's what's happening with your projects.</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-tertiary/50 backdrop-blur-sm p-6 rounded-xl border border-accent1/10">
            <h3 className="text-sm font-medium text-accent1 mb-1">Total Projects</h3>
            <p className="text-3xl font-bold text-secondary">12</p>
          </div>
          <div className="bg-tertiary/50 backdrop-blur-sm p-6 rounded-xl border border-accent1/10">
            <h3 className="text-sm font-medium text-accent1 mb-1">Total Downloads</h3>
            <p className="text-3xl font-bold text-secondary">1,245</p>
          </div>
          <div className="bg-tertiary/50 backdrop-blur-sm p-6 rounded-xl border border-accent1/10">
            <h3 className="text-sm font-medium text-accent1 mb-1">Total Earnings</h3>
            <p className="text-3xl font-bold text-secondary">$2,450</p>
          </div>
        </motion.div>

        {/* My Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-accent2">My Projects</h2>
            <Link 
              to="/projects/new" 
              className="btn btn-primary flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Project
            </Link>
          </div>

          {userProjects.length > 0 ? (
            <div className="bg-primary/50 rounded-xl border border-accent1/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-accent1/10">
                  <thead className="bg-tertiary/30">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-accent1 uppercase tracking-wider">
                        Project
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-accent1 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-accent1 uppercase tracking-wider">
                        Downloads
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-accent1 uppercase tracking-wider">
                        Last Updated
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-accent1/10">
                    {userProjects.map((project) => (
                      <tr key={project.id} className="hover:bg-tertiary/10 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-md overflow-hidden">
                              <img className="h-10 w-10 object-cover" src={project.thumbnail} alt={project.title} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-accent2">{project.title}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            project.status === 'Published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-accent1">
                          {project.downloads}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-accent1">
                          {project.lastUpdated}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/projects/${project.id}/edit`} className="text-secondary hover:text-secondary/80 mr-4">
                            Edit
                          </Link>
                          <button className="text-red-500 hover:text-red-700">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-accent1/20 rounded-xl">
              <svg
                className="mx-auto h-12 w-12 text-accent1/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-accent2">No projects yet</h3>
              <p className="mt-1 text-sm text-accent1">Get started by creating a new project.</p>
              <div className="mt-6">
                <Link
                  to="/projects/new"
                  className="btn btn-primary inline-flex items-center"
                >
                  <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  New Project
                </Link>
              </div>
            </div>
          )}
        </motion.div>

        {/* Purchased Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-accent2 mb-6">Purchased Projects</h2>
          
          {purchasedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {purchasedProjects.map((project) => (
                <div key={project.id} className="bg-primary/50 rounded-xl border border-accent1/10 overflow-hidden hover:shadow-lg hover:shadow-secondary/10 transition-shadow duration-300">
                  <div className="h-40 bg-tertiary/30 flex items-center justify-center">
                    <img src={project.thumbnail} alt={project.title} className="max-h-full max-w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-accent2 mb-1">{project.title}</h3>
                    <p className="text-sm text-accent1 mb-4">by {project.author}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-accent1">Purchased on {project.purchasedOn}</span>
                      <Link 
                        to={`/projects/${project.id}`}
                        className="text-sm font-medium text-secondary hover:text-secondary/80"
                      >
                        View Project →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-accent1/20 rounded-xl">
              <svg
                className="mx-auto h-12 w-12 text-accent1/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-accent2">No purchases yet</h3>
              <p className="mt-1 text-sm text-accent1">Browse our collection of projects to get started.</p>
              <div className="mt-6">
                <Link
                  to="/projects"
                  className="btn btn-outline inline-flex items-center"
                >
                  Browse Projects
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
