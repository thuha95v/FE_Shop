import { axiosPrivate } from "../configHttp";

export const login = async (data) => {
  const resData = axiosPrivate.post("/auth/login", data);
  return (await resData).data;
};