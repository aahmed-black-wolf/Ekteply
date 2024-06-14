import {
  Controller,
  FormProvider,
  useForm,
} from 'react-hook-form';

import {
  inputsFields,
  SignSchema,
} from '@/src/components/@schema/SignInSchema';
import { SignType } from '@/src/components/@types/SignInType';
import PhoneNumber from '@/src/components/Common/interface/PhoneNumber';
import Logo from '@/src/components/Common/Layout/Logo';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/react';

import InputController from '../../Common/Layout/InputController';
import AuthFooter from '../AuthFooter';

export default function SignForm() {
  const methods = useForm<SignType>({ resolver: zodResolver(SignSchema) });
  const { handleSubmit, control } = methods;
  const handleSignIn = (data: SignType) => {
    console.log(data);
  };

  return (
    <div className="flex  flex-col p-5 lg:p-0 lg:justify-center h-full w-full lg:flex-1  items-center gap-[20px] md:gap-[30px]">
      <Logo scrollStatus={true} />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(handleSignIn)}
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
          {inputsFields.map((field, index: number) => (
            <InputController {...field} control={control} key={index} />
          ))}

          <Button
            type="submit"
            className="bg-main-900 text-light-900 rounded-sm"
          >
            انشاء الحساب
          </Button>
          <AuthFooter
            route="/login"
            routeQus="تمتلك حساب بالفعل؟"
            routeText="تسجيل الدخول"
          />
        </form>
      </FormProvider>
    </div>
  );
}
