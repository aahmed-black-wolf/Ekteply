import React from 'react';

import { useRouter } from 'next/navigation';
import { DiApple } from 'react-icons/di';
import { FcGoogle } from 'react-icons/fc';

import {
  Button,
  Divider,
} from '@nextui-org/react';

import OuterAuthBtn from './OuterAuthBtn';

export default function AuthFooter({
  routeText,
  route,
  routeQus,
}: {
  routeText: string;
  route: string;
  routeQus: string;
}) {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col gap-5">
      <Button
        onClick={() => router.push(route)}
        variant="bordered"
        className="w-full border-none p-0 h-max flex  hover:bg-transparent justify-center"
      >
        {routeQus}
        <span className="underline text-main-900">{routeText}</span>
      </Button>
      <div className="relative w-full my-5">
        <div className="absolute left-1/2 translate-x-[-50%] top-[-12px] bg-light-900 ">
          او
        </div>
        <Divider className="text-dark-800 w-full  text-center" />
      </div>
      <OuterAuthBtn icon={<FcGoogle />} content="تسجيل الدخول بواسطه جوجل" />
      <OuterAuthBtn icon={<DiApple />} content="تسجيل الدخول بواسطه ابل" />
    </div>
  );
}
