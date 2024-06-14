"use client";
import {
  Controller,
  FormProvider,
  useForm,
} from 'react-hook-form';

import { LoginSchema } from '@/src/components/@schema/Login';
import { LoginType } from '@/src/components/@types/Login';
import PhoneNumber from '@/src/components/Common/interface/PhoneNumber';
import InputController from '@/src/components/Common/Layout/InputController';
import Logo from '@/src/components/Common/Layout/Logo';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Checkbox,
} from '@nextui-org/react';

import AuthFooter from '../AuthFooter';

export default function LoginForm() {
  const methods = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const { control, handleSubmit } = methods;

  const handleLogin = (data: LoginType) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col p-5 lg:p-0 lg:justify-center h-full w-full lg:flex-1  items-center gap-[20px] md:gap-[30px]">
      <Logo scrollStatus={true} />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex w-full md:w-[400px] flex-col gap-[20px] md:gap-[30px]"
        >
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <PhoneNumber
                ref={field.ref}
                phone={field.value}
                phoneError={error?.message}
                setPhone={field.onChange}
              />
            )}
          />
          <div className="flex flex-col gap-5">
            <InputController
              type="password"
              placeholder="كلمه السر"
              name="password"
              control={control}
            />
            <Button
              variant="bordered"
              className="min-w-full border-none p-0 h-max flex underline hover:bg-transparent text-main-900 justify-end"
            >
              هل نسيت كلمه السر؟
            </Button>
            <Checkbox
              className="flex"
              classNames={{ icon: "text-light-900" }}
              size="sm"
              color="warning"
            >
              <div> حفظ تسجيل الدخول</div>
            </Checkbox>
          </div>
          <Button
            type="submit"
            className="bg-main-900 text-light-900 rounded-sm"
          >
            تسجيل الدخول
          </Button>
          <AuthFooter
            route="/signin"
            routeQus="لا تمتلك حساب ؟"
            routeText="انشاء حساب"
          />
        </form>
      </FormProvider>
    </div>
  );
}
