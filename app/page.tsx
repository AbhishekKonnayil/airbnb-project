import React from "react";
import Categories from "./components/categories";
import PropertiesList from "./components/Properties/PropertiesList";

const Home = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <Categories />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <PropertiesList />
      </div>
    </main>
  );
};

export default Home;
