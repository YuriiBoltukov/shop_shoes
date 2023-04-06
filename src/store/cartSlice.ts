import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../interface/interface';
//import { products } from '../MOCK/products';

interface CartState {
	items: Item[];
}

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<Item>) {
			state.items.push(action.payload);
		},
		removeItem(state, action: PayloadAction<number>) {
			state.items = state.items.filter(item => item.id !== action.payload);
		},
	},
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
