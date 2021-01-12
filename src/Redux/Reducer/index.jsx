const iState = {
  Cart: {
    noOfItem: 0,
    totalPrice: 0,
    items: [],
  },
};

export const Reducer = (state = iState, Actions) => {
  switch (Actions.type) {
    case "UPDATE_CART": {
      let oldCartItem = state.Cart.items;
      let newCartItems = [
        {
          product_id: Actions.payload.product_id,
          quenPrice: parseInt(Actions.payload.price),
          title: Actions.payload.name,
          image: Actions.payload.image,
          description: Actions.payload.description,
          price: parseInt(Actions.payload.price),
          quen: parseInt(Actions.payload.quen),
        },
      ];
      let mergedCartItems = oldCartItem.concat(newCartItems);
      return {
        ...state,
        Cart: {
          noOfItem: state.Cart.noOfItem + 1,
          totalPrice:
            parseInt(state.Cart.totalPrice) + parseInt(Actions.payload.price),
          items: mergedCartItems,
        },
      };
    }
    case "INCREASE_QU": {
      let product_price = 0;
      return {
        ...state,
        Cart: {
          items: state.Cart.items.map((x) => {
            if (x.product_id === Actions.payload.product_id) {
              x.quen += parseInt(Actions.payload.quen);
              x.quenPrice += parseInt(x.price);
              product_price = parseInt(x.price);
            }
            return x;
          }),
          noOfItem: state.Cart.noOfItem,
          totalPrice: parseInt(state.Cart.totalPrice) + parseInt(product_price),
        },
      };
    }
    case "DECREASE_QU": {
      let product_price = 0;
      return {
        ...state,
        Cart: {
          items: state.Cart.items.map((x) => {
            if (x.product_id === Actions.payload.product_id) {
              if (x.quen !== 0) {
                x.quen -= parseInt(Actions.payload.quen);
                x.quenPrice -= parseInt(x.price);
                product_price = parseInt(x.price);
              }
            }
            return x;
          }),
          noOfItem: state.Cart.noOfItem,
          totalPrice: parseInt(state.Cart.totalPrice) - parseInt(product_price),
        },
      };
    }

    default:
      return state;
  }
};
