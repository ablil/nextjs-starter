import type { NextConfig } from "next";
import { AppConfig } from "./lib/config";

const nextConfig: NextConfig = {
  redirects: AppConfig.maintenance.enabled ?  async () => {
    return [
      {source: '/((?!maintenance).*)', destination: '/maintenance', permanent: false}
    ]
  } : undefined
};

export default nextConfig
