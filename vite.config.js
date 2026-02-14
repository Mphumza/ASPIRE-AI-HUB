import { defineConfig } from 'vite';

export default defineConfig({
  // Build optimizations
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for external dependencies
          vendor: ['markdown-it', 'jspdf'],
          // Firebase chunk
          firebase: ['firebase/app', 'firebase/auth'],
        },
      },
    },
    // Generate source maps for production debugging
    sourcemap: false,
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // CSS code splitting
    cssCodeSplit: true,
    // Asset inlining threshold (4kb)
    assetsInlineLimit: 4096,
  },
  
  // Development server settings
  server: {
    port: 5173,
    strictPort: false,
    open: true,
    cors: true,
  },
  
  // Preview server settings
  preview: {
    port: 4173,
    strictPort: false,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['markdown-it', 'jspdf', 'firebase/app', 'firebase/auth'],
    exclude: [],
  },
  
  // CSS configuration
  css: {
    devSourcemap: true,
  },
  
  // Enable JSON optimization
  json: {
    stringify: true,
  },
});
