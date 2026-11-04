import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'off'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
    ];
  },
  
  // Pages removed in the homepage redesign. Permanent, so search engines move on.
  async redirects() {
    return [
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/careers", destination: "/about", permanent: true },
      { source: "/document-analysis", destination: "/#work", permanent: true },
      { source: "/products/:path*", destination: "/", permanent: true },
      { source: "/resources/:path*", destination: "/", permanent: true },
    ];
  },

  poweredByHeader: false,
  compress: true,
  
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
      allowedOrigins: [],
    },
  },
};

export default nextConfig;