"use client";

import { ReactNode } from 'react';

import { cn } from '@/src/libs/cn';

import Center from '../Common/Layout/Center';
import AuthBanner from './AuthBanner';

type Props = {
  children: ReactNode;
  src: string;
  slug?: boolean;
};

export default function AuthLayout({ children, src, slug }: Props) {
  return (
    <Center>
      <div
        className={cn(
          "flex  mt-[50px] md:mt-0 min-h-[80vh] md:items-center justify-between w-full",
          slug && "mt-[10px]"
        )}
      >
        {children}
        <AuthBanner src={src} />
      </div>
    </Center>
  );
}
{
  /* <Checkbox
className="p-0 h-max flex underline hover:bg-transparent text-main-900 justify-end"
defaultSelected
size="sm"
>
شروط الاستخدام - سياسه الخصوصيه
</Checkbox> */
}
