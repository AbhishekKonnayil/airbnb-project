"use client";
import UseSearchModel from "@/app/hooks/useSearchModel";
import React from "react";
import Model from "./Model";

const SearchModel = () => {
  let content = <></>;
  const searchModel = UseSearchModel();
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
