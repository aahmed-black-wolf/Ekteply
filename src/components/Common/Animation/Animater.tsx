import React, { ReactNode, useRef, useState } from "react";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { cn } from "@/src/libs/cn";

const tr = {
  duration: 0.5,
  ease: "circInOut",
  type: "spring",
  damping: 20,
  stiffness: 200,
};

type Props = {
  children: ReactNode;
};

export default function Animater({ children }: Props) {
  const { scrollY } = useScroll();
  const [isScrollDown, setIsScrollDown] = useState(true);
  const prevScrollY = useRef<number>(0);
  const [isInTop, setIsInTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if ((latest > 100 && latest < prevScrollY.current) || latest === 0) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
    if (latest === 0) {
      setIsInTop(true);
    } else {
      setIsInTop(false);
    }
    prevScrollY.current = latest;
  });

  return (
    <motion.div
      initial={{
        y: 0,
        top: 0,
      }}
      animate={{
        y: isScrollDown ? 0 : -100,
        top: 0,
      }}
      transition={tr}
      className={cn(
        "z-[50] static w-full",
        !isInTop && "z-[100] bg-body  fixed shadow-md"
      )}
    >
      {children}
    </motion.div>
  );
}
