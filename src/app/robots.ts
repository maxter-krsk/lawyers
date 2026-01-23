import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://test.ru";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacy-policy"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
