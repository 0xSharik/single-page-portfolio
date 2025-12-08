import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { collection, query, where, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface Project {
  id?: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  authorId: string;
  authorName: string;
  price: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  status: 'draft' | 'published' | 'archived';
  downloads: number;
  features: string[];
  requirements: string[];
}

interface ProjectContextType {
  projects: Project[];
  loading: boolean;
  error: string | null;
  getProjectById: (id: string) => Promise<Project | undefined>;
  getUserProjects: (userId: string) => Promise<Project[]>;
  createProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'downloads'>) => Promise<string>;
  updateProject: (id: string, updates: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  searchProjects: (query: string) => Promise<Project[]>;
  getProjectsByCategory: (category: string) => Promise<Project[]>;
}

const ProjectContext = createContext<ProjectContextType | null>(null);

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Convert Firestore document to Project
  const formatProject = (doc: any): Project => ({
    id: doc.id,
    title: doc.title || '',
    description: doc.description || '',
    longDescription: doc.longDescription || '',
    category: doc.category || '',
    tags: doc.tags || [],
    authorId: doc.authorId || '',
    authorName: doc.authorName || '',
    price: doc.price || 0,
    imageUrl: doc.imageUrl || '',
    createdAt: doc.createdAt?.toDate() || new Date(),
    updatedAt: doc.updatedAt?.toDate() || new Date(),
    status: doc.status || 'draft',
    downloads: doc.downloads || 0,
    features: doc.features || [],
    requirements: doc.requirements || [],
  });

  // Get project by ID
  const getProjectById = async (id: string): Promise<Project | undefined> => {
    try {
      setLoading(true);
      const projectsRef = collection(db, 'projects');
      const q = query(projectsRef, where('id', '==', id));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        return undefined;
      }
      
      return formatProject({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
    } catch (err) {
      console.error('Error getting project:', err);
      setError('Failed to fetch project');
      return undefined;
    } finally {
      setLoading(false);
    }
  };

  // Get projects by user ID
  const getUserProjects = async (userId: string): Promise<Project[]> => {
    try {
      setLoading(true);
      const projectsRef = collection(db, 'projects');
      const q = query(projectsRef, where('authorId', '==', userId));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => formatProject({ id: doc.id, ...doc.data() }));
    } catch (err) {
      console.error('Error getting user projects:', err);
      setError('Failed to fetch user projects');
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Create a new project
  const createProject = async (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'downloads'>): Promise<string> => {
    try {
      setLoading(true);
      const now = new Date();
      const projectData = {
        ...project,
        createdAt: now,
        updatedAt: now,
        status: 'draft' as const,
        downloads: 0,
      };
      
      const docRef = await addDoc(collection(db, 'projects'), projectData);
      setProjects(prev => [...prev, { ...projectData, id: docRef.id }]);
      
      return docRef.id;
    } catch (err) {
      console.error('Error creating project:', err);
      setError('Failed to create project');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update an existing project
  const updateProject = async (id: string, updates: Partial<Project>): Promise<void> => {
    try {
      setLoading(true);
      const projectRef = doc(db, 'projects', id);
      await updateDoc(projectRef, {
        ...updates,
        updatedAt: new Date(),
      });
      
      setProjects(prev => 
        prev.map(project => 
          project.id === id 
            ? { ...project, ...updates, updatedAt: new Date() } 
            : project
        )
      );
    } catch (err) {
      console.error('Error updating project:', err);
      setError('Failed to update project');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete a project
  const deleteProject = async (id: string): Promise<void> => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, 'projects', id));
      setProjects(prev => prev.filter(project => project.id !== id));
    } catch (err) {
      console.error('Error deleting project:', err);
      setError('Failed to delete project');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Search projects by title or description
  const searchProjects = async (searchQuery: string): Promise<Project[]> => {
    try {
      setLoading(true);
      // Note: This is a simple implementation. For production, you might want to use 
      // a full-text search solution like Algolia or Firebase's own search capabilities
      const projectsRef = collection(db, 'projects');
      const querySnapshot = await getDocs(projectsRef);
      
      const searchTerm = searchQuery.toLowerCase();
      const filtered = querySnapshot.docs
        .map(doc => formatProject({ id: doc.id, ...doc.data() }))
        .filter(project => 
          project.title.toLowerCase().includes(searchTerm) ||
          project.description.toLowerCase().includes(searchTerm) ||
          project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      
      return filtered;
    } catch (err) {
      console.error('Error searching projects:', err);
      setError('Failed to search projects');
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Get projects by category
  const getProjectsByCategory = async (category: string): Promise<Project[]> => {
    try {
      setLoading(true);
      const projectsRef = collection(db, 'projects');
      const q = query(projectsRef, where('category', '==', category), where('status', '==', 'published'));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => formatProject({ id: doc.id, ...doc.data() }));
    } catch (err) {
      console.error('Error getting projects by category:', err);
      setError('Failed to fetch projects by category');
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Initial data loading
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsRef = collection(db, 'projects');
        const q = query(projectsRef, where('status', '==', 'published'));
        const querySnapshot = await getDocs(q);
        
        const projectsData = querySnapshot.docs.map(doc => 
          formatProject({ id: doc.id, ...doc.data() })
        );
        
        setProjects(projectsData);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const value = {
    projects,
    loading,
    error,
    getProjectById,
    getUserProjects,
    createProject,
    updateProject,
    deleteProject,
    searchProjects,
    getProjectsByCategory,
  };

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
