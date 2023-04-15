import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../interface/interface';
import {products} from '../MOCK/products'
interface ProductsState {
    items: Item[];
}

const initialState: ProductsState = {
    items: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts(state: ProductsState) {
            state.items = products
        },
        clearProducts(state: ProductsState) {
            state.items = []
        },
    },
});

export const { getProducts, clearProducts } = productsSlice.actions;

export default productsSlice.reducer;
