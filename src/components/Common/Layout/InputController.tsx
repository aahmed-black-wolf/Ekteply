import React, {
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

import {
  Control,
  Controller,
} from 'react-hook-form';
import {
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';

import {
  Button,
  Input,
} from '@nextui-org/react';

type Props = {
  name: string;
  control: Control<any>;
  type: string;
  placeholder?: string;
};

type PassProps = {
  setHiddenPasswordStatus: Dispatch<SetStateAction<"password" | "text">>;
  hiddenPasswordStatus: "password" | "text";
};

const PasswordVisibility = ({
  setHiddenPasswordStatus,
  hiddenPasswordStatus,
}: PassProps) => {
  const handlePasswordVisibilityChange = () => {
    if (hiddenPasswordStatus === "password") {
      setHiddenPasswordStatus("text");
      return;
    }
    setHiddenPasswordStatus("password");
  };
  return (
    <Button
      onClick={handlePasswordVisibilityChange}
      variant="bordered"
      className="border-none min-w-max  px-3"
    >
      {hiddenPasswordStatus === "password" ? <FaEyeSlash /> : <FaEye />}
    </Button>
  );
};

export default function InputController({
  name,
  control,
  type,
  placeholder,
}: Props) {
  const [hiddenPasswordStatus, setHiddenPasswordStatus] = useState<
    "password" | "text"
  >("password");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          isInvalid={!!error}
          errorMessage={error?.message}
          className="bg-transparent"
          name={name}
          endContent={
            type === "password" ? (
              <PasswordVisibility
                hiddenPasswordStatus={hiddenPasswordStatus}
                setHiddenPasswordStatus={setHiddenPasswordStatus}
              />
            ) : null
          }
          classNames={{
            inputWrapper:
              "border-[1px] border-dark-400 bg-transparent rounded-md",
          }}
          type={type === "password" ? hiddenPasswordStatus : type}
          variant="bordered"
          placeholder={placeholder}
        />
      )}
    />
  );
}
