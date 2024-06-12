export const egyptian_entities: { category: string; entities: string[] }[] = [
  {
    category: "الحكومة المركزية",
    entities: [
      "مجلس الوزراء",
      "وزارة الداخلية",
      "وزارة المالية",
      "وزارة الصحة",
      "وزارة التربية والتعليم",
    ],
  },
  {
    category: "الهيئات القضائية",
    entities: ["المحكمة الدستورية العليا", "محكمة النقض", "محاكم الاستئناف"],
  },
  { category: "البرلمان", entities: ["مجلس النواب", "مجلس الشيوخ"] },
  { category: "السلطة التنفيذية المحلية", entities: ["محافظات ومراكز"] },
  { category: "الجهات الأمنية", entities: ["وزارة الداخلية", "الشرطة"] },
  {
    category: "القطاع المالي والاقتصادي",
    entities: [
      "البنك المركزي المصري",
      "هيئة الرقابة المالية",
      "وزارة التخطيط والتنمية الاقتصادية",
    ],
  },
  {
    category: "التعليم والبحث العلمي",
    entities: ["وزارة التربية والتعليم", "الجامعات والمؤسسات التعليمية الأخرى"],
  },
  { category: "الصحة", entities: ["وزارة الصحة والسكان"] },
  {
    category: "الإعلام والثقافة",
    entities: ["وزارة الإعلام", "هيئة الإذاعة والتلفزيون المصرية"],
  },
  { category: "الشؤون الدينية", entities: ["وزارة الأوقاف"] },
  { category: "السياحة والآثار", entities: ["وزارة السياحة والآثار"] },
  { category: "التنمية المحلية", entities: ["وزارة التنمية المحلية"] },
  { category: "البحث العلمي", entities: ["وزارة البحث العلمي"] },
  { category: "البيئة والموارد الطبيعية", entities: ["وزارة البيئة"] },
  {
    category: "الهيئات الاقتصادية",
    entities: [
      "الهيئة العامة للاستثمار والمناطق الحرة",
      "هيئة الرقابة الإدارية",
    ],
  },
];

export const theListOfTypes = [
  { label: "وزارة الأوقاف", value: "وزارة الأوقاف" },
  { label: "وزارة السياحة والآثار", value: "وزارة السياحة والآثار" },
  { label: "وزارة التنمية المحلية", value: "وزارة التنمية المحلية" },
  { label: "وزارة البحث العلمي", value: "وزارة البحث العلمي" },
  { label: "وزارة البيئة", value: "وزارة البيئة" },
  {
    label: "الهيئة العامة للاستثمار والمناطق الحرة",
    value: "الهيئة العامة للاستثمار والمناطق الحرة",
  },
  { label: "هيئة الرقابة الإدارية", value: "هيئة الرقابة الإدارية" },
  {
    label: "هيئة الإذاعة والتلفزيون المصرية",
    value: "هيئة الإذاعة والتلفزيون المصرية",
  },
  {
    label: "الجامعات والمؤسسات التعليمية الأخرى",
    value: "الجامعات والمؤسسات التعليمية الأخرى",
  },
  { label: "وزارة الصحة والسكان", value: "وزارة الصحة والسكان" },
  { label: "البنك المركزي المصري", value: "البنك المركزي المصري" },
  { label: "هيئة الرقابة المالية", value: "هيئة الرقابة المالية" },
  {
    label: "وزارة التخطيط والتنمية الاقتصادية",
    value: "وزارة التخطيط والتنمية الاقتصادية",
  },
  { label: "الشرطة", value: "الشرطة" },
  { label: "محافظات ومراكز", value: "محافظات ومراكز" },
  { label: "مجلس النواب", value: "مجلس النواب" },
  { label: "مجلس الشيوخ", value: "مجلس الشيوخ" },
  { label: "المحكمة الدستورية العليا", value: "المحكمة الدستورية العليا" },
  { label: "محكمة النقض", value: "محكمة النقض" },
  { label: "محاكم الاستئناف", value: "محاكم الاستئناف" },
  { label: "مجلس الوزراء", value: "مجلس الوزراء" },
  { label: "وزارة الداخلية", value: "وزارة الداخلية" },
  { label: "وزارة المالية", value: "وزارة المالية" },
  { label: "وزارة الصحة", value: "وزارة الصحة" },
  { label: "وزارة التربية والتعليم", value: "وزارة التربية والتعليم" },
  { label: "قطاع خاص", value: "قطاع خاص" },
  { label: "قطاع اداري", value: "قطاع اداري" },
];

export const modelType = [
  { label: "مختصر", value: "A" },
  { label: "دقيق", value: "B" },
  { label: "رسمي", value: "C" },
  { label: "تعبيري", value: "D" },
  { label: "شعبي", value: "F" },
];

export const fileFormat = [
  { label: "word", value: "word" },
  { label: "pdf", value: "pdf" },
  { label: "md", value: "md" },
];

export const linesNums = [
  { label: "50-10", value: "small" },
  { label: "100-50", value: "meduim" },
  { label: "200-100", value: "big" },
  { label: "500-200", value: "large" },
  { label: "1000-500", value: "huage" },
];

