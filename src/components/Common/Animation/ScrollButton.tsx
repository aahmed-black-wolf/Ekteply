import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { IoMdArrowRoundUp } from "react-icons/io";

import { cn } from "@/src/libs/cn";
import styles from "@/src/styles/scroll.module.css";
import { Button } from "@nextui-org/react";

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const event = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
        return;
      }
      setIsVisible(false);
    };

    window.addEventListener("scroll", event);
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);

  return (
    <motion.div
      transition={{
        duration: 0.5,
        ease: "circInOut",
        type: "spring",
        damping: 20,
        stiffness: 200,
      }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
        position: "fixed",
      }}
      className=" z-[200] hidden md:block bottom-5 ltr:right-5 rtl:left-5"
    >
      <div>
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="submit"
          radius="full"
          style={{ backgroundColor: "#fff" }}
          className={cn("m-0 font-[600] p-0 min-w-[40px] h-[40px]", styles.box)}
          color="primary"
        >
          <IoMdArrowRoundUp />
        </Button>
      </div>
    </motion.div>
  );
}
