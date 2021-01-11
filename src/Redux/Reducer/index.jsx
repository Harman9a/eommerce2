const iState = {
  Cart: {
    noOfItem: 3,
    items: [
      {
        title: "Skullcandy 1",
        image:
          "https://cdn11.bigcommerce.com/s-fa8ae9fe8j/content/pdp_images/1280x1280_5329_12186.jpg",
        description: "Airpods",
      },
      {
        title: "Skullcandy 2",
        image:
          "https://cdn11.bigcommerce.com/s-fa8ae9fe8j/content/pdp_images/1280x1280_5329_12186.jpg",
        description: "Airpods",
      },
      {
        title: "Skullcandy 3",
        image:
          "https://cdn11.bigcommerce.com/s-fa8ae9fe8j/content/pdp_images/1280x1280_5329_12186.jpg",
        description: "Airpods",
      },
    ],
  },
};

export const Reducer = (state = iState, Actions) => {
  switch (Actions.type) {
    case "UPDATE_CART": {
      let oldCartItem = state.Cart.items;
      let newCartItems = [
        {
          title: Actions.payload.name,
          image: Actions.payload.image,
          description: Actions.payload.description,
        },
      ];
      let mergedCartItems = oldCartItem.concat(newCartItems);
      return {
        ...state,
        Cart: {
          noOfItem: state.Cart.noOfItem + 1,
          items: mergedCartItems,
        },
      };
    }

    default:
      return state;
  }
};
