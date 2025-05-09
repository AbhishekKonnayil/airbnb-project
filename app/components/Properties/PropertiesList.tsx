"use client";
import { useEffect, useState } from "react";
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

const PropertiesList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const getProperties = async () => {
    const url = "/api/properties/";
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
