/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for enhanced development mode checks
    reactStrictMode: true,
  
    // Define custom webpack configuration
    webpack: (config, { isServer }) => {
      // Apply custom webpack configurations based on whether it's a server or client build
      if (isServer) {
        // Custom server-side webpack configuration
      } else {
        // Custom client-side webpack configuration
      }
  
      return config;
    },
  
    // Set custom page file extensions
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  
    // Add other configuration options as needed
  };
  
  export default nextConfig;
  