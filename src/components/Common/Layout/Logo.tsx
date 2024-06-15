"use client";

import Image from 'next/legacy/image';
import { useRouter } from 'next/navigation';

import LogoIcon from '@/public/LOGO.svg';

type Props = {
  scrollStatus?: boolean;
  routeStatus?: boolean;
};

export default function Logo({ routeStatus }: Props) {
  const router = useRouter();

  const handleRouting = () => {
    if (routeStatus) {
      router.push("/dashboard");
      return;
    }
    router.push("/");
  };

  return (
    <div
      className="w-[100px] cursor-pointer md:w-[130px]"
      onClick={handleRouting}
    >
      <Image src={LogoIcon} priority property="true" alt="LOGO" />
    </div>
  );
}
