import { projectData } from "@/data/ProjectData";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vinaypartap.netlify.com";

  // Static routes
  const routes = ["", "/projects", "/resume", "/blogs"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic project routes
  const projectRoutes = projectData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
