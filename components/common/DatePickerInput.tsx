'use client';
import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomDateInputProps, DatePickerInputProps } from '@/interfaces';
import Icon from './Icon';
import { IconName } from '@/constants/IconName';

// Custom input with icon inside
const CustomDateInput = forwardRef<HTMLInputElement, CustomDateInputProps>(
  ({ value, onClick, placeholder }, ref) => (
    <div className="relative">
      <input
        ref={ref}
        value={value}
        onClick={onClick}
        placeholder={placeholder}
        readOnly
        className="w-full cursor-pointer rounded border border-gray-300 p-2 pr-10"
      />
      {/* Date calendar icon */}
      <Icon
        name={IconName.Date}
        size={20}
        className="text-muted-foreground pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
      />
    </div>
  ),
);

CustomDateInput.displayName = 'CustomDateInput';

export default function DatePickerInput({ label, minDate, onSelect }: DatePickerInputProps) {
  const [selected, setSelected] = useState<Date | null>(null);

  return (
    <div className="mt-4 w-full">
      <label className="mb-2 block font-semibold">{label}</label>
      <DatePicker
        selected={selected}
        onChange={(date) => {
          setSelected(date);
          if (date) onSelect(format(date, 'dd/MM/yy'), date);
        }}
        dateFormat="dd/MM/yy"
        minDate={minDate}
        placeholderText={`DD/MM/YY`}
        customInput={<CustomDateInput />} // ✅ use custom input
        wrapperClassName="w-full"
      />
    </div>
  );
}
