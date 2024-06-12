import React from 'react';

import {
  Controller,
  useFormContext,
} from 'react-hook-form';
import { FaInfo } from 'react-icons/fa';

import { Textarea } from '@nextui-org/react';

import Info from '../../Global/Info';

export default function TextArea() {
  const { control } = useFormContext();

  const textareaDate = [
    {
      message:
        " هذه المقدمه اختيراريه اذا تم ادخلها ستيم وضعها اذا لم يتم ادخالها سيقوم الذكاء الاصطناعي بي انشائها",
      name: "introduction",
      label: "مقدمه",
      placeholder: "محتوي المقدمه",
    },
    {
      message:
        " هذه الخاتمه اختيراريه اذا تم ادخلها ستيم وضعها اذا لم يتم ادخالها سيقوم الذكاء الاصطناعي بي انشائها",
      name: "conclusion",
      label: "خاتمه",
      placeholder: "محتوي الخاتمه",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[30px]">
      {textareaDate.map((target, index) => (
        <Controller
          key={index}
          name={target.name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Textarea
              {...target}
              errorMessage={error?.message}
              isInvalid={!!error}
              onValueChange={field.onChange}
              radius="sm"
              endContent={
                <Info content={target.message}>
                  <FaInfo />
                </Info>
              }
              labelPlacement="outside"
              size="lg"
              classNames={{
                input: "lg:text-[1.1rem]  min-h-[300px]  p-[10px]",
                label: " p-[10px]  w-full",
                inputWrapper: "p-[30px]",
              }}
            />
          )}
        />
      ))}
    </div>
  );
}
