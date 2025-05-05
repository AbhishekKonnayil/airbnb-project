"use client";

import { useState } from "react";
import Model from "./Model";
import UseLoginModel from "@/app/hooks/useLoginModel";

const LoginModel = () => {
  const loginModel = UseLoginModel();

  const comtent = (
    <h2 className="mb-6 text-2xl">Welcome to airbnb, please login</h2>
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
