/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.myanimelist.net',
            },
        ]
    },
    ignoreBuildErrors: true
};

export default nextConfig;
