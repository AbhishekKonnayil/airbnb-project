import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImage from "../../../public/logo.png";
import SearchFilters from "./searchfilters";
import UserNav from "./usernav";
import AddPropertyButton from "./AddPropertyButton";
import { getUserId } from "@/app/lib/Action";

const Navbar = async () => {
  const userId = await getUserId();
  return (
    <div className="w-full top-0 left-0 fixed bg-white border-b z-10 py-6">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={LogoImage} alt="Logo Image" width={180} height={38} />
          </Link>
          <div className="flex space-x-6">
            <SearchFilters />
          </div>
          <div className="flex items-center space-x-6">
            <AddPropertyButton 
            userId={userId}/>
            <UserNav 
            userId={userId}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
