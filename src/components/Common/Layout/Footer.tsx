import React from "react";

import Image from "next/image";

import appStoreIcon from "@/public/icons/apple.svg";
import creditCardIcon from "@/public/icons/credit-card.svg";
import googleIcon from "@/public/icons/google-play.svg";
import paypalIcon from "@/public/icons/paypal.svg";
import visaIcon from "@/public/icons/visa.svg";
import { Divider } from "@nextui-org/react";

import Logo from "./Logo";

export default function Footer() {
  return (
    <div
      style={{
        boxShadow: "1px 1px 10px 1000px var(--dark-color-800)",
        clipPath: "inset(0px -100% 0px -100%)",
      }}
      className="flex flex-col bg-dark-800 gap-[30px] py-5 px-[10px] md:px-[40px]"
    >
      <div className="flex w-full  pt-[20px] justify-between">
        <div className="flex flex-wrap gap-[30px] items-end justify-center md:justify-between">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col text-light-900 gap-5">
              <div className="text-center md:text-start text-sm md:text-md">
                قريباً على أجهزة الاندرويد والايفون
              </div>
              <div className="flex gap-3 w-[100px]">
                <Image src={googleIcon} alt="googleIcon" />
                <Image src={appStoreIcon} alt="appStoreIcon" />
              </div>
            </div>

            <div className="flex w-max text-light-900 gap-5">
              <div className="w-max text-sm md:text-md">نحن ندعم</div>
              <div className="flex gap-4">
                <Image width={35} alt="visaIcon" src={visaIcon} />
                <Image width={35} alt="creditCardIcon" src={creditCardIcon} />
                <Image width={35} alt="paypalIcon" src={paypalIcon} />
              </div>
            </div>
          </div>
        </div>
        <Logo />
      </div>
      <Divider className="bg-light-900" />
      <div className="text-center text-[12px] md:text-[18px] text-light-700">
        Copyright © 2024 Ekteply | All Rights Reserved | Terms and Conditions |
        Privacy Policy
      </div>
    </div>
  );
}
