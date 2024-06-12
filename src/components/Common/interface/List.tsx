import { useRouter } from "next/navigation";
import { VscListSelection } from "react-icons/vsc";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

export default function List() {
  const route = useRouter();
  return (
    <Popover className="lg:hidden" placement="bottom" showArrow={true}>
      <PopoverTrigger className="lg:hidden">
        <Button
          variant="light"
          className="text-[2rem] bg-dark-900 text-main-900 rounded-md  min-w-max"
        >
          <VscListSelection />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="flex gap-[10px]">
            <Button
              className="bg-dark-900 font-[700] text-light-900"
              onClick={() => route.push("/login")}
            >
              تسجيل الدخول
            </Button>
            <Button
              variant="bordered"
              className="border-dark-900 font-[700]"
              onClick={() => route.push("/signin")}
            >
              انشاء حساب
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
