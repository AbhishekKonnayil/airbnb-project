import Image from "next/image";
import React from "react";
import BeachImage from "../../public/cabin-image1.avif";
import { getUserId } from "../lib/Action";
import apiSevice from "../apiSevice";
import Link from "next/link";
const MyReservations = async () => {
  const reservations = await apiSevice.get("/api/auth/myreservations/");
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
      <h1 className="text-2xl my-6 mb-2">My Reservations</h1>
      <div className="space-y-4">
        {reservations.map((reservation: any) => {
          return (
            <div
              key={reservation.id}
              className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300"
            >
              <div className="col-span-1">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                  <Image
                    src={reservation.property.image_url}
                    alt="cabin-image1"
                    className="h-full w-full object-cover hover:scale-110 transition-transform"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-3 space-y-2">
                <h1 className="text-xl mb-4">{reservation.property.title}</h1>
                <p>
                  <strong>Check in date: </strong>
                  {reservation.start_date}
                </p>
                <p>
                  <strong>Check out date: </strong>
                  {reservation.start_date}
                </p>
                <p>
                  <strong>Number of nights: </strong>
                  {reservation.number_of_nights}
                </p>
                <p>
                  <strong>Total price: </strong> ${reservation.total_price}
                </p>
                <Link href={`/properties/${reservation.property.id}`}>
                  <button className="bg-airbnb text-white px-6 py-4 rounded-xl mt-6 hover:bg-airbnb-dark transition-colors cursor-pointer duration-300">
                    Go to property
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default MyReservations;
