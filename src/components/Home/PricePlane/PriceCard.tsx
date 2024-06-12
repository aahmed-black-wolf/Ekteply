import { TbSquareRoundedCheckFilled } from 'react-icons/tb';

import { cn } from '@/src/libs/cn';
import {
  Button,
  Divider,
} from '@nextui-org/react';

import Message from './Message';

export default function PriceCard({
  textColor,
  bgColor,
  content,
  price,
  title,
  list,
  slug,
}: {
  content: string;
  price: string;
  title: string;
  list: string[];
  textColor: string;
  bgColor?: string;
  slug: string;
}) {
  return (
    <div
      className={cn(
        "shadow-medium flex relative flex-col gap-[30px]  w-full  border-[1px] rounded-3xl px-5 pt-5 pb-[50px]",
        bgColor && bgColor
      )}
    >
      <div className="card-ribbon">
        <span
          style={{
            background: bgColor && "var(--light-color-900)",
            color: bgColor && "var(--main-color-900)",
          }}
        >
          {slug}
        </span>
      </div>
      <div className="text-[1.7rem] font-[600]">{title}</div>
      <div className="text-[2rem] relative">
        <span className={cn(!bgColor ? "text-main-900" : "text-light-900")}>
          {!price && (
            <div className="w-[140px] h-full rounded-sm absolute  backdrop-blur-[6px]"></div>
          )}
          {price} ج.م
        </span>
        / شهر
      </div>
      <div className="font-[600]">{content}</div>
      <Divider className="w-full" />
      <div className="flex  h-[270px]  flex-col gap-[20px]">
        {list?.map((target, index) => (
          <div className="flex items-center gap-4 text-[1.3rem] " key={index}>
            <div
              className={cn(
                "text-[1.5rem]",
                !bgColor ? "text-dark-800" : "text-light-900"
              )}
            >
              <TbSquareRoundedCheckFilled />
            </div>
            <div className="flex items-end  pt-1">{target}</div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        {price && (
          <Button
            size="lg"
            radius="full"
            className={cn(
              "w-[80%] py-[30px] font-[700] text-dark-900",
              bgColor ? "bg-light-900" : "bg-dark-900 text-light-900"
            )}
          >
            اشترك الان
          </Button>
        )}
        {!price && (
          <Message
            title="تفاصيل"
            bgColor={bgColor || ""}
            message="ستيم ستقدم هذه الباقة بمجرد انتهاء المرحلة التجربية للمنصة. نشكرك على تفهمك."
          />
        )}
      </div>
    </div>
  );
}
