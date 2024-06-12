"use client";
import { PhoneInput } from 'react-international-phone';

import { cn } from '@/src/libs/cn';

import ErrorProvider from '../Layout/ErrorProvider';

export default function PhoneNumber({
  phone,
  setPhone,
  phoneNumber,
  phoneError,
  setPhoneError,
}: {
  setPhone: any;
  phone: string;
  phoneNumber: any;
  phoneError: boolean;
  setPhoneError: any;
}) {
  const arabianCountries: any = [
    ["", "ae", "971", "... ... ..."],
    ["", "bh", "973", "... .. .."],
    ["", "dj", "253", "... ... ."],
    ["", "dz", "213", "... ... ..."],
    ["", "eg", "20", "... ... ...."],
    ["", "iq", "964", "... ... ..."],
    ["", "jo", "962", "... ... ."],
    ["", "kw", "965", "... ... ."],
    ["", "lb", "961", "... ... ."],
    ["", "ly", "218", "... ... ..."],
    ["", "ma", "212", "... ... ..."],
    ["", "mr", "222", "... ... ."],
    ["", "om", "968", "... ... ."],
    ["", "ps", "970", "... ... ."],
    ["", "qa", "974", "... ... ."],
    ["", "sa", "966", "... ... ."],
    ["", "sd", "249", "... ... ."],
    ["", "sy", "963", "... ... ."],
    ["", "tn", "216", "... ... ."],
    ["", "ye", "967", "... ... ."],
  ];

  return (
    <div className="flex flex-col gap-3">
      <PhoneInput
        defaultCountry="eg"
        className={cn(
          "border-[1px] border-dark-400 flex px-2 rounded-sm",
          phoneError && "border-error-900"
        )}
        onChange={(newValue) => {
          setPhone(newValue);
          if (phone.length < 11 && phone.length > 5) {
            setPhoneError(true);
            return;
          }
          setPhoneError(false);
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
            },
          },
          style: {
            width: "100%",
          },
        }}
        inputStyle={{
          padding: "20px 10px",
          width: "700px",
          borderRadius: "0",
          border: "none",
        }}
        countries={arabianCountries}
        inputProps={{
          dir: "ltr",
          name: "phoneNumber",
          // @ts-ignore
          ref: phoneNumber,
        }}
      />
      {phoneError && (
        <ErrorProvider
          errors={{
            phoneNumber: {
              message: "يرجي ادخال رقم هاتف صحيح",
            },
          }}
          target="phoneNumber"
        />
      )}
    </div>
  );
}
