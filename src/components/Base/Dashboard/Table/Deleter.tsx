import React from "react";

import { Button } from "@nextui-org/react";

export default function Deleter() {
  return (
    <div className="flex gap-3">
      <Button className="min-w-[52px] h-[20px] p-0 bg-error-800 text-error-900">
        حذف
      </Button>
      <Button className="min-w-[52px] h-[20px] p-0 bg-success-800 text-success-900">
        تنزيل
      </Button>
    </div>
  );
}
