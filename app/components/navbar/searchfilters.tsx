"use client";
import React from "react";
import SearchModel from "../Models/SearchModel";
import UseSearchModel from "@/app/hooks/useSearchModel";

const SearchFilters = () => {
  const searchModel = UseSearchModel();
  return (
    <div
      onClick={() => searchModel.open("location")}
      className="flex flex-row h-[48px] lg:h-[64px] items-center justify-between border rounded-full "
    >
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 justify-center flex flex-col rounded-full hover:bg-gray-100 ">
            <p className="text-xs font-semibold">where</p>
            <p className="text-sm font-semibold">location</p>
          </div>
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 justify-center flex flex-col rounded-full hover:bg-gray-100 ">
            <p className="text-xs font-semibold">check in</p>
            <p className="text-sm font-semibold">Add dates</p>
          </div>
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 justify-center flex flex-col rounded-full hover:bg-gray-100 ">
            <p className="text-xs font-semibold">check out</p>
            <p className="text-sm font-semibold">Add dates</p>
          </div>
          <div className="cursor-pointer  h-[48px] lg:h-[64px] px-8 justify-center flex flex-col rounded-full hover:bg-gray-100 ">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm font-semibold">Add guests</p>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="cursor-pointer bg-airbnb rounded-full p-2 lg:p-4 text-white hover:bg-airbnb-dark transition-colors">
          <svg
            viewBox="0 0 32 32"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentColor",
              strokeWidth: 4,
              overflow: "visible",
            }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
