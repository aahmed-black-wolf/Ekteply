import { ReactNode } from 'react';

import Footer from '@/src/components/Base/Global/Footer';
import Header from '@/src/components/Base/Global/Header/Header';
import SideBare from '@/src/components/Base/Global/SideBare';

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <SideBare />
      <div className="bg-light-500 flex justify-end">{children}</div>
      <Footer />
    </>
  );
}
