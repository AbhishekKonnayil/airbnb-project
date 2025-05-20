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
  is_favorite: boolean;
};

interface PropertiesListProps {
  landlord_id: string | null;
  favorites?: boolean | null;
}

const PropertiesList: React.FC<PropertiesListProps> = ({
  landlord_id,
  favorites,
}) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const markFavorite = (id: string, is_favorite: boolean) => {
    const tmpProperties = properties.map((property: PropertyType) => {
      if (property.id == id) {
        property.is_favorite = is_favorite;

        if (is_favorite) {
          console.log("added to list of favorited properties");
        } else {
          console.log("removed from list");
        }
      }
      return property;
    });
    setProperties(tmpProperties);
  };

  const getProperties = async () => {
    let url = "/api/properties/";
    if (landlord_id) {
      url += `?landlord_id=${landlord_id}`;
    } else if (favorites) {
      url += `?is_favorites=true`;
    }
    const tmpProperties = await apiSevice.get(url);
    console.log("url", url);

    setProperties(
      tmpProperties.data.map((property: PropertyType) => {
        if (tmpProperties.favorites.includes(property.id)) {
          property.is_favorite = true;
        } else {
          property.is_favorite = false;
        }
        return property;
      })
    );
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      {properties.map((property) => {
        return (
          <PropertiesListItems
            key={property.id}
            property={property}
            marKFavorite={(is_favorite: any) =>
              markFavorite(property.id, is_favorite)
            }
          />
        );
      })}
    </>
  );
};

export default PropertiesList;
