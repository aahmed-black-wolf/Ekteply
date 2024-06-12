import "@/src/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-international-phone/style.css";

import { El_Messiri } from "next/font/google";

import MetaTags from "@/src/components/Common/Layout/MetaTags";
import Root from "@/src/components/Providers/Root";

const EM = El_Messiri({
  subsets: ["arabic", "cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ar" dir="rtl">
      <MetaTags />
      <body className={EM.className}>
        {/* <WebVitals /> */}
        <Root>{children}</Root>
      </body>
    </html>
  );
}
