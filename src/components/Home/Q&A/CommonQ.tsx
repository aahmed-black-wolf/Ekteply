import { useState } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

import { cn } from '@/src/libs/cn';
import {
  Accordion,
  AccordionItem,
  Button,
} from '@nextui-org/react';

export default function CommonQ({
  data,
}: {
  data: { q: string; a: string }[];
}) {
  const [accordIndex, setAccordIndex] = useState(0);

  return (
    <div>
      <Accordion
        variant="splitted"
        showDivider={false}
        selectionBehavior={"replace"}
        defaultExpandedKeys={[String(accordIndex)]}
        hideIndicator
      >
        {data.map((target, index) => (
          <AccordionItem
            key={String(index)}
            onClick={() => {
              setAccordIndex(index);
            }}
            isCompact={true}
            dir="rtl"
            classNames={{
              title: cn(
                "flex   justify-between text-right rounded-lg p-4  items-center text-[15px] md:text-[1.3rem] font-[700] md:p-5",
                index == accordIndex && "text-main-900  bg-dark-900",
                "leading-[31px]"
              ),
              content: "md:px-5",
            }}
            aria-label={target.q}
            title={target.q}
            indicator={({ isOpen }) =>
              !isOpen ? (
                <Button
                  aria-hidden="true"
                  as={"div"}
                  className="bg-light-600 min-w-[26px] h-[26px] rounded-[26px] p-0"
                >
                  <AiOutlinePlus />
                </Button>
              ) : (
                <Button
                  aria-hidden="true"
                  as={"div"}
                  className="bg-light-600 min-w-[26px] h-[26px] rounded-[26px] p-0"
                >
                  <RxCross2 />
                </Button>
              )
            }
          >
            <div className="p-4">{target.a}</div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
