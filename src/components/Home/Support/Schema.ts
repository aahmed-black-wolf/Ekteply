import { z } from "zod";

export const inputsFields = [
  {
    name: "fullName",
    type: "text",
    placeholder: "الاسم بالكامل",
  },
  {
    name: "email",
    type: "email",
    placeholder: "الحساب الالكتروني",
  },
  {
    name: "message",
    type: null,
    placeholder: "التفاصيل...",
  },
];

export const ContactSchema = z.object({
  fullName: z
    .string()
    .min(10, { message: "يرجي ادخال اسمك الكامل بشكل  صحيح" }),
  email: z
    .string()
    .email({ message: "يرجي ادحال بريد الكتروني  صحيح" })
    .min(5, { message: "يرجي ادحال بريد الكتروني  صحيح" }),

  country: z
    .string()
    .min(3, { message: "يرجي ادحال  اسم القريه او المديه بشكل صحيح" }),
  message: z
    .string()
    .min(50, { message: "يجب ان تتكون الرساله بحد ادني من 50 حرف " })
    .max(200, { message: "يجب ان تتكون الرساله بحد اقصي من 200 حرف " }),
});

export type ContactType = z.infer<typeof ContactSchema>;
