"use client";
import useAddPropertyModel from "@/app/hooks/useAddPropertyModel";
import React from "react";
import UseLoginModel from "@/app/hooks/useLoginModel";

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
  const loginModel = UseLoginModel();
  const addPropertyModel = useAddPropertyModel();
  const airbnbYourHome = () => {
    {
      userId ? addPropertyModel.open() : loginModel.open();
    }
  };
  return (
    <div
      onClick={airbnbYourHome}
      className="cursor-pointer p-2 text-sm rounded-full hover:bg-gray-200"
    >
      Airbnb your home
    </div>
  );
};

export default AddPropertyButton;
