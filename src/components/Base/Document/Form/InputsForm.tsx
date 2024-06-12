import React from 'react';

import {
  Controller,
  useFormContext,
} from 'react-hook-form';
import { FaInfo } from 'react-icons/fa';

import { Input } from '@nextui-org/react';

import Info from '../../Global/Info';
import { inputsLabels } from '../Data/data';

export default function InputsForm() {
  const { control } = useFormContext();

  return inputsLabels.map((inputData, index) => (
    <Controller
      key={index}
      control={control}
      name={inputData.name}
      render={({ field, fieldState: { error } }) => (
        <Input
          onValueChange={field.onChange}
          // isRequired={inputData.require}
          type="text"
          errorMessage={error?.message}
          isInvalid={!!error}
          label={inputData.label}
          placeholder={inputData.placeholder}
          className=" flex-1"
          labelPlacement="outside"
          endContent={
            <Info content={inputData.info}>
              <FaInfo />
            </Info>
          }
          ref={field.ref}
          classNames={{
            input: "lg:text-[1.1rem]   p-[10px]",
            inputWrapper: "h-[60px]",
            label: " p-[10px]  w-full",
          }}
        />
      )}
    />
  ));
}
