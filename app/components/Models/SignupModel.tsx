"use client";

import { useState } from "react";
import Model from "./Model";
import UseSignupModel from "@/app/hooks/useSignupModel";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import apiSevice from "@/app/apiSevice";
import { handleLogin } from "@/app/lib/Action";

const SignupModel = () => {
  // variables
  const router = useRouter();
  const signupModel = UseSignupModel();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  // submit functionality

  const submitSignup = async () => {
    const formData = {
      email: email,
      password1: password1,
      password2: password2,
    };

    const response = await apiSevice.post(
      "/api/auth/register/",
      JSON.stringify(formData)
    );

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      signupModel.close();
      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });
      setErrors(tmpErrors);
    }
  };

  const comtent = (
    <>
      <form action={submitSignup} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border w-full border-gray-300 rounded-lg"
          type="email"
          placeholder="Your e-mail address"
        />
        <input
          onChange={(e) => setPassword1(e.target.value)}
          className="p-3 border w-full border-gray-300 rounded-lg"
          type="password"
          placeholder="Your Password"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          className="p-3 border w-full border-gray-300 rounded-lg"
          type="password"
          placeholder="Repeat password"
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

        <CustomButton label="Submit" onClick={submitSignup} className="" />
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
