import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { cn } from "@/src/libs/cn";
import { Button } from "@nextui-org/react";

import Animater from "../Animation/Animater";
import List from "../interface/List";
import Logo from "./Logo";

export default function Header() {
  const [scrollStatus, setScrollStatus] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScrollStatus(true);
        return;
      }
      setScrollStatus(false);
    });
  }, []);

  return (
    <Animater>
      <header
        className={cn(
          "flex lg:h-[80px] h-[60px] items-center shadow-md bg-light-900",
          !scrollStatus && "bg-main-900 shadow-none"
        )}
      >
        <nav className="flex justify-between items-center w-full px-[10px] lg:px-[70px]">
          <div className="hidden lg:flex gap-[10px]">
            <Button
              className={cn(
                "bg-dark-900 font-[700] text-light-900",
                scrollStatus && "bg-main-900"
              )}
              onClick={() => router.push("/login")}
            >
              تسجيل الدخول
            </Button>
            <Button
              variant="bordered"
              className={cn(
                "border-dark-900 font-[700]",
                scrollStatus && "border-main-900 text-main-900 "
              )}
              onClick={() => router.push("/signin")}
            >
              انشاء حساب
            </Button>
          </div>
          <Logo />
          <List />
        </nav>
      </header>
    </Animater>
  );
}
