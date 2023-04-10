import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../interface/interface';

interface CartState {
	items: Item['id'][];
}
/*

Создать стэйт с товарами - он хранит все товары в себе
У него есть селекторы, так же, на компоненте
Они могут возвращаться конкретный товар по переданному индексу
Могут возвращать список товаров, индексы которых соответсвуют переданному массиву индексов

Эта штука пишется внутри компонента использования
Нужно описать селектор, который будет возвращать список всех индексов

*/
const initialState: CartState = {
	// Items are in the cart
	items: [20],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state: CartState, action: PayloadAction<Item['id']>) {
			console.log('reducers:addToCart');
			state.items.push(action.payload);
		},
		removeItem(state: CartState, action: PayloadAction<Item['id']>) {
			console.log('action.payload', action.payload)
			state.items = state.items.filter(item => item !== action.payload);
		},
	},
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
