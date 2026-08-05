import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系清风犬舍，咨询杜宾犬繁殖、幼犬购买、训练服务等。邮箱：lov0u@foxmail.com，地址：烟台。",
  keywords: ["联系清风犬舍", "杜宾犬咨询", "幼犬购买", "烟台犬舍"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
