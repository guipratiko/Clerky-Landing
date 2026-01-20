import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://clerky.com.br";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/app/",
        "/casinest/",
        "/virtuals/",
        "/dev/status", // Página dinâmica de status, não precisa ser indexada
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

