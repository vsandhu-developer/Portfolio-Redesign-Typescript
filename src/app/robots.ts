import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/blogs/secret-upload/"], // Disallow admin routes
    },
    sitemap: "https://www.vinaypartap.netlify.com/sitemap.xml",
  };
}
