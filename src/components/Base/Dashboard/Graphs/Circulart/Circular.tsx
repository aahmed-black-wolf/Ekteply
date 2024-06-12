"use client";

import dynamic from "next/dynamic";

import { options, series } from "./CircularOptions";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Circular() {
  return (
    <div className="shadow-medium rounded-lg flex-1  h-[300px] relative flex justify-end  md:px-[20px] pt-[10px] pb-[20px]">
      <div className="absolute bottom-[20px] right-[20px] text-[1.2rem] md:text-[2rem] font-[600]">
        استهلاك الباقه
      </div>
      <Chart
        series={series}
        // @ts-ignore
        options={options}
        type="pie"
        width="500"
        height={"380"}
      />
    </div>
  );
}
