"use client";

import { useStateControllers } from '@/src/context/futures/stateControllers';
import { cn } from '@/src/libs/cn';

import Warper from '../Global/Providers/Warper';
import {
  CCT,
  Circular,
  Line,
  Profile,
  TableComponent,
} from './LazyComponents';

export default function Dashboard() {
  const { status } = useStateControllers();
  return (
    <div
      style={{ transition: "width .4s ease" }}
      className={cn(
        "w-[100%] lg:w-[85%] px-[20px] md:px-[50px]  py-[30px]  flex flex-col gap-[25px] ",
        status == "close" && "lg:w-[100%]"
      )}
    >
      <Warper>
        <Profile />
        <Circular />
      </Warper>
      <Warper>
        <TableComponent />
        <Line />
      </Warper>
      <CCT />
    </div>
  );
}
