import type { MetadataRoute } from "next";

const BASE_URL = "https://grafowerk.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
