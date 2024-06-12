"use client";

import {
  useEffect,
  useState,
} from 'react';

import Logo from '@/src/components/Common/Layout/Logo';
import { cn } from '@/src/libs/cn';

import List from './List';
import SearchInput from './SearchInput';
import Taps from './Taps';

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 120) {
        setIsScroll(true);
        return;
      }
      setIsScroll(false);
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <header className={cn("h-[70px] shadow-md", isScroll && "header-animate")}>
      <nav className="flex w-full items-center h-full justify-between px-[10px] md:px-[40px]">
        <Logo scrollStatus={true} routeStatus={true} />
        <div className="hidden lg:flex w-full justify-between">
          <SearchInput />
          <Taps />
        </div>
        <List />
      </nav>
    </header>
  );
}
