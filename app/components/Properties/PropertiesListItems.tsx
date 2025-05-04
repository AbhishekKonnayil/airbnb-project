import Image from "next/image";
import React from "react";
import BeachImage from "../../../public/cabin-image1.avif";

const PropertiesListItems = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={BeachImage}
          alt="cabin-image1"
          sizes="(max-width:768px)768px,(max-width:1200px),768px,768px"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">Property Name</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500"><strong>$200</strong> for 5 nights</p>
      </div>
    </div>
  );
};

export default PropertiesListItems;
