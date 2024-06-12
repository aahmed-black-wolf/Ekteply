// Import css files
"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Center from '@/src/components/Common/Layout/Center';
import { useSearchingPhase } from '@/src/context/futures/searchingPhase';
import { Divider } from '@nextui-org/react';

import SearchForm from './Form/SearchForm';
import Proccess from './Proccess/Process';
import Searching from './Searching/Searching';
import Stepper from './Stepper';

export default function Document() {
  const { phase } = useSearchingPhase();
  return (
    <Center styles="min-h-[80vh] px-4 sm:p-0 block">
      <div className="flex flex-col gap-[30px]">
        <Stepper />
        <Divider className="h-[1px] w-[90%] mb-[30px] mx-auto" />
        {phase == "form" && <SearchForm />}
        {phase == "searching" && <Searching />}
        {phase == "process" && <Proccess />}
      </div>
    </Center>
  );
}
