import Title from '@/src/components/Common/Layout/Title';

import Boxes from './Boxes';

export default function Services() {
  return (
    <div className="flex flex-col gap-[50px] lg:gap-[100px]">
      <Title
        title="لماذا"
        subTitle="اكتبلي"
        content="موقع اكتبلي يُعَدّ رائدًا ومبتكرًا بشكل استثنائي، حيث يُقدم دعمًا قويًا لموظفي المؤسسات الحكومية، الطلاب، ورواد الأعمال في كتابة الملفات، والبريد الإلكتروني، والوثائق الرسمية، بالإضافة إلى دعمه للعديد من اللغات والصيغ المختلفة."
      />
      <Boxes />
    </div>
  );
}
