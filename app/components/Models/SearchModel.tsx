"use client";
import UseSearchModel, { SearchQuery } from "@/app/hooks/useSearchModel";
import React, { useState } from "react";
import Model from "./Model";
import SelectCountry, { SelectCountryType } from "../forms/SelectCountry";
import CustomButton from "../forms/CustomButton";
import Calender from "../forms/Calender";
import { Range } from "react-date-range";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const SearchModel = () => {
  let content = <></>;
  const [numGuests, setNumGuests] = useState<string>("1");
  const [numBedrooms, setNumBedrooms] = useState<string>("0");
  const [numBathrooms, setNumBathrooms] = useState<string>("0");
  const [country, setCountry] = useState<SelectCountryType>();
  const searchModel = UseSearchModel();
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  //
  //

  // search and close

  const searchAndClose = () => {
    const newSearchQuery: SearchQuery = {
      country: country?.label,
      guests: parseInt(numGuests),
      bathrooms: parseInt(numBathrooms),
      bedrooms: parseInt(numBedrooms),
      checkIn: dateRange.startDate,
      checkOut: dateRange.endDate,
      category: "",
    };
    searchModel.setQuery(newSearchQuery);
    searchModel.close();
  };

  // Set date range

  const _setDateRange = (Selection: Range) => {
    if (searchModel.step == "checkin") {
      searchModel.open("checkout");
    } else if (searchModel.step == "checkout") {
      searchModel.open("details");
    }
    setDateRange(Selection);
  };

  //
  //
  // Content

  const contentLocation = (
    <>
      <h2 className="mb-6 text-2xl ">Where do you want to go?</h2>
      <SelectCountry
        value={country}
        onChange={(value) => setCountry(value as SelectCountryType)}
      />

      <div className="mt-6 flex flex-row gap-4 ">
        <CustomButton
          label="Check in date =>"
          onClick={() => searchModel.open("checkin")}
          className="w-full"
        />
      </div>
    </>
  );

  const contentCheckin = (
    <>
      <h2 className="mb-6 text-2xl ">Where do you want to Check in?</h2>
      <Calender
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
      />

      <div className="mt-6 flex flex-row gap-4 ">
        <CustomButton
          label="<= Location"
          onClick={() => searchModel.open("location")}
          className="w-full"
        />
        <CustomButton
          label="Check out date =>"
          onClick={() => searchModel.open("checkout")}
          className="w-full"
        />
      </div>
    </>
  );
  const contentCheckout = (
    <>
      <h2 className="mb-6 text-2xl ">Where do you want to Check out?</h2>
      <Calender
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
      />

      <div className="mt-6 flex flex-row gap-4 ">
        <CustomButton
          label="<= Check in date"
          onClick={() => searchModel.open("checkin")}
          className="w-full"
        />
        <CustomButton
          label="Details =>"
          onClick={() => searchModel.open("details")}
          className="w-full"
        />
      </div>
    </>
  );
  const contentDetails = (
    <>
      <h2 className="mb-6 text-2xl ">Details</h2>
      <div className="space-y-4">
        <div className="space-y-4">
          <label>Number of Guests:</label>
          <input
            type="number"
            min={1}
            value={numGuests}
            onChange={(e) => setNumGuests(e.target.value)}
            className=" px-4 h-14 border border-gray-400 w-full rounded-lg mt-4"
          />
        </div>
        <div>
          <label>Number of Bedrooms:</label>
          <input
            type="number"
            value={numBedrooms}
            onChange={(e) => setNumBedrooms(e.target.value)}
            className=" px-4 h-14 border border-gray-400 w-full rounded-lg mt-4"
          />
        </div>
        <div>
          <label>Number of Bathrooms:</label>
          <input
            type="number"
            value={numBathrooms}
            onChange={(e) => setNumBathrooms(e.target.value)}
            className=" px-4 h-14 border border-gray-400 w-full rounded-lg mt-4"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-row gap-4 ">
        <CustomButton
          label=" <= check out date"
          onClick={() => searchModel.open("checkout")}
          className="w-full"
        />
        <CustomButton
          label="search =>"
          onClick={searchAndClose}
          className="w-full"
        />
      </div>
    </>
  );

  if (searchModel.step == "location") {
    content = contentLocation;
  } else if (searchModel.step == "checkin") {
    content = contentCheckin;
  } else if (searchModel.step == "checkout") {
    content = contentCheckout;
  } else if (searchModel.step == "details") {
    content = contentDetails;
  }

  return (
    <div>
      <Model
        isOpen={searchModel.isOpen}
        label="search"
        close={searchModel.close}
        content={content}
      />
    </div>
  );
};
export default SearchModel;
