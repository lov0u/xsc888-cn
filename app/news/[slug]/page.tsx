import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getArticles, getAllArticleSlugs } from "@/lib/payload";
import ArticleCharts from "@/app/ArticleCharts";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) {
    return { title: "文章未找到" };
  }
  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
    keywords: article.metaKeywords?.split(",") || [],
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const { articles: related } = await getArticles(1, 5);
  const relatedArticles = related.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* Article Header */}
      <section className="bg-ink-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news/"
            className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-crimson-400 transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            返回资讯列表
          </Link>
          <p className="text-sm text-ink-500 mb-4">
            {new Date(article.publishedAt).toLocaleDateString("zh-CN")}
          </p>
          <h1 className="heading-magazine text-4xl md:text-6xl mb-6">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="text-lg text-ink-300 font-serif italic">
              {article.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-ink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.coverImage && (
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full aspect-[16/9] object-cover magazine-photo mb-12"
            />
          )}
          {/* Payload 返回的 content 为 HTML 字符串，直接渲染（内容来自受信任的 CMS/AI 生成） */}
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          <ArticleCharts />

          {/* CTA */}
          <div className="mt-12 p-8 bg-white border-l-4 border-crimson-500">
            <p className="text-ink-700">
              对杜宾犬感兴趣？欢迎联系我们了解更多信息。
            </p>
            <a
              href="mailto:lov0u@foxmail.com"
              className="inline-flex items-center gap-2 mt-4 text-crimson-500 font-semibold border-b-2 border-crimson-500 pb-1 hover:gap-3 transition-all"
            >
              lov0u@foxmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-magazine text-3xl text-ink-900 mb-8">
              相关文章
            </h2>
            <div className="divider-thin mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/news/${rel.slug}/`}
                  className="group block card-magazine bg-ink-50"
                >
                  {rel.coverImage && (
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      className="w-full aspect-[16/9] object-cover magazine-photo mb-4"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-bold text-ink-900 group-hover:text-crimson-500 transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-ink-500 mt-2 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
