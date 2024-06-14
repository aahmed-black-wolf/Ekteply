import { z } from 'zod';

export const SignSchema = z
  .object({
    email: z
      .string()
      .email({ message: "يرجي ادحال بريد الكتروني  صحيح" })
      .min(5, { message: "يرجي ادحال بريد الكتروني  صحيح" }),

    password: z
      .string()
      .min(10, { message: "يرجي ادحال  كلمه السر بشكل سليم بشكل صحيح" }),

    confirmPassword: z
      .string()
      .min(10, { message: "يرجي بينات تاكيد كلمه السر بشكل صحيح" }),
    phoneNumber: z.string().min(6),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "يرجي ادخال كلمه سر متطابقه",
        path: ["confirmPassword"],
      });
    }
  });

export const inputsFields = [
  { name: "email", type: "email", placeholder: "البريد الالكتروني" },
  { name: "password", type: "password", placeholder: "كلمه السر" },
  { name: "confirmPassword", type: "password", placeholder: "تاكيد كلمه السر" },
];
