import React from 'react';

import {
  Control,
  Controller,
} from 'react-hook-form';

import {
  Autocomplete,
  AutocompleteItem,
} from '@nextui-org/react';

import { SERACH_SCHEMA } from '../../Base/Document/Form/Schema';

type SELECTOR = {
  data: { value: string; label: string }[];
  message: string;
  isRequired?: boolean;
  placeholder: string;
  isFixed?: boolean;
  name: any;
  control: Control<SERACH_SCHEMA>;
};

export default function Selector({
  data,
  message,
  isRequired,
  placeholder,
  isFixed,
  control,
  name,
}: SELECTOR) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          onSelectionChange={field.onChange}
          label={message}
          errorMessage={error?.message}
          isInvalid={!!error}
          isRequired={isRequired}
          allowsCustomValue={isFixed}
          labelPlacement="outside"
          placeholder={placeholder}
          size="lg"
          className="w-full"
          defaultItems={data}
          inputProps={{
            classNames: {
              label: "w-full p-[10px] text-[14px]",
              input: "lg:text-[1.1rem]   p-[10px]",
              inputWrapper: "h-[60px]",
            },
          }}
        >
          {(item) => (
            <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
          )}
        </Autocomplete>
      )}
    />
  );
}
