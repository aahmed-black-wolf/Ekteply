import {
  lazy,
  Suspense,
  useRef,
  useState,
} from 'react';

import { useForm } from 'react-hook-form';

import ErrorProvider from '@/src/components/Common/Layout/ErrorProvider';
import Logo from '@/src/components/Common/Layout/Logo';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Input,
  Spinner,
} from '@nextui-org/react';

import AuthFooter from '../AuthFooter';
import {
  SignSchema,
  SignType,
} from './Schema';

const PhoneNumber = lazy(
  () => import("@/src/components/Common/interface/PhoneNumber")
);

export default function SignForm() {
  // State and refs
  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const phoneNumber = useRef<any>();

  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm<SignType>({ resolver: zodResolver(SignSchema) });

  const validatePhoneNumber = () => {
    if (phone.length < 11) {
      setPhoneError(true);
      phoneNumber.current.focus();
      return;
    }
    setPhoneError(false);
  };

  const submit = (data: any) => {
    if (phone.length < 11) {
      setPhoneError(true);
      phoneNumber.current.focus();
      return;
    } else {
      console.log({ ...data, phone });
      setPhoneError(false);
      setPhone("");
      reset();
    }
  };

  return (
    <div className="flex  flex-col p-5 lg:p-0 lg:justify-center h-full w-full lg:flex-1  items-center gap-[20px] md:gap-[30px]">
      <Logo scrollStatus={true} />
      <form
        onSubmit={handleSubmit(submit)}
        className="flex w-full md:w-[400px] flex-col gap-[20px] md:gap-[30px]"
      >
        <div className="flex flex-col gap-2">
          <Input
            {...register("email")}
            isInvalid={errors.email ? true : false}
            type="email"
            placeholder="حساب الالكتروني"
            className="bg-transparent"
            name="email"
            classNames={{
              inputWrapper:
                "border-[1px] border-dark-400 bg-transparent rounded-md",
            }}
            variant="bordered"
          />
          {errors.email && <ErrorProvider errors={errors} target="email" />}
        </div>
        <Suspense fallback={<Spinner />}>
          <PhoneNumber
            phoneNumber={phoneNumber}
            phone={phone}
            phoneError={phoneError}
            setPhoneError={setPhoneError}
            setPhone={setPhone}
          />
        </Suspense>
        <div className="flex flex-col gap-2">
          <Input
            {...register("password")}
            isInvalid={errors.password ? true : false}
            type="password"
            placeholder="كلمه السر"
            className="bg-transparent"
            name="password"
            classNames={{
              inputWrapper:
                "border-[1px] border-dark-400 bg-transparent rounded-md",
            }}
            variant="bordered"
          />
          {errors.password && (
            <ErrorProvider errors={errors} target="password" />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Input
            {...register("confirmPassword")}
            type="password"
            isInvalid={errors.confirmPassword ? true : false}
            placeholder="تاكيد كلممه السر"
            className="bg-transparent"
            name="confirmPassword"
            classNames={{
              inputWrapper:
                "border-[1px] border-dark-400 bg-transparent rounded-md",
            }}
            variant="bordered"
          />

          {errors.confirmPassword && (
            <ErrorProvider errors={errors} target="confirmPassword" />
          )}
        </div>

        <Button
          onClick={validatePhoneNumber}
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
    </div>
  );
}
