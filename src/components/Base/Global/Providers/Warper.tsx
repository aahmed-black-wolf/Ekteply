import { ReactNode } from "react";

export default function Warper({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-between flex-col lg:flex-row   gap-[35px] w-full">
      {children}
    </div>
  );
}
