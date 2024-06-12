import {
  MdArrowBack,
  MdArrowForward,
} from 'react-icons/md';

import { Button } from '@nextui-org/react';

export default function Contollers() {
  return (
    <div className="flex justify-between w-full items-center">
      <Button
        type="submit"
        startContent={<MdArrowForward />}
        className="bg-main-900 font-[700]"
      >
        التالي
      </Button>
      <Button
        endContent={<MdArrowBack />}
        className="bg-dark-800 text-light-900"
      >
        رجوع
      </Button>
    </div>
  );
}
