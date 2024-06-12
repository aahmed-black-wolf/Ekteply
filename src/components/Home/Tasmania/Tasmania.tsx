import Title from "@/src/components/Common/Layout/Title";

import TSlider from "./TSlider";

export default function Tasmania() {
  return (
    <div
      className="bg-dark-800 py-[60px]  lg:py-[100px]  w-full"
      style={{
        boxShadow: "1px 1px 10px 1000px var(--dark-color-800)",
        clipPath: "inset(0px -100% 0px -100%)",
      }}
    >
      <Title
        title="تعرَّف على تجارب مستخدمي "
        subTitle="اكتبلي"
        content=""
        subColor="text-light-900"
        key="Tasmania"
      />
      <TSlider />
    </div>
  );
}
