import { axiosPrivate } from "../configHttp";

export const getAllColor = async () => {
  const resData = axiosPrivate.get("/colors");
  return (await resData).data;
};

export const createColor = async (name) => {
  const resData = axiosPrivate.post("/colors", {
    name,
  });
  return (await resData).data;
};

export const getColorById = async (id) => {
  const resData = axiosPrivate.get("/colors/" + id);
  return (await resData).data;
};

export const deleteColor = async (id) => {
  const resData = axiosPrivate.delete("/colors/" + id);
  return (await resData).data;
};

export const changeColor = async (id, name) => {
  const resData = axiosPrivate.patch("/colors/" + id, {
    name
  });
  return (await resData).data;
};
