"use client";
import {
  useEffect,
  useState,
} from 'react';

import Image from 'next/legacy/image';
import {
  Controller,
  useFormContext,
} from 'react-hook-form';

import dateIcon from '@/public/icons/date.svg';
import { formatDateOfBirth } from '@/src/functions/dateFormat';
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';

import DatePickerComponent from './DatePickerComponent';

export default function DatePicker({ isLight }: { isLight?: boolean }) {
  const { setValue, control } = useFormContext();
  const [selected, setSelected] = useState<Date>();
  const [dateFormatData, setDateFormatData] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (selected) {
      setDateFormatData(() => formatDateOfBirth(selected));
      setValue("file_date", selected);
    }
  }, [selected]);

  return (
    <Popover
      isOpen={isOpen}
      placement="bottom"
      showArrow={true}
      className="w-full "
    >
      <PopoverTrigger>
        <Controller
          control={control}
          name="file_date"
          render={({ field, fieldState: { error } }) => (
            <Input
              isInvalid={!!error}
              errorMessage={error?.message}
              value={dateFormatData}
              placeholder="تاريخ التحرير"
              label="تاريخ تحرير الملف"
              size="lg"
              disabled
              labelPlacement="outside"
              classNames={{
                input: "text-start   font-[500]",
                innerWrapper: "cursor-pointer pr-[5px]",
                inputWrapper: "h-[60px]",
                label: "w-full py-[5px] px-[10px] text-[14px]",
              }}
              endContent={
                <Button
                  className="bg-lightColor-900 justify-end pointer-events-all"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Image
                    src={dateIcon}
                    alt="date-icon"
                    className="cursor-pointer"
                  />
                </Button>
              }
            />
          )}
        />
      </PopoverTrigger>
      <PopoverContent>
        <DatePickerComponent
          selected={selected as any}
          setSelected={(data: any) => {
            setIsOpen(!isOpen);
            setSelected(data);
          }}
          type="single"
        />
      </PopoverContent>
    </Popover>
  );
}
