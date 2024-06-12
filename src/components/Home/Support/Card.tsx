import React from "react";

import Title from "@/src/components/Common/Layout/Title";

import Form from "./Form";

export default function Card() {
  return (
    <div className="lg:absolute lg:bg-dark-800 py-[30px] h-max px-5 md:p-10 text-light-900 flex flex-col gap-[50px] rounded-lg lg:rounded-2xl lg:shadow-medium z-10 left-[100px] top-0 w-full  lg:w-[50%]">
      <Title
        margin={true}
        title="هل لديك سؤال؟"
        color="text-main-900 lg:text-light-900"
        subTitle=""
        content="سنتواصل معك في أقرب وقت ممكن، نحن نهتم بعملائنا بشكل كبير لنقدم لهم الدعم اللازم وخدمات ممتازة."
        key={"Support"}
      />
      <Form />
    </div>
  );
}
