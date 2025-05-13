import { error } from "console";
import { json } from "stream/consumers";
import { getAccessToken } from "./lib/Action";

const apiSevice = {
  get: async function (url: string): Promise<any> {
    const token = await getAccessToken();
    console.log("get", url);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response", json);
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  post: async function (url: string, data: any): Promise<any> {
    console.log("post", url, data);
    const token = await getAccessToken();

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        body: data,
        headers: {
          // Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response", json);
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  postWithoutToken: async function (url: string, data: any): Promise<any> {
    console.log("post", url, data);
    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response", json);
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default apiSevice;
