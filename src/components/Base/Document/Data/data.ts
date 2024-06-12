export const inputsLabels = [
  {
    placeholder: "عنوان البحث",
    label: "حقل الزامي",
    info: "عنوان مختصر أو بداية مقالة، منشور، إلخ....",
    require: true,
    name: "title",
  },
  {
    placeholder: "اسم الكاتب / المرسل",
    label: "حقل غير الزامي",
    info: "اسم الشخص الذي سيظهر في الملف المعالج",
    require: false,
    name: "writer_name",
  },
  {
    placeholder: "اسم الجهة / الشخص الموجه إليه",
    label: "حقل غير الزامي",
    info: "اسم الشركة التفصيلي أو اسم الشخص الأول والأخير",
    require: false,
    name: "entity_name",
  },
  {
    placeholder: "نوع المقال / البوست / نشاط الجهة / منصب الشخص",
    label: "حقل الزامي",
    info: "تحديد منصب الشخص: مهندس، مهني، معلم، إلخ.... تحديد الجهة: إدارية، خاصة، حكومية، إلخ... يمكن أيضًا تحديد نوعية المقال أو المنشور",
    require: true,
    name: "article_type",
  },
];

export const settings = {
  dots: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  centerPadding: 0,
  centerMode: false,
  arrows: false,
  adaptiveHeight: false,
  pauseOnHover: true,
  draggable: false,
};
