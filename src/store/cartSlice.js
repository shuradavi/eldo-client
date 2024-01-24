import { createSlice } from "@reduxjs/toolkit";
import {hasItemInCart} from "../functions/functions"

const initialState = {
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addNewItemToCart: (state, action) => {
			state = {
				...state, 
				...action.payload
			}
			return state;
		},

		decrement: (state, action) => {
			state[action.payload] -= 1;
		},

		increment: (state, action) => {
			state[action.payload] += 1;
		},

		deleteItemFromCart: (state, action) => {
			delete state[action.payload]
		},
		
		deleteAllItemFromCart: (state) => {
			state = initialState;
			return state;
		},
	}
})

export const { addNewItemToCart, deleteItemFromCart, deleteAllItemFromCart, decrement, increment } = cartSlice.actions
export default cartSlice.reducer


