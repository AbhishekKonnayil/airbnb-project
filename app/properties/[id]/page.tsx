import React from "react";
import Image from "next/image";
import BeachImage from "../../../public/cabin-image1.avif";
import ProfiePicture from "../../../public/profile_pic_1.jpg";
import ReservationSidebar from "@/app/components/Properties/ReservationSidebar";

const PropertyDetailPage = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-6 pb-6 ">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
        <Image
          fill
          src={BeachImage}
          alt="cabin-image1"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="text-4xl mb-4">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 Guests · 2 bedrooms · 2 beds · 1 bathroom
          </span>
          <hr />
          <div className="flex py-6 items-center space-x-4">
            <Image
              src={ProfiePicture}
              width={40}
              height={40}
              alt="ProfilePicture"
              className="rounded-full"
            />
            <p>
              <strong>Abhishek</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            igrf9rg9f14rghqoiwehgfoiqewvfsiudvfgbiugbrfigiwgugfdugugogrvygv
            jhvcurg7yrvuvycurvgfcrfgvcuvcuvocyrvvvvvvvrrrtfg87tvbuyb8dbcuyrvcidshcoqh87guvrufv
            i7 vyuv v yv7fvr7uwcvuyrvfif
          </p>
        </div>
        <div>
          <ReservationSidebar />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
