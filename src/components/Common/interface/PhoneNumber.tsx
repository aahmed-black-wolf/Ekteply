import { forwardRef } from 'react';

import { PhoneInput } from 'react-international-phone';

import { cn } from '@/src/libs/cn';
import { allCountries } from '@/utils/Countries';

type Props = {
  setPhone: (phone: string) => void;
  phone: string;
  phoneError?: string;
};

const PhoneNumber = forwardRef<HTMLInputElement, Props>(
  ({ phone, setPhone, phoneError }: Props, ref) => {
    return (
      <div className="flex flex-col">
        <PhoneInput
          defaultCountry="us"
          placeholder="رقم الهاتف المحمول"
          className={cn(
            "border-[1px] border-dark-400 flex pl-2 rounded-sm",
            phoneError && "border-danger-400"
          )}
          onChange={(newValue) => {
            setPhone(newValue);
          }}
          value={phone}
          countrySelectorStyleProps={{
            buttonStyle: {
              border: "none",
            },
            buttonContentWrapperStyle: {
              height: "max-content",
            },
            dropdownStyleProps: {
              style: {
                width: "max-content",
                right: "0",
                zIndex: 201,
              },
            },
            style: {
              width: "40px",
            },
          }}
          inputStyle={{
            padding: "20px 10px",
            width: "100%",
            borderRadius: "0",
            border: "none",
          }}
          countries={allCountries}
          inputProps={{
            dir: "ltr",
            name: "phone",
            // @ts-ignore
            ref: ref as React.MutableRefObject<HTMLInputElement>,
          }}
          inputRef={ref as React.MutableRefObject<HTMLInputElement>}
        />
        {phoneError && (
          <div>
            <span className="text-red-400 text-xs mr-[10px]">{phoneError}</span>
          </div>
        )}
      </div>
    );
  }
);

PhoneNumber.displayName = "PhoneNumber";
export default PhoneNumber;
