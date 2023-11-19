import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { product, quantity } = action.payload;
      const { price } = product;

      const existingProduct = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cart.push({ product, quantity });
      }

      state.totalQuantity += quantity;
      state.totalPrice += quantity * price;
    },
    increaseQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      const { price } = product;

      const existingProduct = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
        state.totalQuantity += quantity;
        state.totalPrice += quantity * price;
      }
    },
    decreaseQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      const { price } = product;

      const existingProduct = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingProduct) {
        if (existingProduct.quantity >= quantity) {
          existingProduct.quantity -= quantity;
          state.totalQuantity -= quantity;
          state.totalPrice -= quantity * price;

          if (existingProduct.quantity === 0) {
            state.cart = state.cart.filter(
              (item) => item.product.id !== product.id
            );
          }
        }
      }
    },
    clearCart: (state) => {
      // Clear the entire cart and reset total quantity and total price
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
