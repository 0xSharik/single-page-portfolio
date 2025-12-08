import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/admin/AdminPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatePresence mode="wait">
        <Routes>
                {/* Public Routes */}
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="projects" element={<ProjectsPage />} />
                  <Route path="projects/:id" element={<ProjectDetailPage />} />
                  
                  {/* Protected Routes */}
                  <Route path="dashboard/*" element={<DashboardPage />} />
                  
                  {/* Admin Routes */}
                  <Route path="admin/*" element={<AdminPage />} />
                  
                  {/* 404 Route */}
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
        </Routes>
      </AnimatePresence>
      
      {/* Toast Notifications */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#112240',
            color: '#CCD6F6',
            border: '1px solid #64FFDA',
            borderRadius: '0.5rem',
          },
        }}
      />
    </div>
  );
}

export default App;
