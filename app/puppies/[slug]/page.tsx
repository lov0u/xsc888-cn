import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  puppies,
  getAllPuppySlugs,
  getPuppyBySlug,
  studs,
} from "@/lib/data";

export function generateStaticParams() {
  return getAllPuppySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const puppy = getPuppyBySlug(slug);
  if (!puppy) {
    return { title: "幼犬未找到" };
  }
  return {
    title: `${puppy.name} - 杜宾幼犬出售 | ${puppy.price}`,
    description: `${puppy.name}，${puppy.gender}，${puppy.birthDate}出生，父${puppy.parents.father}母${puppy.parents.mother}。${puppy.description}`,
    keywords: [puppy.name, "杜宾幼犬", "杜宾犬出售", puppy.price],
  };
}

export default async function PuppyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const puppy = getPuppyBySlug(slug);
  if (!puppy) {
    notFound();
  }

  const father = studs.find((s) => s.name === puppy.parents.father);
  const mother = studs.find((s) => s.name === puppy.parents.mother);
  const otherPuppies = puppies.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="bg-ink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={puppy.image}
                alt={puppy.name}
                className="w-full aspect-square object-cover magazine-photo"
              />
              {puppy.vaccinated && (
                <div className="absolute top-4 right-4 bg-crimson-500 text-white text-sm px-4 py-2 font-medium">
                  已完成疫苗
                </div>
              )}
            </div>
            <div>
              <div className="flex gap-2 mb-6">
                <span className="tag-red">{puppy.gender}</span>
                <span className="bg-white text-ink-900 text-xs px-3 py-1 font-medium">
                  待售中
                </span>
              </div>
              <h1 className="heading-magazine text-7xl md:text-8xl mb-4">
                {puppy.name}
              </h1>
              <p className="text-3xl text-crimson-400 font-bold mb-8">
                {puppy.price}
              </p>
              <div className="divider-thin border-ink-700 mb-8" />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs text-ink-500 tracking-wider uppercase mb-1">
                    出生日期
                  </div>
                  <div className="text-lg font-semibold">
                    {puppy.birthDate}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-ink-500 tracking-wider uppercase mb-1">
                    性别
                  </div>
                  <div className="text-lg font-semibold">{puppy.gender}</div>
                </div>
                <div>
                  <div className="text-xs text-ink-500 tracking-wider uppercase mb-1">
                    父亲
                  </div>
                  <div className="text-lg font-semibold">
                    {puppy.parents.father}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-ink-500 tracking-wider uppercase mb-1">
                    母亲
                  </div>
                  <div className="text-lg font-semibold">
                    {puppy.parents.mother}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 详细介绍 */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="tag-red mb-4 inline-block">幼犬介绍</span>
              <h2 className="heading-magazine text-4xl text-ink-900 mb-8">
                关于{puppy.name}
              </h2>
              <div className="divider-thin mb-8" />
              <p className="text-ink-700 text-lg leading-relaxed mb-8">
                {puppy.description}
              </p>

              {/* 性格特征 */}
              <h3 className="text-xl font-bold text-ink-900 mt-12 mb-6">
                性格特征
              </h3>
              <div className="flex flex-wrap gap-3">
                {puppy.personality.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-white border border-ink-200 text-ink-700 text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* 疫苗记录 */}
            <div>
              <span className="tag-red mb-4 inline-block">疫苗记录</span>
              <div className="bg-white border border-ink-200 p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-ink-200 pb-4">
                    <svg
                      className="w-5 h-5 text-crimson-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <div className="text-sm font-semibold text-ink-900">
                        第一针疫苗
                      </div>
                      <div className="text-xs text-ink-500">已完成</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-b border-ink-200 pb-4">
                    <svg
                      className="w-5 h-5 text-crimson-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <div className="text-sm font-semibold text-ink-900">
                        驱虫
                      </div>
                      <div className="text-xs text-ink-500">已完成</div>
                    </div>
                  </div>
                  {puppy.vaccinated && (
                    <div className="flex items-center gap-3 border-b border-ink-200 pb-4">
                      <svg
                        className="w-5 h-5 text-crimson-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div>
                        <div className="text-sm font-semibold text-ink-900">
                          第二针疫苗
                        </div>
                        <div className="text-xs text-ink-500">已完成</div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-crimson-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <div className="text-sm font-semibold text-ink-900">
                        CKU血统证书
                      </div>
                      <div className="text-xs text-ink-500">随犬提供</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 父母信息 */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag-red mb-4 inline-block">血统信息</span>
          <h2 className="heading-magazine text-4xl text-ink-900 mb-8">
            父母信息
          </h2>
          <div className="divider-thin mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {father && (
              <Link
                href={`/studs/${father.slug}/`}
                className="group block card-magazine bg-ink-50"
              >
                <img
                  src={father.image}
                  alt={father.name}
                  className="w-full aspect-[4/5] object-cover magazine-photo mb-6"
                />
                <div className="px-6 pb-6">
                  <div className="text-xs text-ink-500 tracking-wider uppercase mb-1">
                    父亲
                  </div>
                  <h3 className="heading-magazine text-3xl text-ink-900 mb-2">
                    {father.name}
                  </h3>
                  <p className="text-sm text-ink-500">
                    {father.bloodline} · {father.color}
                  </p>
                </div>
              </Link>
            )}
            {mother && (
              <Link
                href={`/studs/${mother.slug}/`}
                className="group block card-magazine bg-ink-50"
              >
                <img
                  src={mother.image}
                  alt={mother.name}
                  className="w-full aspect-[4/5] object-cover magazine-photo mb-6"
                />
                <div className="px-6 pb-6">
                  <div className="text-xs text-ink-500 tracking-wider uppercase mb-1">
                    母亲
                  </div>
                  <h3 className="heading-magazine text-3xl text-ink-900 mb-2">
                    {mother.name}
                  </h3>
                  <p className="text-sm text-ink-500">
                    {mother.bloodline} · {mother.color}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 其他幼犬 */}
      <section className="py-24 bg-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-magazine text-4xl text-ink-900 mb-12">
            其他幼犬
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPuppies.map((p) => (
              <Link
                key={p.slug}
                href={`/puppies/${p.slug}/`}
                className="group block card-magazine bg-white border border-ink-200"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full aspect-square object-cover magazine-photo group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="heading-magazine text-2xl text-ink-900">
                      {p.name}
                    </h3>
                    <span className="text-crimson-600 font-bold">
                      {p.price}
                    </span>
                  </div>
                  <p className="text-sm text-ink-500 mt-2">
                    {p.gender} · {p.birthDate}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-crimson-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-magazine text-4xl md:text-5xl mb-6">
            想要带{puppy.name}回家？
          </h2>
          <p className="text-crimson-100 mb-8">
            立即联系我们，了解更多关于{puppy.name}的详情和购买流程。
          </p>
          <a
            href="mailto:lov0u@foxmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-ink-900 text-white font-semibold hover:bg-ink-800 transition-colors"
          >
            联系我们
          </a>
        </div>
      </section>
    </div>
  );
}
