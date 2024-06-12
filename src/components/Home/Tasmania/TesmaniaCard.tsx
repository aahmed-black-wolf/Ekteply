import React from "react";

import { Avatar, ScrollShadow } from "@nextui-org/react";

export default function TesmaniaCard() {
  /* eslint-disable react/no-unescaped-entities */
  return (
    <div className="bg-light-900  flex flex-col gap-[20px] rounded-md p-4 h-full w-full">
      <div className="flex justify-end text-main-900">مدير المبيعات</div>
      <div className="flex justify-center items-center flex-col gap-3">
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          size="lg"
        />
        <div>احمد عادل</div>
      </div>
      <ScrollShadow
        className="h-[100px] lg:h-[150px] text-center px-[20px]"
        hideScrollBar
      >
        لقد كانت تجربتي مع موقع اكتبلي مذهلة بكل معنى الكلمة. حيث تمكنت من توفير
        وقت كبير وجهد في كتابة البريد الإلكتروني والوثائق. ما أعجبني حقًا هو
        التنوع الكبير في اللغات والصيغ التي يدعمها الموقع. إذا كنت بحاجة إلى
        كتابة مستند بلغة مختلفة أو بصيغة معينة، فإن اكتبلي هو المكان المثالي. لا
        يقتصر الأمر على ذلك فقط، بل يمكنني أيضًا الوصول إلى الملفات التي تم
        كتابتها في أي وقت ومن أي مكان، وهذا يعني أن لدي نسخًا احتياطية دائمة
        لأعمالي. ببساطة، اكتبلي هو الحلاق لكتابة الوثائق بشكل احترافي وفعال.
      </ScrollShadow>
    </div>
  );
}
