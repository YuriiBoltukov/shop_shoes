import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './shopSlice';

const rootReducer = combineReducers({
	counter: counterReducer,
});

export default rootReducer;
