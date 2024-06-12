import React from "react";

export default function ErrorProvider({
  errors,
  target,
}: {
  errors: any;
  target: string;
}) {
  return (
    errors[target] && (
      <span className="text-light-900 text-[12px] text-pink-700 md:text-[14px] m-[10px]">
        {errors[target].message}
      </span>
    )
  );
}
