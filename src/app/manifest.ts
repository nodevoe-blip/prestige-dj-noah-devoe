import type { MetadataRoute } from "next";
import { noah } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${noah.name} — Wedding DJ + MC`,
    short_name: noah.name,
    description: noah.bio,
    start_url: "/",
    display: "standalone",
    background_color: "#0F1114",
    theme_color: "#0F1114",
    icons: [
      { src: "/brand/nd/nd-app-icon-dark@192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/nd/nd-app-icon-dark@512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
