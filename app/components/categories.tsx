import React from "react";
import Image from "next/image";
import cabinImage from "../../public/cabins.jpg";
import NationalParksImage from "../../public/National parks.jpg";
import CavesImage from "../../public/Caves.jpg";
import FarmsImage from "../../public/Farms.jpg";


const Categories = () => {
  return (
    <div className="pt-3 flex items-center cursor-pointer pb-6 space-x-12">
      <div className="flex flex-col items-center space-y-2 pb-4 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image src={cabinImage} alt="cabins" width={24} height={24} />
        <span className="text-xs">cabins</span>
      </div>
      <div className="flex flex-col items-center space-y-2 pb-4 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image src={NationalParksImage} alt="cabins" width={24} height={24} />
        <span className="text-xs">National Parks</span>
      </div>
      <div className="flex flex-col items-center space-y-2 pb-4 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image src={CavesImage} alt="cabins" width={24} height={24} />
        <span className="text-xs">Caves</span>
      </div>
      <div className="flex flex-col items-center space-y-2 pb-4 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image src={FarmsImage} alt="cabins" width={24} height={24} />
        <span className="text-xs">Farms</span>
      </div>
    </div>
  );
};

export default Categories;
