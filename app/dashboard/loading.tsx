import React from 'react';

import { Progress } from '@nextui-org/react';

export default function loading() {
  return (
    <div className="w-[100%] h-[100vh] justify-center items-center   flex ">
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        color="warning"
        className="max-w-md"
      />
    </div>
  );
}
