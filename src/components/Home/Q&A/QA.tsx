"use client";

import Title from '@/src/components/Common/Layout/Title';

import CommonQ from './CommonQ';
import { data } from './data';

export default function QA() {
  return (
    <div>
      <Title
        title="الأسئلة الشائعة عن "
        subTitle="اكتبلي"
        content=""
        key={"Q&A"}
      />
      <CommonQ data={data} />
    </div>
  );
}
