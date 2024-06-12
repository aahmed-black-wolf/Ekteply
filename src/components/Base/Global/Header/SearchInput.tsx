import React from "react";

import { CiSearch } from "react-icons/ci";

import { Input } from "@nextui-org/react";

export default function SearchInput() {
  return (
    <div className="w-full flex justify-center">
      <Input
        radius="full"
        variant="bordered"
        placeholder="البحث..."
        className="w-[400px]"
        classNames={{
          input: "text-[1.2rem] px-[20px]",
          inputWrapper: "border-[1px] bg-light-500",
        }}
        type="search"
        endContent={
          <div className="pointer-events-none flex items-center justify-center">
            <span className="text-default-400 text-[1.2rem]">
              <CiSearch />
            </span>
          </div>
        }
      />
    </div>
  );
}
