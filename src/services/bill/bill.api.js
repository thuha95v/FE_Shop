import { axiosPrivate } from "../configHttp";

export const getAllBill = async () => {
  const resData = axiosPrivate.get("/billDetails");
  return (await resData).data;
};

export const createBill = async (data) => {
  const resData = axiosPrivate.post("/billDetails", null, {
    params: data
  });
  return (await resData).data;
};

export const getBillById = async (id) => {
  const resData = axiosPrivate.get("/billDetails/" + id);
  return (await resData).data;
};

export const deleteBill = async (id) => {
  const resData = axiosPrivate.delete("/billDetails/" + id);
  return (await resData).data;
};

export const changeBill = async (id, name) => {
  const resData = axiosPrivate.patch("/billDetails/" + id, {
    name
  });
  return (await resData).data;
};
