import { cn } from "@/src/libs/cn";

type Props = {
  title: string;
  subTitle: string;
  content: string;
  color?: string;
  margin?: boolean;
  subColor?: string;
};

export default function Title(props: Props) {
  const { title, subTitle, content, color, margin, subColor } = props;
  return (
    <div
      className={cn(
        "flex flex-col  md:text-[3rem] text-[1.7rem] leading-[31px] justify-center items-center gap-[30px] md:gap-[40px]",
        margin && "m-0"
      )}
    >
      <div className="flex gap-3 items-center">
        <div className={cn(color && color)}>{title}</div>
        <div
          className={cn(
            "text-center font-[700] text-main-900",
            subColor && subColor
          )}
        >
          <span>{subTitle}</span>
        </div>
      </div>
      <div
        className={cn(
          " leading-[27px] text-[16px] text-center",
          color && color
        )}
      >
        {content}
      </div>
    </div>
  );
}
