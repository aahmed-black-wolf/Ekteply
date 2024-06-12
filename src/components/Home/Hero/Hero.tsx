"use client";
import Title from "./Title/Title";
import { types_data } from "./TypingAnimationProps/types.data";
import TypingAnimation from "./TypingAnimationProps/TypingAnimationProps";
import Wave from "./Wave/Wave";

export default function page() {
  return (
    <div
      className={
        "bg-main-900 flex-wrap lg:flex-nowrap overflow-hidden flex h-max   lg:p-[70px] justify-center lg:justify-between relative  w-full"
      }
    >
      <Title />
      <TypingAnimation typingSpeed={30} content={[types_data.slide_1]} />
      <Wave />
    </div>
  );
}
