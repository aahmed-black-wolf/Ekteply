import { z } from 'zod';

const validateString = (v: string) => {
  let n = Number(v);
  return isNaN(n) && v?.length > 0;
};
const message = { message: "يرجي ادخال البيانات  صحيحه" };

export const searchSchema = z.object({
  title: z
    .string({ required_error: "يجب ادخال عنوان البحث" })
    .min(3, "يرجي ادخال البينات بشكل صحيح اقل عدد 3 احرف")
    .refine(validateString, message),
  writer_name: z
    .string({ required_error: "يجب ادخال اسم المرسل" })
    .refine(validateString, message)
    .optional(),
  entity_name: z
    .string({ required_error: "يجب ادخال اسم الجة" })
    .refine(validateString, message)
    .optional(),
  article_type: z
    .string({ required_error: "يجب ادخال نوع المحتوي او الجة" })
    .min(3, "يرجي ادخال البينات بشكل صحيح اقل عدد 3 احرف")
    .refine(validateString, message),
  entity_type: z
    .string({ required_error: "يجب ادخال نوع الجة" })
    .min(3, "يرجي ادخال البينات بشكل صحيح اقل عدد 3 احرف")
    .refine(validateString, message),
  application_type: z
    .string({ required_error: "يجب ادخال نوع النموزج" })
    .min(1, "يرجي ادخال البينات بشكل صحيح اقل عدد 3 احرف")
    .refine(validateString, message),
  file_format: z
    .string({ required_error: "يجب ادخال نوع الملف النهائي" })
    .min(3, "يرجي ادخال البينات بشكل صحيح اقل عدد 3 احرف")
    .refine(validateString, message),
  lines_count: z
    .string({ required_error: "يجب ادخال عدد اسطر الملف" })
    .min(3, "يرجي ادخال البينات بشكل صحيح اقل عدد 3 احرف")
    .refine(validateString, message),
  file_lang: z
    .string({ required_error: "يجب ادخال ادخال لغه الملف" })
    .min(3, "يرجي ادخال البينات بشكل صحيح اقل عدد 3 احرف")
    .refine(validateString, message),
  file_date: z.date({ required_error: "يجب ادخال تاريخ اصدار الملف" }),
  introduction: z
    .string()
    .min(60, "يجب ادخال  60 حرف علي الاقل 1000 حرف كحد اقصي")
    .max(3000, "يجب ادخال  60 حرف علي الاقل 1000 حرف كحد اقصي")
    .optional(),
  conclusion: z
    .string()
    .min(60, "يجب ادخال  60 حرف علي الاقل 1000 حرف كحد اقصي")
    .max(3000, "يجب ادخال  60 حرف علي الاقل 1000 حرف كحد اقصي")
    .optional(),
});

export type SERACH_SCHEMA = z.infer<typeof searchSchema>;
