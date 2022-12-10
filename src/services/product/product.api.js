import { axiosPrivate } from "../configHttp";

export const getAllProduct = async () => {
  const resData = axiosPrivate.get("/product");
  return (await resData).data;
};

export const createProduct = async (valueObj) => {
  const valueRequest = {
    name: valueObj.name,
    description: valueObj.description,
    price: valueObj.price,
    discount: valueObj.discount,
    weight: valueObj.weight,
    dimension: valueObj.dimension,
    material: valueObj.material,
    otherInfo: valueObj.otherInfo,
    categoryId: valueObj.categoryId,
    new: valueObj.new,
    tags: valueObj?.tags,
    sizes: valueObj?.sizes,
    colors: valueObj?.colors,
  };
  const formData = new FormData();
  formData.append("file1", valueObj.files);
  if (valueObj.files2) {
    formData.append("file2", valueObj.files2);
  }
  if (valueObj.files3) {
    formData.append("file3", valueObj.files3);
  }
  // delete valueObj["files"];
  formData.append("data", JSON.stringify(valueRequest));
  const resData = axiosPrivate.post("/product", formData);
  return (await resData).data;
};

export const getProductById = async (id) => {
  const resData = axiosPrivate.get("/product/" + id);
  return (await resData).data;
};

export const deleteProduct = async (id) => {
  const resData = axiosPrivate.delete("/product/" + id);
  return (await resData).data;
};

export const changeProduct = async (id, valueObj) => {
  console.log(valueObj);
  const valueRequest = {
    id: valueObj.id,
    name: valueObj.name,
    description: valueObj.description,
    price: valueObj.price,
    discount: valueObj.discount,
    weight: valueObj.weight,
    dimension: valueObj.dimension,
    material: valueObj.material,
    otherInfo: valueObj.otherInfo,
    categoryId: valueObj.categoryId,
    new: valueObj.new,
    tags: valueObj?.tags,
    sizes: valueObj?.sizes,
    colors: valueObj?.colors,
  };
  const formData = new FormData();
  formData.append("file1", valueObj.files);
  formData.append("data", JSON.stringify(valueRequest));
  const resData = axiosPrivate.patch("/product", formData);
  return (await resData).data;
};
