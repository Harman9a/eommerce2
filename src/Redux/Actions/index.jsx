export const updateCart = (data) => {
  return {
    type: "UPDATE_CART",
    payload: data,
  };
};

export const increaseQuAc = (data) => {
  return {
    type: "INCREASE_QU",
    payload: data,
  };
};

export const decreaseQuAc = (data) => {
  return {
    type: "DECREASE_QU",
    payload: data,
  };
};
