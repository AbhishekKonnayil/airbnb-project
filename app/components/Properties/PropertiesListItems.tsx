import Image from "next/image";
import React from "react";
import BeachImage from "../../../public/cabin-image1.avif";
import { PropertyType } from "./PropertiesList";

interface PropertyProps {
  property: PropertyType;
}

const PropertiesListItems:React.FC<PropertyProps> = ({property}) => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={property.image_url}
          alt="cabin-image1"
          sizes="(max-width:768px)768px,(max-width:1200px),768px,768px"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">{property.title}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>{property.price_per_night}</strong> for 5 nights
        </p>
      </div>
    </div>
  );
};

export default PropertiesListItems;
