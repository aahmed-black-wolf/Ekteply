import { Button } from "@nextui-org/react";

export default function PriceController() {
  return (
    <div className="flex gap-5">
      <Button
        radius="full"
        size="lg"
        className="bg-dark-800 text-light-900 font-[500]"
      >
        خطط شهريه
      </Button>
      <Button
        radius="full"
        size="lg"
        variant="bordered"
        className="cursor-not-allowed font-[500]"
        disabled={true}
      >
        <span>خطط سنويه</span> - <span className="font-[800]">(قريبًا)</span>
      </Button>
    </div>
  );
}
