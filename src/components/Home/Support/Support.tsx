import Image from "next/legacy/image";

import supportImage from "@/public/images/support.png";

import Card from "./Card";

export default function Support() {
  return (
    <div className="w-full h-max relative flex">
      <div className="sticky w-full hidden lg:block">
        <Image src={supportImage} alt="supportImage" />
      </div>
      <Card />
    </div>
  );
}
