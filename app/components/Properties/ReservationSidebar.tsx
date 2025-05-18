"use client";

import UseLoginModel from "@/app/hooks/useLoginModel";
import { differenceInDays, eachDayOfInterval, format } from "date-fns";
import { useEffect, useState } from "react";
import { Range } from "react-date-range";
import DatePicker from "../forms/Calender";
import apiSevice from "@/app/apiSevice";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};
export type Property = {
  id: string;
  guests: number;
  price_per_night: number;
};

interface ReservationSidebarProps {
  userId: string | null;
  property: Property;
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
  property,
  userId,
}) => {
  const loginModel = UseLoginModel();

  const [fee, setFee] = useState<number>(0);
  const [nights, setNights] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [guests, setGuests] = useState<string>("1");

  const guestRange = Array.from(
    { length: property.guests },
    (_, index) => index + 1
  );

  const performBooking = async () => {
    console.log('perform booking',userId)
    if (userId) {
      if (dateRange.startDate && dateRange.endDate) {
        const formData = new FormData();
        formData.append("guests", guests);
        formData.append(
          "start_date",
          format(dateRange.startDate, "yyyy-MM-dd")
        );
        formData.append("end_date", format(dateRange.endDate, "yyyy-MM-dd"));
        formData.append("number_of_nights", nights.toString());
        formData.append("total_price", totalPrice.toString());

        const response = await apiSevice.post(
          `/api/properties/${property.id}/book/`,
          formData
        );

        if (response.success) {
          console.log("booking successful");
        } else {
          console.log("something went wrong");
        }
      }
    } else {
      loginModel.open();
    }
  };

  const _setDateRange = (Selection: any) => {
    const newStartDate = new Date(Selection.startDate);
    const newEndDate = new Date(Selection.endDate);

    if (newEndDate <= newStartDate) {
      newEndDate.setDate(newStartDate.getDate() + 1);
    }

    setDateRange({
      ...dateRange,
      startDate: newStartDate,
      endDate: newEndDate,
    });
  };
  console.log("41");
  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);
      if (dayCount && property.price_per_night) {
        const _fee = ((dayCount * property.price_per_night) / 100) * 5;

        setFee(_fee);

        setTotalPrice(dayCount * property.price_per_night + _fee);

        setNights(dayCount);
      } else {
        const _fee = (property.price_per_night / 100) * 5;

        setFee(_fee);

        setTotalPrice(property.price_per_night + _fee);

        setNights(1);
      }
    }
  }, [dateRange]);

  return (
    <aside className="p-6 mt-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h1 className="mb-5 text-2xl">${property.price_per_night} per night</h1>
      <DatePicker
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
      />
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="block font-bold text-xs mb-2">Guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full -ml-1 text-xm"
        >
          {guestRange.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
      <button onClick={performBooking}
      className="w-full mb-6 py-6 text-center text-white bg-airbnb rounded-xl hover:bg-airbnb-dark">
        Book
      </button>
      <div className="mb-4 flex justify-between align-middle">
        <p>
          ${property.price_per_night} x {nights}
        </p>
        <p>${property.price_per_night * nights}</p>
      </div>
      <div className="mb-4 flex justify-between align-middle">
        <p>airbnb fee</p>
        <p>${fee}</p>
      </div>
      <hr />
      <div className="mt-4 mb-4 flex justify-between align-middle">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
    </aside>
  );
};

export default ReservationSidebar;
