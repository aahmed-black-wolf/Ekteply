"use client";
import dynamic from "next/dynamic";

import Container from "../../../Global/Providers/Container";
import { options, series } from "./LineOptions";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Line() {
  return (
    <Container fullWidth>
      <Chart
        series={series}
        // @ts-ignore
        options={options}
        type="line"
        width={"100%"}
        height={"320"}
      />
    </Container>
  );
}
