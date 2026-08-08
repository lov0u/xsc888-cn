import type { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/lib/payload";

export const metadata: Metadata = {
  title: "新闻资讯 - 清风犬舍",
  description:
    "清风犬舍新闻资讯，杜宾犬繁殖、训练、饲养知识，犬舍动态，赛事报道等专业内容。",
  keywords: ["杜宾犬新闻", "犬舍动态", "杜宾犬饲养", "杜宾犬训练", "犬展赛事"],
};

export const revalidate = 60;

export default async function NewsPage() {
  const { articles } = await getArticles(1, 20);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-ink-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag-red mb-6 inline-block">新闻资讯</span>
          <h1 className="heading-magazine text-6xl md:text-8xl mb-6">
            最新资讯
          </h1>
          <p className="text-xl text-ink-300 max-w-2xl">
            杜宾犬繁殖、训练、饲养专业知识，犬舍动态与赛事报道。
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}/`}
                  className={`group block card-magazine bg-white border border-ink-200 ${
                    index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  {article.coverImage && (
                    <div className="overflow-hidden">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className={`w-full ${
                          index === 0 ? "aspect-[16/9]" : "aspect-[16/10]"
                        } object-cover magazine-photo group-hover:scale-105 transition-transform duration-700`}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs text-ink-500 mb-2">
                      {new Date(article.publishedAt).toLocaleDateString("zh-CN")}
                    </p>
                    <h3
                      className={`font-bold text-ink-900 mb-3 group-hover:text-crimson-500 transition-colors ${
                        index === 0 ? "text-2xl" : "text-lg"
                      }`}
                    >
                      {article.title}
                    </h3>
                    <p className="text-sm text-ink-500 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-2 text-ink-900 font-semibold border-b-2 border-crimson-500 pb-1 text-sm group-hover:gap-3 transition-all">
                        阅读全文
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
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="heading-magazine text-6xl text-ink-300 mb-6">
                暂无文章
              </div>
              <p className="text-ink-500 mb-8">
                目前还没有发布任何文章，请稍后再来查看。
              </p>
              <div className="flex flex-col gap-4">
                <p className="text-ink-500 text-sm">
                  您可以通过以下方式联系我们：
                </p>
                <a
                  href="mailto:lov0u@foxmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ink-900 text-white font-semibold mx-auto hover:bg-ink-800 transition-colors"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  lov0u@foxmail.com
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
