import React from 'react';

import Image from 'next/legacy/image';

import { cn } from '@/src/libs/cn';

type Props = {
  content: string;
  icon: string;
  index: number;
};
export default function Box({ content, icon, index }: Props) {
  return (
    <div
      className={cn(
        "rounded-md flex h-full justify-center items-center bg-transparent  w-[160px]  md:w-[260px] shadow-medium lg:w-[300px]",
        index === 2 && "bg-main-900",
        index === 1 && "bg-main-900 md:bg-transparent"
      )}
    >
      <div className="flex flex-col  justify-center  h-[150px] items-center gap-[30px] w-full  rounded-lg">
        <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
          <Image
            width={100}
            height={100}
            layout="responsive"
            src={icon}
            alt="box-icon"
          />
        </div>
        <div
          className={cn(
            "md:text-xl text-main-900",
            index === 2 && "text-light-900",
            index === 1 && "text-light-900 md:text-main-900"
          )}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
