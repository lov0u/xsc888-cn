import type { Metadata } from "next";
import Link from "next/link";
import { getTags } from "@/lib/strapi";

export const revalidate = 3600;

const BASE_URL = "https://xsc888.cn";

export const metadata: Metadata = {
  title: "文章标签",
  description: "浏览清风犬舍所有文章标签，按标签分类浏览杜宾犬知识和犬舍动态。",
  alternates: {
    canonical: `${BASE_URL}/tags/`,
  },
};

export default async function TagsPage() {
  const tags = await getTags();

  return (
    <>
      <section className="bg-ink-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-magazine text-5xl md:text-6xl text-white leading-none mb-4">
            文章标签
          </h1>
          <p className="text-sm tracking-[0.2em] uppercase text-ink-500 mt-4">
            Tags · Browse by Topic
          </p>
        </div>
      </section>

      <section className="py-16 bg-white min-h-[400px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {tags.length > 0 ? (
            <>
              <nav className="flex items-center gap-2 text-sm text-ink-500 mb-8">
                <Link href="/" className="hover:text-crimson-400">
                  首页
                </Link>
                <span>/</span>
                <Link href="/news" className="hover:text-crimson-400">
                  新闻资讯
                </Link>
                <span>/</span>
                <span className="text-ink-900">标签</span>
              </nav>

              <div className="flex flex-wrap gap-4">
                {tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/tags/${tag.slug}`}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-ink-50 rounded-none shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-ink-200"
                  >
                    <span className="text-lg font-bold text-ink-900 group-hover:text-crimson-400 transition-colors">
                      {tag.name}
                    </span>
                    <svg
                      className="w-4 h-4 text-ink-400 group-hover:text-crimson-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🐕</div>
              <h2 className="heading-magazine text-2xl text-ink-800 mb-2">
                标签即将上线
              </h2>
              <p className="text-ink-500 mb-8">
                文章标签功能正在准备中，敬请期待
              </p>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-6 py-3 bg-crimson-500 text-white rounded-none font-semibold hover:bg-crimson-600 transition-colors"
              >
                浏览全部文章
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
