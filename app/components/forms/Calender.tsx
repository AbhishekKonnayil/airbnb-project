import React from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "./styles.css";
import "./default.css";

interface DatePickerProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  bookedDates?: Date[];
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  bookedDates,
}) => {
  return (
    <div >
      <DateRange
        className="w-full border border-gray-400 rounded-xl mb-6"
        rangeColors={[`#262626`]}
        ranges={[value]}
        date={new Date()}
        onChange={onChange}
        direction="vertical"
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={bookedDates}
      />
    </div>
  );
};

export default DatePicker;
