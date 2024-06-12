import { cn } from '@/src/libs/cn';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';

export default function Message({
  title,
  message,
  bgColor,
}: {
  title: string;
  message: string;
  bgColor: string;
}) {
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button
          size="lg"
          radius="full"
          className={cn(
            "w-[80%] py-[30px] font-[700] text-dark-900",
            bgColor ? "bg-light-900" : "bg-dark-900 text-light-900"
          )}
        >
          {title}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 font-[600]">{message}</div>
      </PopoverContent>
    </Popover>
  );
}
