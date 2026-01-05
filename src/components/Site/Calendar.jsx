import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export function CalendarDemo() {
  const [date, setDate] = useState(undefined);

  return (
    <div className="@container max-w-6xl px-4 mx-auto flex justify-between">
      <p>kalendar</p>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />
    </div>
  );
}
