import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="heading-magazine text-3xl text-white leading-none">
                清风犬舍
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-ink-500 mt-2">
                Qing Feng Kennel · Est. 2018
              </div>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed max-w-md">
              临沂清风犬舍是一家专业的杜宾犬繁殖犬舍，位于烟台。我们致力于纯种杜宾犬的繁殖与推广，拥有德国、欧洲冠军血统种犬，提供优质幼犬出售和专业训练服务。坚持科学繁殖、健康优先的理念，繁殖出体格健壮、性格稳定的杜宾犬。
            </p>
            <div className="mt-6">
              <span className="tag-red">CKU注册犬舍</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
              导航
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <Link
                href="/"
                className="text-sm text-ink-400 hover:text-crimson-400 transition-colors"
              >
                首页
              </Link>
              <Link
                href="/studs/"
                className="text-sm text-ink-400 hover:text-crimson-400 transition-colors"
              >
                种犬展示
              </Link>
              <Link
                href="/puppies/"
                className="text-sm text-ink-400 hover:text-crimson-400 transition-colors"
              >
                幼犬出售
              </Link>
              <Link
                href="/about/"
                className="text-sm text-ink-400 hover:text-crimson-400 transition-colors"
              >
                关于我们
              </Link>
              <Link
                href="/news/"
                className="text-sm text-ink-400 hover:text-crimson-400 transition-colors"
              >
                新闻资讯
              </Link>
              <Link
                href="/contact/"
                className="text-sm text-ink-400 hover:text-crimson-400 transition-colors"
              >
                联系我们
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
              联系方式
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:lov0u@foxmail.com"
                className="flex items-center gap-3 text-sm text-ink-400 hover:text-crimson-400 transition-colors"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
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
              <div className="flex items-center gap-3 text-sm text-ink-400">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                烟台
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-ink-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-ink-500">
              © {new Date().getFullYear()} 临沂清风犬舍 xsc888.cn 保留所有权利
            </p>
            <div className="flex items-center gap-4 text-sm text-ink-500">
              <Link href="/" className="hover:text-crimson-400 transition-colors">
                首页
              </Link>
              <span className="text-ink-700">|</span>
              <Link href="/about" className="hover:text-crimson-400 transition-colors">
                关于我们
              </Link>
              <span className="text-ink-700">|</span>
              <Link href="/contact" className="hover:text-crimson-400 transition-colors">
                联系我们
              </Link>
              <span className="text-ink-700">|</span>
              <Link href="/sitemap.xml" className="hover:text-crimson-400 transition-colors">
                网站地图
              </Link>
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-2 text-xs text-ink-600">
            <Link
              href="/sitemap.xml"
              className="hover:text-crimson-400 transition-colors"
            >
              网站地图
            </Link>
            <span className="hidden md:inline">|</span>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-crimson-400 transition-colors"
            >
              鲁ICP备2024071942号
            </a>
            <span className="hidden md:inline">|</span>
            <span>
              技术支持：{" "}
              <a
                href="https://ra0.cn/wangzhan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-crimson-400 transition-colors"
              >
                青衣网络
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
