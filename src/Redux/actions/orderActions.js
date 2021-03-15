import axios from "../../axios-orders";

export const loadOrder = () => {
  return function (dispatch, getState) {
    dispatch(loadOrderStart());

    const token = getState().signupReducer.token;
    const userId = getState().signupReducer.userId;

    console.log("UserID: ", userId);
    console.log("TOKEN ", token);

    axios
      .get(`orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((response) => {
        const loadedOrder = Object.entries(response.data).reverse();
        dispatch(loadOrderSuccess(loadedOrder));
      })
      .catch((error) => dispatch(loadOrderError(error)));
  };
};

export const loadOrderStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};
export const loadOrderSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ORDERS_SUCCESS",
    orders: loadedOrders,
  };
};
export const loadOrderError = (error) => {
  return {
    type: "LOAD_ORDERS_ERROR",
    error,
  };
};

export const saveOrder = (newOrder) => {
  return function (dispatch, getState) {
    dispatch(saveOrderStart());

    const token = getState().signupReducer.token;
    axios
      .post(`/orders.json?auth=${token}`, newOrder)
      .then((response) => {
        dispatch(saveOrderSuccess());
      })
      .catch((err) => {
        dispatch(saveOrderError(err));
      });
  };
};

export const saveOrderStart = () => {
  return {
    type: "SAVE_ORDER_START",
  };
};
export const saveOrderSuccess = () => {
  return {
    type: "SAVE_ORDER_SUCCESS",
  };
};
export const saveOrderError = (error) => {
  return {
    type: "SAVE_ORDER_ERROR",
    errorMessage: error,
  };
};
