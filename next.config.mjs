/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Habilitar Netlify Forms
    experimental: {
      runtime: 'edge',
    },
    // Outras configurações conforme necessário
  };
  
  export default nextConfig;
  