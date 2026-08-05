"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 构建邮件链接
    const subject = encodeURIComponent(
      `【清风犬舍咨询】${form.name} - 杜宾犬咨询`
    );
    const body = encodeURIComponent(
      `姓名：${form.name}\n邮箱：${form.email}\n\n留言：\n${form.message}`
    );
    window.location.href = `mailto:lov0u@foxmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-ink-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag-red mb-6 inline-block">联系我们</span>
          <h1 className="heading-magazine text-6xl md:text-8xl mb-6">
            取得联系
          </h1>
          <p className="text-xl text-ink-300 max-w-2xl">
            无论您想了解杜宾犬品种、咨询幼犬购买，还是需要专业的训练建议，我们都欢迎您的联系。
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="tag-red mb-4 inline-block">联系方式</span>
              <h2 className="heading-magazine text-4xl text-ink-900 mb-8">
                欢迎咨询
              </h2>
              <div className="divider-thin mb-8" />

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ink-900 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
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
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink-900 tracking-wider uppercase mb-1">
                      电子邮箱
                    </h3>
                    <a
                      href="mailto:lov0u@foxmail.com"
                      className="text-lg text-ink-700 hover:text-crimson-500 transition-colors"
                    >
                      lov0u@foxmail.com
                    </a>
                    <p className="text-sm text-ink-500 mt-1">
                      我们会在24小时内回复您的邮件
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ink-900 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
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
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink-900 tracking-wider uppercase mb-1">
                      犬舍地址
                    </h3>
                    <p className="text-lg text-ink-700">烟台</p>
                    <p className="text-sm text-ink-500 mt-1">
                      欢迎预约到犬舍实地参观
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-crimson-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink-900 tracking-wider uppercase mb-1">
                      服务时间
                    </h3>
                    <p className="text-lg text-ink-700">全年无休</p>
                    <p className="text-sm text-ink-500 mt-1">
                      随时欢迎您的咨询
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-ink-100 border-l-4 border-crimson-500">
                <p className="text-sm text-ink-700 leading-relaxed">
                  <strong className="text-ink-900">温馨提示：</strong>
                  为保证犬只健康和繁殖质量，我们采用预约制参观。请提前邮件预约，我们将为您安排合适的参观时间。
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <span className="tag-red mb-4 inline-block">留言表单</span>
              <h2 className="heading-magazine text-4xl text-ink-900 mb-8">
                发送留言
              </h2>
              <div className="divider-thin mb-8" />

              {submitted ? (
                <div className="p-8 bg-white border border-ink-200 text-center">
                  <div className="w-16 h-16 bg-crimson-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
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
                  </div>
                  <h3 className="text-xl font-bold text-ink-900 mb-3">
                    留言已准备发送
                  </h3>
                  <p className="text-ink-500 text-sm">
                    您的邮件客户端已打开，请确认发送。如果未自动打开，请直接发送邮件至
                    <a
                      href="mailto:lov0u@foxmail.com"
                      className="text-crimson-500 font-medium"
                    >
                      {" "}
                      lov0u@foxmail.com
                    </a>
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-ink-500 hover:text-ink-900 underline"
                  >
                    重新填写
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                      姓名 <span className="text-crimson-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-ink-300 text-ink-900 focus:outline-none focus:border-ink-900 transition-colors"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                      邮箱 <span className="text-crimson-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-ink-300 text-ink-900 focus:outline-none focus:border-ink-900 transition-colors"
                      placeholder="您的邮箱地址"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                      留言 <span className="text-crimson-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-ink-300 text-ink-900 focus:outline-none focus:border-ink-900 transition-colors resize-none"
                      placeholder="请描述您的需求，如咨询幼犬购买、训练服务等..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-ink-900 text-white font-semibold hover:bg-crimson-500 transition-colors"
                  >
                    发送留言
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
