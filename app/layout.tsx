import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_NAME = "清风犬舍";
const SITE_DOMAIN = "xsc888.cn";
const SITE_EMAIL = "lov0u@foxmail.com";
const SITE_ADDRESS = "烟台";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE_DOMAIN}`),
  title: {
    default: `${SITE_NAME} - 杜宾犬专业繁殖 | 种犬展示 · 幼犬出售 · 训练服务`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_NAME}是专业杜宾犬繁殖犬舍，位于${SITE_ADDRESS}。提供纯种杜宾种犬展示、优质幼犬出售、犬舍介绍、专业训练服务。拥有德国、欧洲冠军血统杜宾种犬，繁殖健康、稳定、优良性格的杜宾犬。`,
  keywords: [
    "杜宾犬",
    "杜宾犬繁殖",
    "杜宾犬出售",
    "杜宾幼犬",
    "种犬展示",
    "清风犬舍",
    "烟台杜宾犬",
    "杜宾犬训练",
    "纯种杜宾",
    "德国杜宾",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: `https://${SITE_DOMAIN}`,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: `https://${SITE_DOMAIN}`,
    title: `${SITE_NAME} - 杜宾犬专业繁殖`,
    description: `${SITE_NAME}是专业杜宾犬繁殖犬舍，位于${SITE_ADDRESS}。提供纯种杜宾种犬展示、优质幼犬出售、专业训练服务。`,
    siteName: SITE_NAME,
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PetStore",
              name: SITE_NAME,
              description: `${SITE_NAME}是专业杜宾犬繁殖犬舍，提供纯种杜宾种犬展示、优质幼犬出售、专业训练服务。`,
              url: `https://${SITE_DOMAIN}`,
              email: SITE_EMAIL,
              address: {
                "@type": "PostalAddress",
                addressLocality: SITE_ADDRESS,
                addressCountry: "CN",
              },
              areaServed: "烟台及周边地区",
              makesOffer: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "纯种杜宾犬幼犬",
                  category: "宠物犬",
                },
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
