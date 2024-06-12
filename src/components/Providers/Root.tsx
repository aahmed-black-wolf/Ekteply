"use client";

import { useRouter } from 'next/navigation';

import { NextUIProvider } from '@nextui-org/react';

export default function Root({ children }: { children: React.ReactNode }) {
  const navigate = useRouter();

  return <NextUIProvider navigate={navigate.push}>{children}</NextUIProvider>;
}
