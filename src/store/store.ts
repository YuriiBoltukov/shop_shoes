import { configureStore } from '@reduxjs/toolkit';
//import { createApi } from '@reduxjs/toolkit/query/react'
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		products: productsReducer
	},
	//middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
