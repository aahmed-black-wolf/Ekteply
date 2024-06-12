"use client";
import {
  lazy,
  Suspense,
  useRef,
  useState,
} from 'react';

import ErrorProvider from '@/src/components/Common/Layout/ErrorProvider';
import Logo from '@/src/components/Common/Layout/Logo';
import {
  Button,
  Checkbox,
  Input,
  Spinner,
} from '@nextui-org/react';

import AuthFooter from '../AuthFooter';

const PhoneNumber = lazy(
  () => import("@/src/components/Common/interface/PhoneNumber")
);

export default function LoginForm() {
  // State and refs
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const phoneNumber = useRef<any>();
  const passwordInput = useRef<any>();

  // Validation function
  const validation = () => {
    if (phone?.length < 11) {
      setPhoneError(true);
      phoneNumber.current.focus();
      return;
    }
    if (password.length < 10) {
      setPasswordError(true);
      passwordInput.current.focus();
      return;
    }
  };

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validation();
  };

  return (
    <div className="flex flex-col p-5 lg:p-0 lg:justify-center h-full w-full lg:flex-1  items-center gap-[20px] md:gap-[30px]">
      <Logo scrollStatus={true} />
      <form
        onSubmit={handleSubmit}
        className="flex w-full md:w-[400px] flex-col gap-[20px] md:gap-[30px]"
      >
        <Suspense fallback={<Spinner />}>
          <PhoneNumber
            phoneNumber={phoneNumber}
            phone={phone}
            phoneError={phoneError}
            setPhoneError={setPhoneError}
            setPhone={setPhone}
          />
        </Suspense>
        <div className="flex flex-col gap-5">
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.length < 10) {
                setPasswordError(true);
                return;
              }
              setPasswordError(false);
            }}
            value={password}
            className="bg-transparent"
            name="password"
            ref={passwordInput}
            isInvalid={passwordError}
            classNames={{
              inputWrapper:
                "border-[1px] border-dark-400 bg-transparent rounded-md",
            }}
            type="password"
            variant="bordered"
            placeholder="كلمه السر"
          />
          {passwordError && (
            <ErrorProvider
              errors={{
                passwordError: {
                  message: "يرجي ادخال رقم كلمه سر صحيحه",
                },
              }}
              target="passwordError"
            />
          )}
          <Button
            variant="bordered"
            className="min-w-full border-none p-0 h-max flex underline hover:bg-transparent text-main-900 justify-end"
          >
            هل نسيت كلمه السر؟
          </Button>
          <Checkbox
            className="flex gap-3"
            classNames={{ icon: "text-light-900" }}
            size="sm"
            color="warning"
          >
            <div> حفظ تسجيل الدخول</div>
          </Checkbox>
        </div>
        <Button type="submit" className="bg-main-900 text-light-900 rounded-sm">
          تسجيل الدخول
        </Button>
        <AuthFooter
          route="/signin"
          routeQus="لا تمتلك حساب ؟"
          routeText="انشاء حساب"
        />
      </form>
    </div>
  );
}
