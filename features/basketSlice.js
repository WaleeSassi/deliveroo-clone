import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
      console.log(action.payload.price, "action");
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id :${action.payload.id}) as it's not in basket`
        );
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id == id);

export default basketSlice.reducer;
