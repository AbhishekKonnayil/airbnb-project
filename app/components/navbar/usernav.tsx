"use client";

import React, { useState } from "react";
import MenuLink from "./MenuLink";
import UseLoginModel from "@/app/hooks/useLoginModel";
import UseSignupModel from "@/app/hooks/useSignupModel";
import LogoutButton from "../LogoutButton";
import { useRouter } from "next/navigation";

interface UsernavProps {
  userId?: string | null;
}

const UserNav: React.FC<UsernavProps> = ({ userId }) => {
  const router = useRouter();
  const loginModel = UseLoginModel();
  const signupModel = UseSignupModel();
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="border rounded-full inline-block p-2 relative ">
      <button
        onClick={() => setisOpen(!isOpen)}
        className="flex items-center hover:scale-75 cursor-pointer"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute w-[220px] shadow-md top-[60px] right-0 bg-white rounded-xl flex flex-col">
          {userId ? (
            <div>
              <MenuLink
                label="My Properties"
                onClick={() => {
                  router.push('/myproperties');
                  setisOpen(false);
                }}
              />
              <MenuLink
                label="My Reservations"
                onClick={() => {
                  router.push('/myreservations');
                  setisOpen(false);
                }}
              />
              <LogoutButton />
            </div>
          ) : (
            <div>
              <MenuLink
                label="Log in"
                onClick={() => {
                  console.log("login successfully");
                  setisOpen(false);
                  loginModel.open();
                }}
              />
              <MenuLink
                label="Sign up"
                onClick={() => {
                  console.log("Sign up successfully");
                  setisOpen(false);
                  signupModel.open();
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserNav;
