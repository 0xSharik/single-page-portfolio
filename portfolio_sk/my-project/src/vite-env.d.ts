/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Add any environment variables you need for development here
  // Example:
  // readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