export const top120Languages = [
  { label: "الإنجليزية", value: "الإنجليزية" },
  { label: "الصينية", value: "الصينية" },
  { label: "الهندية", value: "الهندية" },
  { label: "الإسبانية", value: "الإسبانية" },
  { label: "الفرنسية", value: "الفرنسية" },
  { label: "العربية", value: "العربية" },
  { label: "البنغالية", value: "البنغالية" },
  { label: "البرتغالية", value: "البرتغالية" },
  { label: "الروسية", value: "الروسية" },
  { label: "الأردية", value: "الأردية" },
  { label: "الإندونيسية", value: "الإندونيسية" },
  { label: "الألمانية", value: "الألمانية" },
  { label: "السواحيلية", value: "السواحيلية" },
  { label: "الماراثية", value: "الماراثية" },
  { label: "التيلجو", value: "التيلجو" },
  { label: "التركية", value: "التركية" },
  { label: "التاميل", value: "التاميل" },
  { label: "التايلاندية", value: "التايلاندية" },
  // Additional Languages
  { label: "الملايو", value: "الملايو" },
  { label: "البنجابية", value: "البنجابية" },
  { label: "اليابانية", value: "اليابانية" },
  { label: "الكورية", value: "الكورية" },
  { label: "الفيتنامية", value: "الفيتنامية" },
  { label: "الجاوية", value: "الجاوية" },
  { label: "الفلبينية", value: "الفلبينية" },
  { label: "الكانتونية", value: "الكانتونية" },
  { label: "الإيطالية", value: "الإيطالية" },
  { label: "السودانية", value: "السودانية" },
  { label: "الهوسا", value: "الهوسا" },
  { label: "البورمية", value: "البورمية" },
  { label: "البولندية", value: "البولندية" },
  { label: "الصربية-الكرواتية", value: "الصربية-الكرواتية" },
  { label: "التاغالوغية", value: "التاغالوغية" },
  { label: "الأوكرانية", value: "الأوكرانية" },
  { label: "الجوجاراتية", value: "الجوجاراتية" },
  { label: "البهوجبوري", value: "البهوجبوري" },
  { label: "الميثيلي", value: "الميثيلي" },
  { label: "الأوزبكية", value: "الأوزبكية" },
  { label: "السندية", value: "السندية" },
  { label: "الأمهرية", value: "الأمهرية" },
  { label: "الفارسية/الفارسية", value: "الفارسية/الفارسية" },
  { label: "اليوروبا", value: "اليوروبا" },
  { label: "الخوسا", value: "الخوسا" },
  { label: "المالايالامية", value: "المالايالامية" },
  { label: "البافارية", value: "البافارية" },
  { label: "البشتو", value: "البشتو" },
  { label: "الكانادا", value: "الكانادا" },
  { label: "السلوفاكية", value: "السلوفاكية" },
  { label: "التركمانية", value: "التركمانية" },
  { label: "الإيجبو", value: "الإيجبو" },
  { label: "السوثو الشمالي", value: "السوثو الشمالي" },
  { label: "الهمونج", value: "الهمونج" },
  { label: "العربية الحجازية", value: "العربية الحجازية" },
  { label: "المالغاشية", value: "المالغاشية" },
  { label: "النيبالية", value: "النيبالية" },
  { label: "الأسامية", value: "الأسامية" },
  { label: "السينهالية", value: "السينهالية" },
  { label: "اللاتفية", value: "اللاتفية" },
  { label: "التسوانا", value: "التسوانا" },
  { label: "الكردية", value: "الكردية" },
  { label: "الأفريكانية", value: "الأفريكانية" },
  { label: "الإيلوكانو", value: "الإيلوكانو" },
  { label: "الفيجي هندي", value: "الفيجي هندي" },
  { label: "الناهواتل", value: "الناهواتل" },
  { label: "الأرمنية", value: "الأرمنية" },
  { label: "الكينيارواندا", value: "الكينيارواندا" },
  { label: "السلوفينية", value: "السلوفينية" },
  { label: "الزولو", value: "الزولو" },
  { label: "السران تونغو", value: "السران تونغو" },
  { label: "الكيتشوا", value: "الكيتشوا" },
  { label: "الموسي", value: "الموسي" },
  { label: "الكونكاني", value: "الكونكاني" },
  { label: "الفنلندية", value: "الفنلندية" },
  { label: "التولو", value: "التولو" },
  { label: "الأورومو", value: "الأورومو" },
  { label: "الأويغور", value: "الأويغور" },
  { label: "الأذربيجانية", value: "الأذربيجانية" },
  { label: "المقدونية", value: "المقدونية" },
  { label: "الطاجيكية", value: "الطاجيكية" },
  { label: "البلوشية", value: "البلوشية" },
  { label: "الهوائية", value: "الهوائية" },
  { label: "السندانية", value: "السندانية" },
  { label: "النافاهو", value: "النافاهو" },
  { label: "الباشكير", value: "الباشكير" },
  { label: "اللوكسمبورغية", value: "اللوكسمبورغية" },
  { label: "الكورسيكية", value: "الكورسيكية" },
  { label: "السانتالي", value: "السانتالي" },
];