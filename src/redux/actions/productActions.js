import { axiosPrivate } from "../../services/configHttp";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

// fetch products
export const fetchProducts = () => {
  // console.log(response.data.data);
  return async (dispatch) => {
    const response = await axiosPrivate.get("/product");
    dispatch(fetchProductsSuccess(response.data.data));
  };
};

// export const fetchProducts = products => {
//   return dispatch => {
//     dispatch(fetchProductsSuccess(products));
//   };
// };
