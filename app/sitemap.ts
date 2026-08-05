import type { MetadataRoute } from "next";
import { getArticles, getTags } from "@/lib/strapi";
import { studs, puppies } from "@/lib/data";

const BASE_URL = "https://xsc888.cn";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/studs/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/puppies/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/news/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const studPages: MetadataRoute.Sitemap = studs.map((stud) => ({
    url: `${BASE_URL}/studs/${stud.slug}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const puppyPages: MetadataRoute.Sitemap = puppies.map((puppy) => ({
    url: `${BASE_URL}/puppies/${puppy.slug}/`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  let articlePages: MetadataRoute.Sitemap = [];
  try {
    const { articles } = await getArticles(1, 100);
    articlePages = articles.map((article) => ({
      url: `${BASE_URL}/news/${article.slug}/`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // Strapi 未就绪时跳过
  }

  // 标签页面
  let tagPages: MetadataRoute.Sitemap = [];
  try {
    const tags = await getTags();
    tagPages = tags.map((tag) => ({
      url: `${BASE_URL}/tags/${tag.slug}/`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));
    tagPages.push({
      url: `${BASE_URL}/tags/`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    });
  } catch {
    // Strapi 未就绪时跳过
  }

  return [...staticPages, ...studPages, ...puppyPages, ...articlePages, ...tagPages];
}
