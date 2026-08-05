import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于我们 - 清风犬舍",
  description:
    "临沂清风犬舍是一家专业杜宾犬繁殖犬舍，位于烟台。拥有德国、欧洲冠军血统种犬，坚持科学繁殖、健康优先的理念，培育体格健壮、性格稳定的纯种杜宾犬。",
  keywords: ["关于清风犬舍", "杜宾犬繁殖", "烟台犬舍", "杜宾犬舍介绍"],
};

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&q=80";
const KENNEL_IMAGE =
  "https://images.unsplash.com/photo-1556546346-ad2946663684?w=1200&q=80";

const philosophies = [
  {
    number: "01",
    title: "健康优先",
    description:
      "所有种犬均经过全面的基因检测和健康筛查，包括DCM心肌病、vWD血管性血友病等杜宾犬常见遗传病检测。我们坚持只让健康的种犬参与繁殖，从基因源头保障幼犬健康。",
  },
  {
    number: "02",
    title: "血统纯正",
    description:
      "引进德国SV、欧洲FCI、美国AKC注册血统种犬，每一只种犬都拥有完整的血统证书和谱系记录。幼犬均可提供CKU注册的纯种犬血统证书，血统清晰可追溯。",
  },
  {
    number: "03",
    title: "性格稳定",
    description:
      "注重种犬的性格筛选，选择自信、稳定、服从性好的种犬进行繁殖。幼犬从出生起接受系统化的社会化训练，培养其对人类友善、自信而不胆怯的良好性格。",
  },
  {
    number: "04",
    title: "终身服务",
    description:
      "我们不只是出售幼犬，更提供终身的饲养咨询和训练指导服务。每位购犬客户都将获得专业的饲养手册和持续的售后支持，确保杜宾犬健康成长。",
  },
];

const honors = [
  { title: "CKU注册犬舍", year: "2018", desc: "中国犬业联盟正式注册犬舍" },
  { title: "FCI血统认证", year: "2019", desc: "国际犬业联盟血统认证犬舍" },
  { title: "基因检测合格", year: "2020", desc: "所有种犬通过遗传病基因检测" },
  { title: "繁殖A级评估", year: "2022", desc: "CKU繁殖评估A级犬舍" },
  { title: "年度优秀犬舍", year: "2023", desc: "烟台地区年度优秀繁殖犬舍" },
];

const team = [
  {
    name: "王清风",
    role: "犬舍主理人",
    desc: "15年杜宾犬繁殖经验，CKU认证繁殖人，多次担任犬展审查助理。",
    image: "https://images.unsplash.com/photo-1546460573-f25a6e00db26?w=600&q=80",
  },
  {
    name: "李训",
    role: "首席训练师",
    desc: "IGP工作犬训练师，擅长杜宾犬服从训练和护卫训练，指导多只赛犬获得优异成绩。",
    image: "https://images.unsplash.com/photo-1546460573-12fb994f025d?w=600&q=80",
  },
  {
    name: "张医",
    role: "兽医顾问",
    desc: "执业兽医师，专注犬类遗传病研究，负责犬舍种犬健康管理和幼犬免疫计划。",
    image: "https://images.unsplash.com/photo-1567985287269-d081a3fcf46f?w=600&q=80",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-ink-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="tag-red mb-6 inline-block">关于清风犬舍</span>
          <h1 className="heading-magazine text-6xl md:text-8xl mb-6">
            专业繁殖
            <br />
            用心繁育
          </h1>
          <p className="text-xl text-ink-300 max-w-2xl font-serif italic">
            "我们不只是繁殖犬只，更是在延续一个优良的血统。"
          </p>
        </div>
      </section>

      {/* 犬舍简介 - 杂志式排版 */}
      <section className="py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={ABOUT_IMAGE}
                alt="清风犬舍"
                className="w-full aspect-[4/5] object-cover magazine-photo"
              />
              <div className="absolute -top-6 -right-6 bg-ink-900 text-white px-8 py-4 hidden md:block">
                <div className="text-3xl font-bold">2018</div>
                <div className="text-sm tracking-wider">犬舍成立</div>
              </div>
            </div>
            <div>
              <h2 className="heading-magazine text-4xl md:text-5xl text-ink-900 mb-8">
                临沂清风犬舍
              </h2>
              <div className="divider-thin mb-8" />
              <p className="text-ink-700 text-lg leading-relaxed mb-6">
                临沂清风犬舍成立于2018年，坐落于美丽的海滨城市烟台。我们是一家专注于纯种杜宾犬繁殖的专业犬舍，拥有标准的犬舍设施、专业的繁殖团队和完善的售后服务体系。
              </p>
              <p className="text-ink-500 leading-relaxed mb-6">
                犬舍占地2000余平方米，建有标准化犬舍、产房、运动场和训练场。我们引进了多只德国、欧洲、美国冠军血统种犬，建立了完善的繁殖体系，每年繁殖优质杜宾幼犬20-30只。
              </p>
              <p className="text-ink-500 leading-relaxed">
                清风犬舍秉承"科学繁殖、健康优先、血统纯正、性格稳定"的理念，致力于培育符合FCI标准的优秀杜宾犬。我们的幼犬已遍布全国各地，获得了众多杜宾爱好者的一致好评。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 繁殖理念 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="tag-red mb-4 inline-block">繁殖理念</span>
            <h2 className="heading-magazine text-5xl md:text-6xl text-ink-900">
              四大核心原则
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {philosophies.map((item) => (
              <div key={item.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="heading-magazine text-6xl text-crimson-500">
                    {item.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ink-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-ink-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 荣誉资质 */}
      <section className="py-24 bg-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="tag-red mb-4 inline-block">荣誉资质</span>
            <h2 className="heading-magazine text-5xl md:text-6xl text-ink-900">
              认证与荣誉
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {honors.map((honor) => (
              <div
                key={honor.title}
                className="border border-ink-200 p-8 bg-ink-50 hover:border-crimson-500 transition-colors"
              >
                <div className="text-3xl font-bold text-crimson-500 mb-2 heading-magazine">
                  {honor.year}
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-2">
                  {honor.title}
                </h3>
                <p className="text-sm text-ink-500">{honor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-24 bg-ink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="tag-red mb-4 inline-block">团队介绍</span>
            <h2 className="heading-magazine text-5xl md:text-6xl">
              专业团队
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover magazine-photo mb-6"
                />
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-crimson-400 text-sm mb-3 tracking-wider uppercase">
                  {member.role}
                </p>
                <p className="text-ink-400 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-magazine text-4xl text-ink-900 mb-6">
            想了解更多？
          </h2>
          <p className="text-ink-500 mb-8">
            欢迎联系我们，了解更多关于清风犬舍和杜宾犬的信息。
          </p>
          <Link href="/contact/" className="btn-red">
            联系我们
          </Link>
        </div>
      </section>
    </div>
  );
}
