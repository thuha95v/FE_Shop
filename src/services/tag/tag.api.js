import { axiosPrivate } from "../configHttp";

export const getAllTag = async () => {
  const resData = axiosPrivate.get("/tags");
  return (await resData).data;
};

export const createTag = async (name) => {
  const resData = axiosPrivate.post("/tags", {
    name,
  });
  return (await resData).data;
};

export const getTagById = async (id) => {
  const resData = axiosPrivate.get("/tags/" + id);
  return (await resData).data;
};

export const deleteTag = async (id) => {
  const resData = axiosPrivate.delete("/tags/" + id);
  return (await resData).data;
};

export const changeTag = async (id, name) => {
  const resData = axiosPrivate.patch("/tags/" + id, {
    name
  });
  return (await resData).data;
};
