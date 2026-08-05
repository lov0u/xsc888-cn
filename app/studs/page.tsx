import type { Metadata } from "next";
import Link from "next/link";
import { studs } from "@/lib/data";

export const metadata: Metadata = {
  title: "种犬展示 - 清风犬舍",
  description:
    "清风犬舍种犬展示，拥有德国SV、欧洲FCI、美国AKC注册血统杜宾种犬。每只种犬均经过基因检测和健康筛查，血统纯正，性格稳定。",
  keywords: ["杜宾种犬", "杜宾种公", "杜宾种母", "德国杜宾", "欧洲冠军血统"],
};

export default function StudsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-ink-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag-red mb-6 inline-block">种犬展示</span>
          <h1 className="heading-magazine text-6xl md:text-8xl mb-6">
            优秀种犬
          </h1>
          <p className="text-xl text-ink-300 max-w-2xl">
            拥有德国、欧洲、美国冠军血统的纯种杜宾种犬，每一只都经过严格筛选。
          </p>
        </div>
      </section>

      {/* Studs List - 杂志式不对称网格布局 */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {studs.map((stud, index) => (
              <Link
                key={stud.slug}
                href={`/studs/${stud.slug}/`}
                className={`group block card-magazine bg-white ${
                  index % 3 === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className={`grid ${index % 3 === 0 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={stud.image}
                      alt={stud.name}
                      className={`w-full ${
                        index % 3 === 0
                          ? "aspect-[16/10] md:h-full"
                          : "aspect-[4/5]"
                      } object-cover magazine-photo group-hover:scale-105 transition-transform duration-700`}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="tag-red">{stud.gender}</span>
                      {stud.achievements.length > 0 && (
                        <span className="bg-ink-900 text-white text-xs px-3 py-1 font-medium">
                          冠军血统
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="heading-magazine text-4xl md:text-5xl text-ink-900 mb-3">
                      {stud.name}
                    </h2>
                    <p className="text-crimson-600 font-medium mb-4">
                      {stud.color}
                    </p>
                    <div className="divider-thin mb-4" />
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-ink-500">血统</span>
                        <span className="text-ink-900 font-medium">
                          {stud.bloodline}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-ink-500">出生日期</span>
                        <span className="text-ink-900 font-medium">
                          {stud.birthDate}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-ink-500">肩高</span>
                        <span className="text-ink-900 font-medium">
                          {stud.measurements.height}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-ink-500">体重</span>
                        <span className="text-ink-900 font-medium">
                          {stud.measurements.weight}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-ink-500 mt-4 line-clamp-2">
                      {stud.description}
                    </p>
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 text-ink-900 font-semibold border-b-2 border-crimson-500 pb-1 group-hover:gap-3 transition-all">
                        查看详情
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
