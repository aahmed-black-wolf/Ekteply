import React from "react";

import { data } from "./data";
import PriceCard from "./PriceCard";

export default function PriceCards() {
  return (
    <div className="flex justify-between w-full flex-wrap-reverse lg:flex-nowrap md:px-[50px] lg:p-0 gap-[30px]">
      {data.map((target, index) => (
        <PriceCard {...target} key={index} />
      ))}
    </div>
  );
}
