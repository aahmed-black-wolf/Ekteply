"use client";
import {
  FormProvider,
  useForm,
} from 'react-hook-form';

import DatePicker from '@/src/components/Common/Date/DatePicker';
import { zodResolver } from '@hookform/resolvers/zod';

import Contollers from './Contollers';
import InputsForm from './InputsForm';
import {
  searchSchema,
  SERACH_SCHEMA,
} from './Schema';
import SelectForm from './SelectForm';
import TextArea from './TextArea';

export default function SearchForm() {
  const methods = useForm<SERACH_SCHEMA>({
    resolver: zodResolver(searchSchema),
    defaultValues: {},
  });

  const handleSearching = (data: SERACH_SCHEMA) => {
    console.log(data);
  };

  console.log(methods.formState.errors);

  return (
    <div className="h-max pb-[50px] w-full min-h-[500px]" dir="rtl">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSearching)}
          className="w-full  gap-[30px] flex flex-col justify-center items-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
            <InputsForm />
            <SelectForm />
            <DatePicker />
          </div>
          <TextArea />
          <Contollers />
        </form>
      </FormProvider>
    </div>
  );
}
