"use client";

import { ReactNode } from "react";

import { cn } from "@/src/libs/cn";
import { Button } from "@nextui-org/react";

import Center from "../Common/Layout/Center";
import AuthBanner from "./AuthBanner";

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
          "flex lg:flex-row flex-col   mt-[50px] md:mt-0  md:items-end lg:justify-between w-full h-[80vh]",
          slug && "mt-[10px]"
        )}
      >
        {children}
        <AuthBanner src={src} />
      </div>
      <Button
        variant="bordered"
        className=" border-none p-0 fixed left-1/2 translate-x-[-50%] bottom-5  lg:bottom-10  h-max flex underline hover:bg-transparent text-main-900 justify-end"
      >
        شروط الاستخدام - سياسه الخصوصيه
      </Button>
    </Center>
  );
}
