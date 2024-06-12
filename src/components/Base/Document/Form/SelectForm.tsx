"use client";

import { useFormContext } from 'react-hook-form';

import Selector from '@/src/components/Common/interface/Selector';

import {
  fileFormat,
  linesNums,
  modelType,
  theListOfTypes,
  top120Languages,
} from './SelectData';

export default function SelectForm() {
  const { control } = useFormContext();
  const selectors = [
    {
      placeholder: "نوع الجه الموجه اليها",
      name: "entity_type",
      data: theListOfTypes,
      message: "حقل الزامي (الأختيرات غير الزاميه)",
      isFixed: true,
    },
    {
      placeholder: "نوع النموزج",
      name: "application_type",
      data: modelType,
      message: "حقل الزامي (الأختيرات الزاميه)",
    },
    {
      placeholder: "تنسيق الملف",
      name: "file_format",
      data: fileFormat,
      message: "حقل الزامي (الأختيرات الزاميه)",
    },
    {
      placeholder: "عدد الاسطر",
      name: "lines_count",
      data: linesNums,
      message: "حقل الزامي (الأختيرات غير الزاميه)",
      isFixed: true,
    },
    {
      placeholder: "لغه الملف",
      name: "file_lang",
      data: top120Languages,
      message: "حقل الزامي (الأختيرات الزاميه)",
    },
  ];
  return (
    <>
      {selectors.map((target, index) => (
        <Selector key={index} {...target} control={control as any} />
      ))}
    </>
  );
}
