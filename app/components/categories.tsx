"use client";
import React, { useState } from "react";
import Image from "next/image";
import cabinImage from "../../public/cabins.jpg";
import NationalParksImage from "../../public/National parks.jpg";
import CavesImage from "../../public/Caves.jpg";
import FarmsImage from "../../public/Farms.jpg";
import UseSearchModel, { SearchQuery } from "../hooks/useSearchModel";

const Categories = () => {
  const searchModel = UseSearchModel();
  const [category, setCategory] = useState("");

  const _setCategory = (_category: string) => {
    setCategory(_category);

    const query: SearchQuery = {
      country: searchModel.query.country,
      checkIn: searchModel.query.checkIn,
      checkOut: searchModel.query.checkOut,
      bathrooms: searchModel.query.bathrooms,
      bedrooms: searchModel.query.bedrooms,
      guests: searchModel.query.guests,
      category: _category,
    };
    searchModel.setQuery(query);
  };
  return (
    <div className="pt-3 flex items-center cursor-pointer pb-6 space-x-12">
      <div
        onClick={() => _setCategory("")}
        className={`flex flex-col items-center space-y-2 pb-4 border-b-2 ${
          category == "" ? "border-black" : "border-white"
        }   opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image src={cabinImage} alt="All" width={24} height={24} />
        <span className="text-xs">All</span>
      </div>
      <div
        onClick={() => _setCategory("Cabins")}
        className={`flex flex-col items-center space-y-2 pb-4 border-b-2 ${
          category == "Cabins" ? "border-black" : "border-white"
        }   opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image src={cabinImage} alt="cabins" width={24} height={24} />
        <span className="text-xs">Cabins</span>
      </div>
      <div
        onClick={() => _setCategory("National Parks")}
        className={`flex flex-col items-center space-y-2 pb-4 border-b-2 ${
          category == "National Parks" ? "border-black" : "border-white"
        }   opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src={NationalParksImage}
          alt="national parks"
          width={24}
          height={24}
        />
        <span className="text-xs">National Parks</span>
      </div>
      <div
        onClick={() => _setCategory("Caves")}
        className={`flex flex-col items-center space-y-2 pb-4 border-b-2 ${
          category == "Caves" ? "border-black" : "border-white"
        }   opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image src={CavesImage} alt="caves" width={24} height={24} />
        <span className="text-xs">Caves</span>
      </div>
      <div
        onClick={() => _setCategory("Farms")}
        className={`flex flex-col items-center space-y-2 pb-4 border-b-2 ${
          category == "Farms" ? "border-black" : "border-white"
        }   opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image src={FarmsImage} alt="farms" width={24} height={24} />
        <span className="text-xs">Farms</span>
      </div>
    </div>
  );
};

export default Categories;
