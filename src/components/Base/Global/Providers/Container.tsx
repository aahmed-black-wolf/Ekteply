import { ReactNode } from "react";

import { cn } from "@/src/libs/cn";

type Props = {
  children: ReactNode;
  fullWidth: boolean;
};

export default function Container({ children, fullWidth }: Props) {
  return (
    <div
      className={cn(
        "shadow-medium rounded-lg overflow-hidden flex-1 w-1/2 items-center flex justify-center md:px-[20px] md:pt-[10px] pb-[20px]",
        fullWidth && "w-full"
      )}
    >
      <div className="w-full">{children}</div>
    </div>
  );
}
