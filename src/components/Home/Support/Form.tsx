import React from "react";

import { Controller, useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";

import { ContactSchema, ContactType, inputsFields } from "./Schema";

export default function Form() {
  const { handleSubmit, reset, control } = useForm<ContactType>({
    resolver: zodResolver(ContactSchema),
  });
  const fieldsIcons = [
    <FaUser color="#029bc5" />,
    <MdAlternateEmail color="#029bc5" />,
  ];
  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex  flex-col gap-[20px]">
        {inputsFields?.map((target, index) => (
          <Controller
            control={control}
            name={target.name as any}
            key={index}
            render={({ field, fieldState: { error } }) =>
              target.type ? (
                <Input
                  {...field}
                  endContent={fieldsIcons[index]}
                  isInvalid={!!error}
                  type={target?.type as any}
                  placeholder={target.placeholder}
                  size="lg"
                  errorMessage={error?.message}
                  classNames={{
                    input: "py-[30px] text-dark-900 flex-1 font-[700]",
                    inputWrapper: "p-[30px]",
                  }}
                />
              ) : (
                <Textarea
                  name={target?.name}
                  errorMessage={error?.message}
                  isInvalid={!!error}
                  classNames={{
                    input:
                      "min-h-[200px] p-10 text-[1.2rem] font-[700] text-dark-900 ",
                  }}
                  placeholder={target?.placeholder}
                />
              )
            }
          />
        ))}

        <div>
          <Button
            type="submit"
            size="lg"
            className="bg-dark-900 w-full lg:w-max text-light-900"
          >
            ارسال
          </Button>
        </div>
      </div>
    </form>
  );
}
