import React, { ReactNode } from "react";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

export default function Drop({
  trigger,
  children,
}: {
  trigger: ReactNode;
  children: ReactNode;
}) {
  return (
    <Popover placement="bottom" showArrow={true} backdrop="transparent">
      <PopoverTrigger>
        <Button
          variant="bordered"
          className="min-w-[50px] p-0 border-none h-[50px]  text-[1.5rem]"
        >
          {trigger}
        </Button>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
}
