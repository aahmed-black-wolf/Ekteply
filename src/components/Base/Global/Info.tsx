import { ReactNode } from "react";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

export default function Info({
  position,
  content,
  children,
}: {
  position?: any;
  content?: string;
  children: ReactNode;
}) {
  return (
    <Popover backdrop="blur" placement={position || "bottom"} showArrow={true}>
      <PopoverTrigger>
        <Button
          variant="flat"
          className="min-w-[23px] h-[23px] p-0 bg-primary-900 text-main-900"
        >
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="py-2 px-4 shadow-xl text-black bg-gradient-to-tl from-light-900 to-main-900">
        {content}
      </PopoverContent>
    </Popover>
  );
}
