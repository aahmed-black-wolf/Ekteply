import React from "react";

export default function Title() {
  return (
    <div className="flex flex-col gap-[30px] lg:gap-[40px]">
      <div className="lg:text-[3rem] text-[1.5rem] leading-[41px] font-[700] text-center">
        شاهد كيف تستخدم <span className="text-main-900">اكتبلي</span> وتحقق اكبر
        استفاده ؟
      </div>
      <div className="text-center text-[14px] leading-[31px] lg:text-[18px]">
        جميع الملفات التي يتم كتابتها يتم حفظها تلقائياً في ملفك الشخصي، مما
        يتيح لك تنزيلها في أي وقت كما يتم الاحتفاظ بسجلات جميع عمليات الكتابة
        التي تمت معالجتها مسبقًا، وبالإضافة إلى ذلك، يمكنك تنزيل الملفات بصيغ
        متعددة لضمان استفادتك القصوى
      </div>
    </div>
  );
}
