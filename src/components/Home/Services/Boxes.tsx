import React from 'react';

import fileIcon from '@/public/icons/files-save.svg';
import smartIcom from '@/public/icons/ideas.svg';
import rttIcon from '@/public/icons/rebuild-docs.svg';
import clockIcon from '@/public/icons/time-save.svg';

import Box from './Box';

export default function Boxes() {
  const boxesData = [
    { content: "كتابه دقيقه", icon: fileIcon },
    { content: "تنظيم المستندات", icon: rttIcon },
    { content: "توفير الصيغ و الافكار", icon: clockIcon },
    { content: "توفير الوقت", icon: smartIcom },
  ];
  return (
    <div className="flex h-max p-3 md:h-[200px] flex-wrap gap-3 md:gap-[30px] lg:gap-[50px] justify-center items-center">
      {boxesData.map((data, index) => (
        <Box {...data} key={index} index={index} />
      ))}
    </div>
  );
}
