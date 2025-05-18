"use client";
import React, { useEffect, useState } from "react";
import PropertiesListItems from "./PropertiesListItems";
import { json } from "stream/consumers";
import { error } from "console";
import apiSevice from "@/app/apiSevice";
export type PropertyType = {
  title: string;
  id: string;
  price_per_night: string;
  image_url: string;
};

interface PropertiesListProps {
  landlord_id: string | null;
}

const PropertiesList: React.FC<PropertiesListProps> = ({ landlord_id }) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const getProperties = async () => {
    let url = "/api/properties/";
    if (landlord_id) {
      url += `?landlord_id=${landlord_id}`;
    }
    const tmpProperties = await apiSevice.get(url);

    setProperties(tmpProperties.data);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      {properties.map((property) => {
        return <PropertiesListItems key={property.id} property={property} />;
      })}
    </>
  );
};

export default PropertiesList;
