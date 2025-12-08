// Mock Firebase services for development
const mockUser = {
  uid: 'mock-user-id',
  email: 'dev@example.com',
  emailVerified: true,
  displayName: 'Developer',
  photoURL: null,
  getIdToken: async () => 'mock-id-token',
};

const mockAuth = {
  currentUser: mockUser,
  onAuthStateChanged: (callback: (user: any) => void) => {
    callback(mockUser);
    return () => {}; // Return unsubscribe function
  },
  signInWithEmailAndPassword: async (email: string, password: string) => ({
    user: mockUser,
  }),
  createUserWithEmailAndPassword: async (email: string, password: string) => ({
    user: mockUser,
  }),
  signInWithPopup: async () => ({
    user: mockUser,
  }),
  signOut: async () => {},
};

const mockFirestore = {
  collection: () => ({
    doc: () => ({
      get: async () => ({
        exists: true,
        data: () => ({}),
      }),
      set: async () => {},
      update: async () => {},
      delete: async () => {},
    }),
    where: () => ({
      get: async () => ({
        docs: [],
      }),
    }),
    get: async () => ({
      docs: [],
    }),
  }),
};

const mockStorage = {
  ref: () => ({
    put: async () => ({
      ref: {
        getDownloadURL: async () => 'https://example.com/mock-image.jpg',
      },
    }),
    getDownloadURL: async () => 'https://example.com/mock-image.jpg',
  }),
};

export const auth = mockAuth as any;
export const db = mockFirestore as any;
export const storage = mockStorage as any;

export default {
  auth,
  db,
  storage,
};
