"use client";

import { useState } from 'react';

import {
  usePathname,
  useRouter,
} from 'next/navigation';
import {
  AiFillEye,
  AiFillEyeInvisible,
} from 'react-icons/ai';

import { useStateControllers } from '@/src/context/futures/stateControllers';
import { cn } from '@/src/libs/cn';
import { Button } from '@nextui-org/react';

export default function SideBare() {
  const [toggle, setToggle] = useState(false);
  const { status, setStatus } = useStateControllers();
  const path = usePathname();
  const router = useRouter();
  const routes = [
    {
      route: "/dashboard",
      content: "الصفحه الرئسيه",
    },
    {
      route: "/dashboard/doc",
      content: "انشاء مستندات",
    },
    {
      route: "/dashboard/mail",
      content: "انشاء اميلات",
    },
    {
      route: "/dashboard/package",
      content: "ادراه الباقه",
    },
  ];

  return (
    <aside
      style={{ transition: "width .4s ease" }}
      className={cn(
        "w-[70%] bg-primary-900 z-[100] md:w-[35%] lg:w-[15%] fixed top-[50%] translate-y-[-50%]  pl-5 pt-[30px] h-[80%] lg:rounded-tl-[40px]  lg:rounded-bl-[40px] rounded-tl-[30px]  rounded-bl-[30px] shadow-medium",
        status == "close" && "w-[0] lg:w-[0]  md:w-[0] p-0"
      )}
    >
      <Button
        className="absolute   overflow-visible   top-1/2 translate-y-[-50%] left-[-30px] min-w-[40px] text-[1.1rem] bg-primary-900 text-light-900 justify-end h-[20px] p-0 px-1"
        onClick={() => {
          if (status == "close") {
            setStatus("open");
            return;
          }
          setStatus("close");
        }}
      >
        {status == "close" ? <AiFillEye /> : <AiFillEyeInvisible />}
        <span
          style={{ boxShadow: "4px -4px 0 1px var(--primary-color-900)" }}
          className="absolute right-[9px] bottom-[-10px] w-[10px] h-[10px] rounded-full"
        ></span>
        <span
          style={{ boxShadow: "4px 4px 0 1px var(--primary-color-900)" }}
          className="absolute right-[9px] top-[-10px] w-[10px] h-[10px] rounded-full"
        ></span>
      </Button>

      {!toggle && (
        <div className="flex flex-col gap-[80px] relative md:gap-[100px] pt-[20px]  md:pt-[130px] h-full overflow-hidden ">
          {routes.map((data) => (
            <Button
              onClick={() => {
                setStatus("close");
                router.push(`${data.route}`);
              }}
              radius="full"
              className={cn(
                "bg-transparent shadow-sm w-[90%] text-light-900 group relative font-[600] hover:bg-main-900 hover:text-light-900 overflow-visible",
                path == data.route && "bg-main-900 text-light-900"
              )}
              size="lg"
              key={data.content}
            >
              {data.content}
              <span
                className={cn(
                  "absolute group-hover:shadow-[35px_-35px_0px_10px_var(--main-color-900)] shadow-[35px_-35px_0px_10px_transparent] right-0 bottom-[-50px] w-[50px] h-[50px] rounded-full",
                  path == data.route &&
                    "shadow-[35px_-35px_0px_10px_var(--main-color-900)]"
                )}
              ></span>
              <span
                className={cn(
                  "absolute group-hover:shadow-[35px_35px_0px_10px_var(--main-color-900)] right-0 top-[-50px]  shadow-[35px_35px_0px_10px_transparent]  w-[50px] h-[50px] rounded-full",
                  path == data.route &&
                    "shadow-[35px_35px_0px_10px_var(--main-color-900)]"
                )}
              ></span>
            </Button>
          ))}
        </div>
      )}
    </aside>
  );
}
