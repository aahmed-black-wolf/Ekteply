"use client";

import { AiFillSetting } from "react-icons/ai";

import { Avatar, AvatarIcon } from "@nextui-org/react";

import Drop from "../../Global/Drop/Drop";
import UserSetting from "./UserSetting";

export default function Profile() {
  const data = [
    { key: "الباقه الحاليه", value: "احترافيه" },
    { key: "تاريخ الانضمام", value: "2023/04/13" },
    { key: "عدد الملفات المحمله", value: "2k" },
    { key: "عدد عمليات المعالجه", value: "1.47k" },
  ];
  return (
    <div className="shadow-medium flex-1 px-[15px] lg:px-[20px] pt-[10px] pb-[20px] rounded-md h-[300px] justify-between flex flex-col items-center">
      <div className="flex w-full  justify-between items-center">
        <h1 className="text-dark-800 font-[800]">abdo.eslam@gmail.com</h1>
        <Drop trigger={<AiFillSetting color="#FFA458" />}>
          <UserSetting />
        </Drop>
      </div>
      <div className="flex justify-center flex-col gap-[13px] mt-[20px] md:mt-0 w-full items-center">
        <Avatar
          icon={<AvatarIcon />}
          isBordered
          size="lg"
          color="warning"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
        <div className="font-[700] text-[1.2rem]">عبدالرحمن اسلام</div>
      </div>

      <div
        style={{ justifyItems: "start" }}
        className="grid grid-cols-2 mt-[20px] lg:m-0 md:grid-cols-3   w-full   lg:grid-cols-4 gap-4 lg:gap-[30px]"
      >
        {data.map((element) => (
          <div
            key={element.key}
            className="flex gap-[10px]   items-center justify-start text-[14px]"
          >
            <div className="text-main-900 font-[700] text-[12px] text-right md:text-[16px]">
              {element.key}
            </div>
            <div className="font-[600] text-right flex-1 text-[12px] md:text-[16px] ">
              {element.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
