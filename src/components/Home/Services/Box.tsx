import React from "react";

import Image from "next/legacy/image";

import { cn } from "@/src/libs/cn";

type Props = {
  content: string;
  icon: string;
  index: number;
};
export default function Box({ content, icon, index }: Props) {
  return (
    <div
      className={cn(
        "h-[240px] rounded-md flex justify-center items-center bg-transparent shadow-medium w-[300px]",
        index === 2 && "scale-[1.2] bg-main-900"
      )}
    >
      <div className="flex flex-col  justify-between h-[150px] items-center gap-2 w-full  rounded-lg">
        <div>
          <Image src={icon} alt="box-icon" />
        </div>
        <div
          className={cn(
            "text-xl text-main-900",
            index === 2 && "text-light-900"
          )}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
