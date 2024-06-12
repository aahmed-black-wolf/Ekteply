"use client";

import dynamic from 'next/dynamic';

import Container from '@/src/components/Base/Global/Providers/Container';

import {
  options,
  series,
} from './CCTOptions';

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CCT() {
  return (
    <div className="flex-1 w-full pb-[30px] hidden md:block">
      <Container fullWidth>
        <Chart
          type="bar"
          //@ts-ignore
          options={options}
          series={series}
          width={"100%"}
          height={"420"}
        />
      </Container>
    </div>
  );
}
