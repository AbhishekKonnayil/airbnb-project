"use client";
import { useEffect, useState } from "react";
import PropertiesListItems from "./PropertiesListItems";
import { json } from "stream/consumers";
import { error } from "console";
export type PropertyType = {
  title: string;
  id: string;
  price_per_night: string;
  image_url: string;
};

const PropertiesList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const getProperties = async () => {
    const url = "http://localhost:8000/api/properties/";

    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);

        setProperties(json.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
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
