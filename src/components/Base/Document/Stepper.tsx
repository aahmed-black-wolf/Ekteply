import React from 'react';

import { Progress } from '@nextui-org/react';

export default function Stepper() {
  return (
    <div className="w-full h-max py-4  sm:h-[100px] px-[20px]  sm:px-[50px]  shadow-medium rounded-lg ">
      <div className=" flex flex-col justify-center items-start gap-3">
        <div className="text-main-900 text-[1.2rem]">
          Step 1 <span className="text-primary-900">/ 5</span>
        </div>
        <Progress
          isStriped
          aria-label="Loading..."
          color="warning"
          value={100 / 5}
          className="w-full"
        />
      </div>
    </div>
  );
}
