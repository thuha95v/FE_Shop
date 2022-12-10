import { axiosPrivate } from "../configHttp";

export const getAllOrder = async () => {
  const resData = axiosPrivate.get("/orderDetails");
  return (await resData).data;
};

export const createOrder = async (data) => {
  const resData = axiosPrivate.post("/orders", data);
  return (await resData).data;
};

export const getOrderById = async (id) => {
  const resData = axiosPrivate.get("/orders/" + id);
  return (await resData).data;
};

export const deleteOrder = async (id) => {
  const resData = axiosPrivate.delete("/orders/" + id);
  return (await resData).data;
};

export const changeOrder = async (id, name) => {
  const resData = axiosPrivate.patch("/orders/" + id, {
    name
  });
  return (await resData).data;
};
