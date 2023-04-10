import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Item} from '../interface/interface';
import {Slice} from "@reduxjs/toolkit/src/createSlice";

export interface CartItemInterface {
  id: Item['id'],
  quantity: number
}

interface CartState {
  items: CartItemInterface[]
}

const initialState: CartState = {
  items: [],
};

const cartSlice: Slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state: CartState, action: PayloadAction<CartItemInterface>) {
      const index = state.items.findIndex((item) => item.id === action.payload.id)

      if (index !== -1) {
        state.items[index].quantity += action.payload.quantity
      } else {
        state.items.push({
          id: action.payload.id,
          quantity: action.payload.quantity
        })
      }
    },
    removeItem(state: CartState, action: PayloadAction<CartItemInterface['id']>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increaseQuantity(state: CartState, action: PayloadAction<CartItemInterface['id']>) {
      const index = state.items.findIndex((item) => item.id === action.payload)

      if(index !== -1) {
        state.items[index].quantity++
      }
    },
    decreaseQuantity(state: CartState, action: PayloadAction<CartItemInterface['id']>) {
      const index = state.items.findIndex((item) => item.id === action.payload)

      if(index !== -1) {
        state.items[index].quantity--
      }
      if(state.items[index].quantity <= 0) {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
  }
})
export const {addItem, removeItem, increaseQuantity, decreaseQuantity,} = cartSlice.actions;

export default cartSlice.reducer;
