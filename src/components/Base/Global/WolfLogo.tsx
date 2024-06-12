import Image from 'next/image';

import Logo from '@/public/WolfLogo.svg';
import { cn } from '@/src/libs/cn';

export default function WolfLogo({ footer }: { footer?: boolean }) {
  return (
    <div
      className={cn(
        " w-[55px] mt-[10px]",
        footer && "hidden h-full  md:flex",
        !footer && "md:hidden block fixed bottom-5 left-5 z-[50]"
      )}
    >
      <Image src={Logo} alt="LOGO" />
    </div>
  );
}
