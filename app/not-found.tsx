import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-ink-50">
      <div className="text-center max-w-lg">
        <div className="heading-magazine text-9xl text-ink-200 mb-4">404</div>
        <div className="divider-thin mb-8" />
        <h1 className="heading-magazine text-3xl text-ink-900 mb-4">
          页面未找到
        </h1>
        <p className="text-ink-500 mb-10">
          您访问的页面可能已被移除或暂时不可用。请返回首页继续浏览，或通过邮件联系我们。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-red">
            返回首页
          </Link>
          <a
            href="mailto:lov0u@foxmail.com"
            className="btn-outline-dark"
          >
            邮件咨询
          </a>
        </div>
      </div>
    </div>
  );
}
