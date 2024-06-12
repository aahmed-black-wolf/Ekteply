import React, {
  useRef,
  useState,
} from 'react';

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

import { cn } from '@/src/libs/cn';
import { settings } from '@/utils/SlideSetting';
import Slider from '@ant-design/react-slick';
import { Button } from '@nextui-org/react';

import TesmaniaCard from './TesmaniaCard';

export default function TSlider() {
  const slider = useRef<any>();

  const handelSlide = (status: string) => {
    if (slider.current) {
      if (status == "next") slider.current.slickNext();
      if (status == "prev") slider.current.slickPrev();
    }
  };
  const [grab, setGrab] = useState(false);

  return (
    <div
      onMouseDown={() => setGrab(true)}
      onMouseUp={() => setGrab(false)}
      className={cn(
        " cursor-grab  flex  items-center justify-center",
        grab && "cursor-grabbing"
      )}
    >
      <Button
        onClick={() => handelSlide("next")}
        variant="light"
        className="min-w-[50px] hidden lg:flex h-[50px] rounded-[50px] text-[5rem] text-light-900 p-0"
      >
        <MdOutlineArrowForwardIos />
      </Button>
      <div className="md:p-6  w-full">
        {/*  @ts-ignore  */}
        <Slider ref={slider} className="lg:p-6" {...settings} autoplay>
          <div className="h-[300px]lg:h-[400px] rounded-md p-[15px] ">
            <TesmaniaCard />
          </div>
          <div className="h-[300px]lg:h-[400px] rounded-md p-[15px] ">
            <TesmaniaCard />
          </div>
          <div className="h-[300px]lg:h-[400px] rounded-md p-[15px] ">
            <TesmaniaCard />
          </div>
          <div className="h-[300px]lg:h-[400px] rounded-md p-[15px] ">
            <TesmaniaCard />
          </div>
          <div className="h-[300px]lg:h-[400px] rounded-md p-[15px] ">
            <TesmaniaCard />
          </div>
          <div className="h-[300px]lg:h-[400px] rounded-md p-[15px] ">
            <TesmaniaCard />
          </div>
        </Slider>
      </div>
      <Button
        onClick={() => handelSlide("prev")}
        variant="light"
        className="min-w-[50px] hidden lg:flex h-[50px] rounded-[50px] text-[5rem] text-light-900 p-0"
      >
        <MdOutlineArrowBackIos />
      </Button>
    </div>
  );
}
