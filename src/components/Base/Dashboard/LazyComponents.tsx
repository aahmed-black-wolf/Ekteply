import dynamic from "next/dynamic";

import { Skeleton } from "@nextui-org/react";

export const Profile = dynamic(() => import("./Profile/Profile"), {
  loading: () => (
    <Skeleton className="shadow-medium rounded-lg flex-1  h-[300px]" />
  ),
  ssr: false,
});

export const Circular = dynamic(() => import("./Graphs/Circulart/Circular"), {
  loading: () => (
    <Skeleton className="shadow-medium rounded-lg flex-1  h-[300px]" />
  ),
  ssr: false,
});

export const TableComponent = dynamic(() => import("./Table/TableComponent"), {
  loading: () => (
    <Skeleton className="shadow-medium rounded-lg flex-1  h-[300px]" />
  ),
  ssr: false,
});

export const Line = dynamic(() => import("./Graphs/Line/Line"), {
  loading: () => (
    <Skeleton className="shadow-medium rounded-lg flex-1  h-[300px]" />
  ),
  ssr: false,
});

export const CCT = dynamic(() => import("./Graphs/ColumnChart/CCT"), {
  loading: () => (
    <Skeleton className="shadow-medium  rounded-lg w-[100%] h-[500px]" />
  ),
  ssr: false,
});
