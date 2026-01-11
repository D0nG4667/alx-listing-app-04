import SingleDateInput from '@/components/common/DatePickerInput';
import { useState } from 'react';
import { differenceInDays } from 'date-fns';
import { SERVICE_FEE, WEEKLY_DISCOUNT } from '@/constants';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkin, setCheckin] = useState<Date | null>(null);
  const [checkout, setCheckout] = useState<Date | null>(null);

  // ✅ Calculate nights dynamically
  const nights = checkin && checkout ? differenceInDays(checkout, checkin) : 7;

  const weeklyDiscount = WEEKLY_DISCOUNT;
  const serviceFee = SERVICE_FEE;
  const total = price * nights + weeklyDiscount + serviceFee;

  return (
    <div className="mt-3 rounded-md border border-gray-200 p-6 shadow-lg">
      <h3 className="border-b border-gray-300 text-xl font-semibold">
        ${price}
        <span className="text-md font-normal">/night</span>
      </h3>
      <div className="mt-4 flex w-full flex-col space-y-3">
        <SingleDateInput
          label="Check in"
          minDate={new Date()} // disable past dates
          onSelect={(_, rawDate) => {
            setCheckin(rawDate);
            if (checkout && rawDate && checkout < rawDate) {
              setCheckout(null); // reset checkout if invalid
            }
          }}
        />
        <SingleDateInput
          label="Check out"
          minDate={checkin ?? new Date()} // must be after check-in
          onSelect={(_, rawDate) => setCheckout(rawDate)}
        />
      </div>

      {/* Cost breakdown */}
      <div className="mt-6 space-y-2 font-bold">
        <div className="flex justify-between">
          <p className="text-light-foreground">
            ${price} × {nights} nights
          </p>
          <span>${price * nights}</span>
        </div>
        <div className="flex justify-between">
          <p className="text-light-foreground">Weekly discount</p>
          <span>{weeklyDiscount}</span>
        </div>
        <div className="flex justify-between">
          <p className="text-light-foreground">Service fee</p>
          <span>${serviceFee}</span>
        </div>
        {/* Total payment */}
        <div className="mt-4 flex justify-between border-t border-gray-300">
          <p className="text-light-foreground">Total payment:</p>
          <span className="text-accent">
            <strong>${total}</strong>
          </span>
        </div>
      </div>

      {/* Reserve button */}
      <button className="bg-accent mt-4 w-full rounded-md px-4 py-2 text-white">Reserve now</button>
    </div>
  );
};

export default BookingSection;
