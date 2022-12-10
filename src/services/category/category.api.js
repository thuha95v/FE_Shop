import { axiosPrivate } from "../configHttp";

export const getAllCategory = async () => {
  const resData = axiosPrivate.get("/categories");
  return (await resData).data;
};

export const createCategory = async (name) => {
  const resData = axiosPrivate.post("/categories", {
    name,
  });
  return (await resData).data;
};

export const getCategoryById = async (id) => {
  const resData = axiosPrivate.get("/categories/" + id);
  return (await resData).data;
};

export const deleteCategory = async (id) => {
  const resData = axiosPrivate.delete("/categories/" + id);
  return (await resData).data;
};

export const changeCategory = async (id, name) => {
  const resData = axiosPrivate.patch("/categories/" + id, {
    name
  });
  return (await resData).data;
};
