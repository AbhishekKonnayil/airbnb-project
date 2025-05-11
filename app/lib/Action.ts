"use server";
import { cookies } from "next/headers";
import React from "react";

export async function handleLogin(
  userid: string,
  accessToken: string,
  refreshToken: string
) {
  (await cookies()).set("session_userid", userid, {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
    maxAge: 60 * 60 * 24 * 7, //one week
    path: "/",
  });
  (await cookies()).set("session_access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
    maxAge: 60 * 60, //sixty minutes
    path: "/",
  });
  (await cookies()).set("session_refresh_token", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
    maxAge: 60 * 60 * 24 * 7, //one week
    path: "/",
  });
}

export async function resetAuthCookies() {
  (await cookies()).set("session_user_id", ""),
    (await cookies()).set("session_access_token", ""),
    (await cookies()).set("session_refresh_token", "");
}

// get data
 export async function getUserId() {
  const userId=(await cookies()).get('session_user_id')?.value
  return userId ? userId:null 
  
 }