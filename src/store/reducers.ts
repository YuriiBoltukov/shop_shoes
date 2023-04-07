import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const rootReducer = combineReducers({
	reducer: cartSlice,
});

export default rootReducer;
