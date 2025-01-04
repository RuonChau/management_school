import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async redirects() {
  //   return [
  //     // Basic redirect
  //     {
  //       source: '/admin',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ]
  // },
  async headers() {
    return [
      {
        source: '/:path*', // Áp dụng cho mọi đường dẫn trong ứng dụng
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store', // Tắt cache
          },
        ],
      },
    ];
  },

}


export default nextConfig;
