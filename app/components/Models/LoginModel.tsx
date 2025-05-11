"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Model from "./Model";
import UseLoginModel from "@/app/hooks/useLoginModel";
import CustomButton from "../forms/CustomButton";
import apiSevice from "@/app/apiSevice";
import { handleLogin } from "@/app/lib/Action";

const LoginModel = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const loginModel = UseLoginModel();
  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password,
    };
    const response = await apiSevice.post(
      "/api/auth/login/",
      JSON.stringify(formData)
    );
    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      loginModel.close();
      router.push("/");
    } else {
      setErrors(response.non_field_errors);
    }
  };

  const comtent = (
    <>
      <form action={submitLogin} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border w-full border-gray-300 rounded-lg"
          type="email"
          placeholder="Your e-mail address"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border w-full border-gray-300 rounded-lg"
          type="password"
          placeholder="Your Password"
        />
        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}
        <CustomButton label="Submit" onClick={submitLogin} className="" />
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
