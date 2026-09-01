import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Vercel Hobby exhausted its image-optimization quota (402
    // OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED broke every newly uploaded
    // photo). Serve originals until the account moves to Pro — uploads are
    // already compressed to 1600px JPEG by the admin panel.
    unoptimized: true,
    remotePatterns: [
      // Supabase Storage (admin-panel uploads)
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
};

export default nextConfig;
