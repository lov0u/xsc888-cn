import Link from "next/link";
import { studs, puppies } from "@/lib/data";
import { getArticles } from "@/lib/payload";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1920&q=80";
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1556546346-ad2946663684?w=1200&q=80";

export default async function HomePage() {
  const { articles } = await getArticles(1, 3);
  const featuredStuds = studs.slice(0, 3);
  const featuredPuppies = puppies.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-ink-900">
        <img
          src={HERO_IMAGE}
          alt="杜宾犬"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="tag-red">CKU注册 · 专业繁殖</span>
            </div>
            <h1 className="heading-magazine text-7xl md:text-8xl text-white mb-6">
              清风犬舍
            </h1>
            <p className="text-xl md:text-2xl text-ink-200 mb-4 font-serif italic">
              Doberman Pinscher Specialist
            </p>
            <p className="text-lg text-ink-300 mb-10 max-w-xl leading-relaxed">
              杜宾犬专业繁殖犬舍，拥有德国、欧洲冠军血统种犬。坚持科学繁殖，培育健康、稳定、优良的杜宾犬。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/studs/" className="btn-red">
                查看种犬
              </Link>
              <Link
                href="/contact/"
                className="btn-outline-dark border-white text-white hover:bg-white hover:text-ink-900"
              >
                联系购买
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 犬舍介绍 - 杂志式两栏布局 */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="tag-red mb-6 inline-block">关于清风犬舍</span>
              <h2 className="heading-magazine text-5xl md:text-6xl text-ink-900 mb-8">
                专业杜宾犬繁殖
              </h2>
              <div className="divider-thin mb-8" />
              <p className="text-ink-700 text-lg leading-relaxed mb-6">
                临沂清风犬舍成立于2018年，是一家专注于纯种杜宾犬繁殖的专业犬舍。我们坐落于烟台，拥有标准的犬舍设施和专业的繁殖团队。
              </p>
              <p className="text-ink-500 text-base leading-relaxed mb-8">
                犬舍引进了多只德国、欧洲冠军血统种犬，建立了完善的繁殖体系。我们坚持科学繁殖、健康优先的理念，所有种犬均经过基因检测和健康筛查，确保繁殖出体格健壮、性格稳定的优秀杜宾犬。
              </p>
              <Link
                href="/about/"
                className="inline-flex items-center gap-2 text-ink-900 font-semibold border-b-2 border-crimson-500 pb-1 hover:gap-3 transition-all"
              >
                了解更多
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
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img
                src={ABOUT_IMAGE}
                alt="清风犬舍"
                className="w-full aspect-[4/5] object-cover magazine-photo"
              />
              <div className="absolute -bottom-6 -left-6 bg-crimson-500 text-white px-8 py-4 hidden md:block">
                <div className="text-3xl font-bold">6+</div>
                <div className="text-sm tracking-wider">年专业繁殖经验</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 种犬展示 */}
      <section className="py-24 bg-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="tag-red mb-4 inline-block">种犬展示</span>
              <h2 className="heading-magazine text-5xl md:text-6xl text-ink-900">
                优秀种犬
              </h2>
            </div>
            <Link
              href="/studs/"
              className="text-ink-900 font-semibold border-b-2 border-ink-900 pb-1 hover:border-crimson-500 hover:text-crimson-500 transition-colors mt-4 md:mt-0"
            >
              查看全部种犬 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStuds.map((stud) => (
              <Link
                key={stud.slug}
                href={`/studs/${stud.slug}/`}
                className="group block card-magazine bg-ink-50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={stud.image}
                    alt={stud.name}
                    className="w-full aspect-[3/4] object-cover magazine-photo group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="tag-red">{stud.gender}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading-magazine text-3xl text-ink-900 mb-2">
                    {stud.name}
                  </h3>
                  <p className="text-sm text-ink-500 mb-1">{stud.bloodline}</p>
                  <p className="text-sm text-crimson-600 font-medium">
                    {stud.color}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 幼犬出售 */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="tag-red mb-4 inline-block">幼犬出售</span>
              <h2 className="heading-magazine text-5xl md:text-6xl text-ink-900">
                待售幼犬
              </h2>
            </div>
            <Link
              href="/puppies/"
              className="text-ink-900 font-semibold border-b-2 border-ink-900 pb-1 hover:border-crimson-500 hover:text-crimson-500 transition-colors mt-4 md:mt-0"
            >
              查看全部幼犬 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPuppies.map((puppy) => (
              <Link
                key={puppy.slug}
                href={`/puppies/${puppy.slug}/`}
                className="group block card-magazine bg-white border border-ink-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={puppy.image}
                    alt={puppy.name}
                    className="w-full aspect-square object-cover magazine-photo group-hover:scale-105 transition-transform duration-700"
                  />
                  {puppy.vaccinated && (
                    <div className="absolute top-4 right-4 bg-ink-900 text-white text-xs px-3 py-1 font-medium">
                      已疫苗
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="heading-magazine text-2xl text-ink-900">
                      {puppy.name}
                    </h3>
                    <span className="text-crimson-600 font-bold text-lg">
                      {puppy.price}
                    </span>
                  </div>
                  <p className="text-sm text-ink-500">
                    {puppy.gender} · {puppy.birthDate}
                  </p>
                  <p className="text-xs text-ink-400 mt-2">
                    父：{puppy.parents.father} · 母：{puppy.parents.mother}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 繁殖理念 */}
      <section className="py-24 bg-ink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="tag-red mb-4 inline-block">繁殖理念</span>
            <h2 className="heading-magazine text-5xl md:text-7xl">
              坚持标准 繁育精品
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <div className="text-7xl heading-magazine text-crimson-500 mb-6">
                01
              </div>
              <h3 className="text-2xl font-bold mb-4">健康优先</h3>
              <p className="text-ink-400 leading-relaxed">
                所有种犬均经过全面的基因检测和健康筛查，包括DCM心肌病、vWD血管性血友病等杜宾犬常见遗传病检测，确保每一只幼犬都拥有健康的基因基础。
              </p>
            </div>
            <div>
              <div className="text-7xl heading-magazine text-crimson-500 mb-6">
                02
              </div>
              <h3 className="text-2xl font-bold mb-4">血统纯正</h3>
              <p className="text-ink-400 leading-relaxed">
                引进德国SV、欧洲FCI、美国AKC注册血统种犬，拥有完整的血统证书和谱系记录。每一只幼犬均可提供CKU注册的纯种犬血统证书。
              </p>
            </div>
            <div>
              <div className="text-7xl heading-magazine text-crimson-500 mb-6">
                03
              </div>
              <h3 className="text-2xl font-bold mb-4">性格稳定</h3>
              <p className="text-ink-400 leading-relaxed">
                注重种犬的性格筛选，选择自信、稳定、服从性好的种犬进行繁殖。幼犬从出生起接受社会化训练，确保其拥有良好的家庭伴侣犬品质。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 新闻动态 */}
      {articles.length > 0 && (
        <section className="py-24 bg-ink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <span className="tag-red mb-4 inline-block">新闻动态</span>
                <h2 className="heading-magazine text-5xl md:text-6xl text-ink-900">
                  最新资讯
                </h2>
              </div>
              <Link
                href="/news/"
                className="text-ink-900 font-semibold border-b-2 border-ink-900 pb-1 hover:border-crimson-500 hover:text-crimson-500 transition-colors mt-4 md:mt-0"
              >
                查看全部 →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}/`}
                  className="group block card-magazine bg-white border border-ink-200"
                >
                  {article.coverImage && (
                    <div className="overflow-hidden">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full aspect-[16/9] object-cover magazine-photo group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs text-ink-500 mb-2">
                      {new Date(article.publishedAt).toLocaleDateString("zh-CN")}
                    </p>
                    <h3 className="text-xl font-bold text-ink-900 mb-2 group-hover:text-crimson-500 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-ink-500 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-crimson-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-magazine text-4xl md:text-6xl mb-8">
            欢迎咨询杜宾犬繁殖与购买
          </h2>
          <p className="text-lg text-crimson-100 mb-10 max-w-2xl mx-auto">
            无论您是想了解杜宾犬品种、咨询幼犬购买、还是需要专业的训练建议，清风犬舍都欢迎您的联系。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lov0u@foxmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-ink-900 text-white font-semibold hover:bg-ink-800 transition-colors"
            >
              发送邮件咨询
            </a>
            <Link
              href="/puppies/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-crimson-500 transition-colors"
            >
              查看待售幼犬
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
