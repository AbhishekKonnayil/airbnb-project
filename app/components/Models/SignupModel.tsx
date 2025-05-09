"use client";

import { useState } from "react";
import Model from "./Model";
import UseSignupModel from "@/app/hooks/useSignupModel";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";

const SignupModel = () => {
  const signupModel = UseSignupModel();

  const comtent = (
    <>
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
         <input
          className="p-3 border w-full border-gray-300 rounded-lg"
          type="password"
          placeholder="Repeat password"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">The error message</div>
        <CustomButton label="Submit" onClick={() => console.log("test")}className=""/>
      </form>
    </>
  );
  return (
    <Model
      isOpen={signupModel.isOpen}
      close={signupModel.close}
      label="Sign Up"
      content={comtent}
    />
  );
};


export default SignupModel;
