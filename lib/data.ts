/**
 * 临沂清风犬舍 - 种犬与幼犬数据
 */

export interface Stud {
  slug: string;
  name: string;
  gender: "公" | "母";
  birthDate: string;
  bloodline: string;
  color: string;
  description: string;
  image: string;
  measurements: {
    height: string;
    weight: string;
    chest: string;
  };
  personality: string[];
  pedigree: string;
  achievements: string[];
}

export interface Puppy {
  slug: string;
  name: string;
  gender: "公" | "母";
  birthDate: string;
  parents: { father: string; mother: string };
  price: string;
  vaccinated: boolean;
  description: string;
  image: string;
  personality: string[];
}

/* 真实 Unsplash 杜宾犬照片 URL */
const UNSPLASH_BASE = "https://images.unsplash.com";

export const studs: Stud[] = [
  {
    slug: "leiting",
    name: "雷霆",
    gender: "公",
    birthDate: "2021-03-15",
    bloodline: "德国血统",
    color: "黑色铁锈色",
    description:
      "雷霆是清风犬舍的当家种公，拥有纯正的德国杜宾血统。体格健壮，肌肉线条分明，性格稳定而自信。在多项犬展中获得优异成绩，是理想的工作犬和家庭护卫犬伴侣。其基因遗传力强，后代均展现出优秀的体型和性格特征。",
    image: `${UNSPLASH_BASE}/photo-1599586477491-f86db60c0c1c?w=1200&q=80`,
    measurements: {
      height: "72cm",
      weight: "42kg",
      chest: "88cm",
    },
    personality: ["自信沉稳", "高度服从", "警觉性强", "亲人友善"],
    pedigree: "德国SV注册犬，父系为国际冠军CH.Vom Hause Wagner，母系为德国本土冠军血统",
    achievements: [
      "2022年CKU本部展杜宾种犬组优胜",
      "2023年烟台全犬种展工作犬组亚军",
      "通过IGP1护卫犬测试",
    ],
  },
  {
    slug: "yinghou",
    name: "影后",
    gender: "母",
    birthDate: "2021-08-20",
    bloodline: "欧洲冠军血统",
    color: "黑色铁锈色",
    description:
      "影后是清风犬舍的核心种母，拥有欧洲冠军血统。体态优雅，线条流畅，兼具力量与美感。性格温顺而聪慧，对家人极为忠诚，是出色的家庭伴侣和繁殖母犬。其后代均继承了其优雅的体态和稳定的性格。",
    image: `${UNSPLASH_BASE}/photo-1588095210434-3a062445f093?w=1200&q=80`,
    measurements: {
      height: "66cm",
      weight: "32kg",
      chest: "80cm",
    },
    personality: ["温顺优雅", "聪慧敏捷", "忠诚护主", "亲和力强"],
    pedigree: "欧洲FCI注册犬，父系为欧洲冠军Multi CH.Di Altomare，母系为荷兰冠军血统",
    achievements: [
      "2022年FCI亚洲展杜宾母犬组优胜",
      "2023年CKU区域展最佳母犬",
      "繁殖评估A级",
    ],
  },
  {
    slug: "zhanshen",
    name: "战神",
    gender: "公",
    birthDate: "2020-11-10",
    bloodline: "美国血统",
    color: "红色铁锈色",
    description:
      "战神是清风犬舍引进的美国血统种公，拥有罕见的红色铁锈色被毛。体型魁梧，力量感十足，是典型的工作线杜宾。性格坚毅勇敢，护卫欲望强烈，同时具备良好的家庭伴侣犬特质。是红色杜宾繁殖的首选种公。",
    image: `${UNSPLASH_BASE}/photo-1559190394-df5a28aab5c5?w=1200&q=80`,
    measurements: {
      height: "74cm",
      weight: "45kg",
      chest: "92cm",
    },
    personality: ["坚毅勇敢", "护卫欲强", "力量充沛", "训练性佳"],
    pedigree: "美国AKC注册犬，父系为美国冠军GCH Camelot's Red Baron，母系为美国TOP10血统",
    achievements: [
      "2021年AKC杜宾专项展BOB",
      "2022年IGP2护卫犬测试通过",
      "2023年中国杜宾俱乐部展全场总冠军",
    ],
  },
  {
    slug: "chiyan",
    name: "赤焰",
    gender: "公",
    birthDate: "2022-01-05",
    bloodline: "德国血统",
    color: "红色铁锈色",
    description:
      "赤焰是清风犬舍新生代种公，继承了父亲雷霆的优秀基因。体格匀称，运动能力出众，性格活泼而稳定。红色铁锈色被毛光亮，是未来繁殖的新星。年轻有为，正在各项赛事中崭露头角。",
    image: `${UNSPLASH_BASE}/photo-1556546346-ad2946663684?w=1200&q=80`,
    measurements: {
      height: "70cm",
      weight: "38kg",
      chest: "85cm",
    },
    personality: ["活泼好动", "运动力强", "学习力佳", "稳定可靠"],
    pedigree: "德国SV注册犬，父系为本犬舍种公雷霆，母系为欧洲冠军血统",
    achievements: [
      "2023年CKU青年组杜宾优胜",
      "2024年烟台全犬种展青年组冠军",
    ],
  },
];

