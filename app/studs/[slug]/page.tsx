import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { studs, getAllStudSlugs, getStudBySlug } from "@/lib/data";

export function generateStaticParams() {
  return getAllStudSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stud = getStudBySlug(slug);
  if (!stud) {
    return { title: "种犬未找到" };
  }
  return {
    title: `${stud.name} - ${stud.bloodline}杜宾种犬`,
    description: `${stud.name}，${stud.gender}，${stud.bloodline}，${stud.color}。${stud.description}`,
    keywords: [stud.name, "杜宾种犬", stud.bloodline, stud.color],
  };
}

export default async function StudDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stud = getStudBySlug(slug);
  if (!stud) {
    notFound();
  }

  const otherStuds = studs.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-ink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={stud.image}
                alt={stud.name}
                className="w-full aspect-[4/5] object-cover magazine-photo"
              />
            </div>
            <div>
              <div className="flex gap-2 mb-6">
                <span className="tag-red">{stud.gender}</span>
                <span className="bg-white text-ink-900 text-xs px-3 py-1 font-medium">
                  {stud.color}
                </span>
              </div>
              <h1 className="heading-magazine text-7xl md:text-8xl mb-4">
                {stud.name}
              </h1>
              <p className="text-2xl text-ink-300 font-serif italic mb-8">
                {stud.bloodline}
              </p>
              <div className="divider-thin border-ink-700 mb-8" />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs text-ink-500 tracking-wider uppercase mb-1">
                    出生日期
                  </div>
                  <div className="text-lg font-semibold">
                    {stud.birthDate}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-ink-500 tracking-wider uppercase mb-1">
                    血统
                  </div>
                  <div className="text-lg font-semibold">
                    {stud.bloodline}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-ink-500 tracking-wider uppercase mb-1">
                    肩高
                  </div>
                  <div className="text-lg font-semibold">
                    {stud.measurements.height}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-ink-500 tracking-wider uppercase mb-1">
                    体重
                  </div>
                  <div className="text-lg font-semibold">
                    {stud.measurements.weight}
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
              <span className="tag-red mb-4 inline-block">犬只介绍</span>
              <h2 className="heading-magazine text-4xl text-ink-900 mb-8">
                关于{stud.name}
              </h2>
              <div className="divider-thin mb-8" />
              <p className="text-ink-700 text-lg leading-relaxed mb-6">
                {stud.description}
              </p>

              {/* 性格特征 */}
              <h3 className="text-xl font-bold text-ink-900 mt-12 mb-6">
                性格特征
              </h3>
              <div className="flex flex-wrap gap-3">
                {stud.personality.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-white border border-ink-200 text-ink-700 text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* 体型参数 */}
            <div>
              <span className="tag-red mb-4 inline-block">体型参数</span>
              <div className="bg-white border border-ink-200 p-6">
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-ink-200 pb-4">
                    <span className="text-ink-500 text-sm">肩高</span>
                    <span className="text-ink-900 font-bold">
                      {stud.measurements.height}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-ink-200 pb-4">
                    <span className="text-ink-500 text-sm">体重</span>
                    <span className="text-ink-900 font-bold">
                      {stud.measurements.weight}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-500 text-sm">胸围</span>
                    <span className="text-ink-900 font-bold">
                      {stud.measurements.chest}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 血统证书信息 */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag-red mb-4 inline-block">血统证书</span>
          <h2 className="heading-magazine text-4xl text-ink-900 mb-8">
            血统与成就
          </h2>
          <div className="divider-thin mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-ink-900 mb-4">谱系信息</h3>
              <p className="text-ink-700 leading-relaxed mb-6">
                {stud.pedigree}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink-900 mb-4">赛事成就</h3>
              <ul className="space-y-3">
                {stud.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-crimson-500 font-bold mt-1">
                      ●
                    </span>
                    <span className="text-ink-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 其他种犬 */}
      <section className="py-24 bg-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-magazine text-4xl text-ink-900 mb-12">
            其他种犬
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherStuds.map((s) => (
              <Link
                key={s.slug}
                href={`/studs/${s.slug}/`}
                className="group block card-magazine bg-ink-50"
              >
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full aspect-[3/4] object-cover magazine-photo group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-magazine text-3xl text-ink-900 mb-2">
                    {s.name}
                  </h3>
                  <p className="text-sm text-ink-500">{s.bloodline}</p>
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
            对{stud.name}感兴趣？
          </h2>
          <p className="text-crimson-100 mb-8">
            欢迎联系我们了解更多关于此种犬的繁殖安排和后代信息。
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
