import React, { ReactNode } from 'react';

import { cn } from '@/src/libs/cn';

export default function Center({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: string;
}) {
  return (
    <div
      className={cn(
        "w-[95%]   pt-[10px] md:p-0   md:mt-[115px] flex flex-col gap-[200px] lg:gap-[400px]  lg:w-[90%] 2xl:w-[80%] mx-auto",
        styles && styles
      )}
    >
      {children}
    </div>
  );
}
