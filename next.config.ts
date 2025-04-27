// next.config.ts
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; img-src *; media-src *; script-src 'none';",
  },
};

export default nextConfig;
