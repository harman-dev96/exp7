import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, name: "Smartphone", price: 299.99, quantity: 1 },
    { id: 2, name: "Tablet", price: 449.99, quantity: 2 },
    { id: 3, name: "Smartwatch", price: 199.99, quantity: 1 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    },
  },
});

export const { removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;