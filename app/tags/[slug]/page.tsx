import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getArticlesByTag, getAllTagSlugs } from "@/lib/payload";

export const revalidate = 3600;

const BASE_URL = "https://xsc888.cn";

export async function generateStaticParams() {
  const slugs = await getAllTagSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { tag } = await getArticlesByTag(slug);

  if (!tag) {
    return {
      title: "标签未找到",
    };
  }

  return {
    title: `标签: ${tag.name}`,
    description: `浏览清风犬舍「${tag.name}」标签下的所有文章`,
    alternates: {
      canonical: `${BASE_URL}/tags/${tag.slug}/`,
    },
  };
}

export default async function TagArticlesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { articles, total, tag } = await getArticlesByTag(slug);

  if (!tag) {
    notFound();
  }

  return (
    <>
      <section className="bg-ink-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-magazine text-5xl md:text-6xl text-white leading-none mb-4">
            {tag.name}
          </h1>
          <p className="text-sm tracking-[0.2em] uppercase text-ink-500 mt-4">
            {total} Articles
          </p>
        </div>
      </section>

      <section className="py-16 bg-white min-h-[400px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-ink-500 mb-8">
            <Link href="/" className="hover:text-crimson-400">
              首页
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:text-crimson-400">
              新闻资讯
            </Link>
            <span>/</span>
            <Link href="/tags" className="hover:text-crimson-400">
              标签
            </Link>
            <span>/</span>
            <span className="text-ink-900">{tag.name}</span>
          </nav>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group bg-ink-50 rounded-none overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {article.coverImage && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <p className="text-xs text-ink-500 mb-2">
                      {new Date(article.publishedAt).toLocaleDateString(
                        "zh-CN"
                      )}
                    </p>
                    <h2 className="text-lg font-bold text-ink-900 mb-2 group-hover:text-crimson-400 transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-ink-600 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🐕</div>
              <h2 className="heading-magazine text-2xl text-ink-800 mb-2">
                暂无文章
              </h2>
              <p className="text-ink-500 mb-8">
                该标签下暂无文章内容
              </p>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-6 py-3 bg-crimson-500 text-white rounded-none font-semibold hover:bg-crimson-600 transition-colors"
              >
                浏览全部文章
              </Link>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/tags"
              className="inline-flex items-center gap-2 text-crimson-500 hover:text-crimson-600 font-medium"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              查看全部标签
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
