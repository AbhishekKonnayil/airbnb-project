import Image from "next/image";
import React from "react";
import BeachImage from "../../public/cabin-image1.avif";

const MyReservations = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
      <h1 className="text-2xl my-6 mb-2">My Reservations</h1>
      <div className="space-y-4">
        <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src={BeachImage}
                alt="cabin-image1"
                className="h-full w-full object-cover hover:scale-110 transition-transform"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 space-y-2">
            <h1 className="text-xl mb-4">Property Name</h1>
            <p>
              <strong>Check in date:</strong> 14/02/2025
            </p>
            <p>
              <strong>Check out date:</strong> 14/02/2025
            </p>
            <p>
              <strong>Number of nights:</strong> 3
            </p>
            <p>
              <strong>Total price:</strong> $200
            </p>
            <button className="bg-airbnb text-white px-6 py-4 rounded-xl mt-6 hover:bg-airbnb-dark transition-colors cursor-pointer duration-300">
              Go to property
            </button>
          </div>
        </div>
        <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src={BeachImage}
                alt="cabin-image1"
                className="h-full w-full object-cover hover:scale-110 transition-transform"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 space-y-2">
            <h1 className="text-xl mb-4">Property Name</h1>
            <p>
              <strong>Check in date:</strong> 14/02/2025
            </p>
            <p>
              <strong>Check out date:</strong> 14/02/2025
            </p>
            <p>
              <strong>Number of nights:</strong> 3
            </p>
            <p>
              <strong>Total price:</strong> $200
            </p>
            <button className="bg-airbnb text-white px-6 py-4 rounded-xl mt-6 hover:bg-airbnb-dark transition-colors cursor-pointer duration-300">
              Go to property
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyReservations;
