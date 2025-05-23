"use client";
import React, { useEffect, useState } from "react";
import PropertiesListItems from "./PropertiesListItems";
import { json } from "stream/consumers";
import { error } from "console";
import apiSevice from "@/app/apiSevice";
import UseSearchModel from "@/app/hooks/useSearchModel";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";
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
  const searchModel = UseSearchModel();
  const params = useSearchParams();
  console.log(searchModel.query);
  const country = searchModel.query.country;
  const category = searchModel.query.category;
  const numBathrooms = searchModel.query.bathrooms;
  const numBedrooms = searchModel.query.bedrooms;
  const numGuests = searchModel.query.guests;
  const checkInDate = searchModel.query.checkIn;
  const checkOutDate = searchModel.query.checkOut;
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
    } else {
      let urlQuery = "";
      if (country) {
        urlQuery += "&country=" + country;
      }
      if (category) {
        urlQuery += "&category=" + category;
      }
      if (numGuests) {
        urlQuery += "&numGuests=" + numGuests;
      }
      if (numBedrooms) {
        urlQuery += "&numBedrooms=" + numBedrooms;
      }
      if (numBathrooms) {
        urlQuery += "&numBathrooms=" + numBathrooms;
      }
      if (checkInDate) {
        urlQuery += "&checkin=" + format(checkInDate, "yyyy-MM-dd");
      }
      if (checkOutDate) {
        urlQuery += "&checkout=" + format(checkOutDate, "yyyy-MM-dd");
      }
      if (urlQuery.length) {
        urlQuery = "?" + urlQuery.substring(1);

        url += urlQuery;
      }
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
  }, [category, searchModel.query, params]);

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
