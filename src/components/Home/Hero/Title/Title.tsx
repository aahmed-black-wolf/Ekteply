"use client";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";

import line from "@/public/icons/line.svg";
import { Button } from "@nextui-org/react";

export default function Title() {
  const router = useRouter();
  return (
    <div className="flex items-center relative z-[10] flex-col flex-1 p-10 gap-[30px]">
      <h1 className="baloo-font text-[3rem] lg:text-[6rem] font-[700] text-dark-900">
        مرحبًا بك في أكتبلي
      </h1>
      <div className="w-max h-max">
        <div className="lg:hidden">
          <Image src={line} alt="line" property="true" priority width={350} />
        </div>
        <div className="hidden lg:block">
          <Image src={line} alt="line" property="true" priority />
        </div>
      </div>
      <div className="text-center text-light-900  lg:p-0 leading-[31px]">
        موقع اكتبلي يعتبر رائدًا ومبتكرًا في مجاله، حيث يُقدم دعمًا قويًا
        للمؤسسات الحكومية والطلاب ورواد الأعمال في كتابة المستندات الرسمية، بما
        في ذلك الملفات والبريد الإلكتروني والوثائق. يتميز بتوافره بالعديد من
        اللغات والصيغ المختلفة، مما يجعله وجهة موثوقة لمن يتطلعون إلى الجودة
        والاحترافية في كتابة وتنسيق المستندات.
      </div>
      <Button
        onClick={() => router.push("/dashboard")}
        className="bg-dark-900 w-[200px] text-light-900 font-[700]"
      >
        جرب الان
      </Button>
    </div>
  );
}
