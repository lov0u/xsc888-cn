import type { Metadata } from "next";
import Link from "next/link";
import { puppies } from "@/lib/data";

export const metadata: Metadata = {
  title: "幼犬出售 - 清风犬舍",
  description:
    "清风犬舍待售杜宾幼犬，拥有冠军血统，已接种疫苗、驱虫完毕。每只幼犬均提供CKU血统证书，健康保障，性格优良。",
  keywords: ["杜宾幼犬出售", "杜宾犬价格", "纯种杜宾幼犬", "杜宾犬购买"],
};

export default function PuppiesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-ink-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag-red mb-6 inline-block">幼犬出售</span>
          <h1 className="heading-magazine text-6xl md:text-8xl mb-6">
            待售幼犬
          </h1>
          <p className="text-xl text-ink-300 max-w-2xl">
            每只幼犬均来自冠军血统种犬，已接种疫苗、完成驱虫，附赠CKU血统证书。
          </p>
        </div>
      </section>

      {/* Puppies List - 卡片式布局 */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {puppies.map((puppy) => (
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
                  <div className="absolute top-4 left-4">
                    <span className="tag-red">{puppy.gender}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="heading-magazine text-3xl text-ink-900">
                      {puppy.name}
                    </h3>
                    <span className="text-crimson-600 font-bold text-xl">
                      {puppy.price}
                    </span>
                  </div>
                  <div className="divider-thin mb-4" />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-ink-500">出生日期</span>
                      <span className="text-ink-900 font-medium">
                        {puppy.birthDate}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-500">父亲</span>
                      <span className="text-ink-900 font-medium">
                        {puppy.parents.father}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-500">母亲</span>
                      <span className="text-ink-900 font-medium">
                        {puppy.parents.mother}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-ink-500 mt-4 line-clamp-2">
                    {puppy.description}
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-ink-900 font-semibold border-b-2 border-crimson-500 pb-1 group-hover:gap-3 transition-all text-sm">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 购犬须知 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag-red mb-4 inline-block">购犬须知</span>
          <h2 className="heading-magazine text-4xl text-ink-900 mb-8">
            购犬流程与保障
          </h2>
          <div className="divider-thin mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-ink-900 mb-4">购犬流程</h3>
              <ol className="space-y-3 text-ink-700">
                <li className="flex gap-3">
                  <span className="text-crimson-500 font-bold">1.</span>
                  <span>邮件联系我们，了解幼犬详情和 availability</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-crimson-500 font-bold">2.</span>
                  <span>预约到犬舍实地看犬，或视频远程选犬</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-crimson-500 font-bold">3.</span>
                  <span>支付定金预留幼犬，签订购犬协议</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-crimson-500 font-bold">4.</span>
                  <span>幼犬完成全部免疫后，安排交付或托运</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-crimson-500 font-bold">5.</span>
                  <span>提供CKU血统证书及健康保障</span>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink-900 mb-4">售后保障</h3>
              <ul className="space-y-3 text-ink-700">
                <li className="flex gap-3">
                  <span className="text-crimson-500 font-bold">✓</span>
                  <span>提供CKU注册纯种犬血统证书</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-crimson-500 font-bold">✓</span>
                  <span>已接种疫苗、完成驱虫，附免疫记录</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-crimson-500 font-bold">✓</span>
                  <span>15天内健康问题可退换</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-crimson-500 font-bold">✓</span>
                  <span>终身饲养咨询和训练指导</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-crimson-500 font-bold">✓</span>
                  <span>附赠饲养手册和初期犬粮</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact/" className="btn-red">
              咨询购犬
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
