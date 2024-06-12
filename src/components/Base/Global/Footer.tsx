import React from 'react';

import { Button } from '@nextui-org/react';

import WolfLogo from './WolfLogo';

export default function Footer() {
  return (
    <footer className="flex px-3 sm:px-10 h-[70px] pb-3 items-end justify-between">
      <div className="text-center flex  items-end gap-2   justify-center  flex-1">
        <div className="text-sm sm:text-lg">
          جميع الحقوق محفوظة Black wolf © 2023
        </div>
        <Button className="underline text-sm sm:text-lg p-0 w-max bg-transparent  h-max text-main-900 ">
          الشروط والأحكام
        </Button>
      </div>
      <WolfLogo footer={true} />
    </footer>
  );
}
