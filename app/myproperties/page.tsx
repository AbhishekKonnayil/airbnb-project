import React from "react";
import PropertiesList from "../components/Properties/PropertiesList";
import { getUserId } from "../lib/Action";

const MyProperties = async () => {
  const userId = await getUserId();
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
      <h1 className="text-2xl my-6"> My Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PropertiesList landlord_id={userId} />
      </div>
    </main>
  );
};

export default MyProperties;
