"use client";

import { useState } from "react";
import Model from "./Model";
import UseLoginModel from "@/app/hooks/useLoginModel";
import CustomButton from "../forms/CustomButton";

const LoginModel = () => {
  const loginModel = UseLoginModel();

  const comtent = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to airbnb, please login</h2>
      <form className="space-y-4">
        <input
          className="p-3 border w-full border-gray-300 rounded-lg"
          type="email"
          placeholder="Your e-mail address"
        />
        <input
          className="p-3 border w-full border-gray-300 rounded-lg"
          type="password"
          placeholder="Your Password"
        />
        <CustomButton label="Submit" onClick={() => console.log("test")}className=""/>
      </form>
    </>
  );
  return (
    <Model
      isOpen={loginModel.isOpen}
      close={loginModel.close}
      label="Log in"
      content={comtent}
    />
  );
};

export default LoginModel;
