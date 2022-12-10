import { axiosPrivate } from "../configHttp";

export const getAllContact = async () => {
  const resData = axiosPrivate.get("/contacts");
  return (await resData).data;
};

export const createContact = async (data) => {
  const resData = axiosPrivate.post("/contacts", data);
  return (await resData).data;
};

export const deleteContact = async (id) => {
  const resData = axiosPrivate.delete("/contacts/" + id);
  return (await resData).data;
};
