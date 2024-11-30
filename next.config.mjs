/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: [
        'firebasestorage.googleapis.com',
        'lh3.googleusercontent.com', // Add this line
      ]
  }
};

export default nextConfig;
