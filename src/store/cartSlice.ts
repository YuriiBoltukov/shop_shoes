import { createSlice } from '@reduxjs/toolkit';
// import { products } from '../MOCK/products';

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		// addToCart: (state, action) => {
		// 	const { productId, quantity } = action.payload;
		// 	const product = state.products.find(p => p.id === productId);
		// 	if (product) {
		// 		state.push({ ...product, quantity });
		// 	}
		// },
		// removeFromCart: (state, action) => {
		// 	const { productId } = action.payload;
		// 	const index = state.findIndex(p => p.id === productId);
		// 	if (index >= 0) {
		// 		state.splice(index, 1);
		// 	}
		// },
		// updateQuantity: (state, action) => {
		// 	const { productId, quantity } = action.payload;
		// 	const product = state.find(p => p.id === productId);
		// 	if (product) {
		// 		product.quantity = quantity;
		// 	}
		// },
		clearCart: state => {
			state.splice(0, state.length);
		},
	},
});

// export const { addToCart, removeFromCart, updateQuantity, clearCart } =
// 	cartSlice.actions;

export default cartSlice.reducer;
