/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'firebasestorage.googleapis.com',
          // ...any other domains you're using
        ]
      }
};

export default nextConfig;
