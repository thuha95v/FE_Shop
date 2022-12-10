import { axiosPrivate } from "../configHttp";

export const getAllSize = async () => {
  const resData = axiosPrivate.get("/sizes");
  return (await resData).data;
};

export const createSize = async (name) => {
  const resData = axiosPrivate.post("/sizes", {
    name,
  });
  return (await resData).data;
};

export const getSizeById = async (id) => {
  const resData = axiosPrivate.get("/sizes/" + id);
  return (await resData).data;
};

export const deleteSize = async (id) => {
  const resData = axiosPrivate.delete("/sizes/" + id);
  return (await resData).data;
};

export const changeSize = async (id, name) => {
  const resData = axiosPrivate.patch("/sizes/" + id, {
    name
  });
  return (await resData).data;
};
