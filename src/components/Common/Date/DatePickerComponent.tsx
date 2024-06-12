import "react-day-picker/dist/style.css";

import { DayPicker, Matcher } from "react-day-picker";

export default function DatePickerComponent({
  type,
  selected,
  setSelected,
}: {
  type: "default" | "single" | "multiple" | "range";
  selected: Matcher | Matcher[] | undefined;
  setSelected: any;
}) {
  return (
    //@ts-ignore
    <DayPicker
      initialFocus
      fromDate={new Date()}
      captionLayout="dropdown"
      fromYear={1950}
      toYear={new Date().getFullYear()}
      mode={type}
      numberOfMonths={1}
      selected={selected}
      onSelect={setSelected}
    />
  );
}
