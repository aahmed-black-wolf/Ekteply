import React, { ReactNode } from 'react';

import { Button } from '@nextui-org/react';

export default function OuterAuthBtn({
  icon,
  content,
}: {
  icon: ReactNode;
  content: string;
}) {
  return (
    <Button
      className=" justify-start w-full border-dark-400 border-[1px] items-center  p-3 rounded-md text-[1.5rem]"
      variant="bordered"
    >
      {icon}
      <span className="text-[15px]">{content}</span>
    </Button>
  );
}
