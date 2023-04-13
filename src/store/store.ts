import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';
import searchReducer from './searchSlice'
import {EnhancedStore} from "@reduxjs/toolkit/src/configureStore";

/**
 * Returned instance of store which i can use via dispatching and using selectors
 */
const store: EnhancedStore = configureStore({
	reducer: {
		cart: cartReducer,
		products: productsReducer,
		search: searchReducer
	},
});

export default store;