export const puppies: Puppy[] = [
  {
    slug: "xiaolei",
    name: "小雷",
    gender: "公",
    birthDate: "2025-05-01",
    parents: { father: "雷霆", mother: "影后" },
    price: "15000元",
    vaccinated: true,
    description:
      "小雷是雷霆与影后的优秀后代，继承了父亲的健壮体格和母亲的优雅气质。3个月大，已完成第一针疫苗接种，驱虫完毕。性格活泼亲人，是理想的家庭伴侣犬候选。",
    image: `${UNSPLASH_BASE}/photo-1517854883321-ab2a463cce90?w=1200&q=80`,
    personality: ["活泼亲人", "好奇心强", "学习力佳", "社交良好"],
  },
  {
    slug: "xiaoying",
    name: "小影",
    gender: "母",
    birthDate: "2025-06-05",
    parents: { father: "战神", mother: "影后" },
    price: "18000元",
    vaccinated: true,
    description:
      "小影是战神与影后的结晶，拥有罕见的红色铁锈色被毛。2个月大，已完成第一针疫苗接种，驱虫完毕。体态优美，性格温顺，是极具潜力的展示犬和繁殖犬候选。",
    image: `${UNSPLASH_BASE}/photo-1564501937358-66d9dffd8bb2?w=1200&q=80`,
    personality: ["温顺乖巧", "聪明伶俐", "颜值出众", "亲人粘人"],
  },
  {
    slug: "xiaozhan",
    name: "小战",
    gender: "公",
    birthDate: "2025-04-10",
    parents: { father: "雷霆", mother: "影后" },
    price: "16000元",
    vaccinated: true,
    description:
      "小战是雷霆与影后的另一优秀后代，4个月大，已完成两针疫苗接种和全套驱虫。体格壮实，性格自信而稳定，展现出优秀的工作犬潜质。已开始基础服从训练。",
    image: `${UNSPLASH_BASE}/photo-1568308389933-4d5b260272ff?w=1200&q=80`,
    personality: ["自信稳重", "体格壮实", "服从性好", "护卫意识初显"],
  },
];

/**
 * 获取所有种犬 slug
 */
export function getAllStudSlugs(): string[] {
  return studs.map((s) => s.slug);
}

/**
 * 根据slug获取种犬
 */
export function getStudBySlug(slug: string): Stud | undefined {
  return studs.find((s) => s.slug === slug);
}

/**
 * 获取所有幼犬 slug
 */
export function getAllPuppySlugs(): string[] {
  return puppies.map((p) => p.slug);
}

/**
 * 根据slug获取幼犬
 */
export function getPuppyBySlug(slug: string): Puppy | undefined {
  return puppies.find((p) => p.slug === slug);
}
