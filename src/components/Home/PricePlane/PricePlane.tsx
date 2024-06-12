import React from 'react';

import Title from '@/src/components/Common/Layout/Title';

import PriceCards from './PriceCards';
import PriceController from './PriceController';

export default function PricePlane() {
  return (
    <div className="flex justify-center w-full  gap-[40px] items-center flex-col">
      <Title
        title="خطط التسعير بأسعار معقولة"
        subTitle=""
        key={"PricePlane"}
        content=""
      />
      <PriceController />
      <PriceCards />
    </div>
  );
}
