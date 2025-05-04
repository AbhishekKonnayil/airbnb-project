import React from "react";

const ReservationSidebar = () => {
  return (
    <aside className="p-6 mt-4 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h1 className="mb-5 text-2xl">$200 per night</h1>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="block font-bold text-xs mb-2">Guests</label>
        <select className="w-full -ml-1 text-xm">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <button className="w-full mb-6 py-6 text-center text-white bg-airbnb rounded-xl hover:bg-airbnb-dark">
        Book
      </button>
    </aside>
  );
};

export default ReservationSidebar;
