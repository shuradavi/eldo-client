import { createSlice } from "@reduxjs/toolkit";
import {hasItemInCart} from "../functions/functions"

const initialState = {
	cart: {},
	status: false,
}
const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addNewItemToCart: (state, action) => {
			state.cart = {
				...state.cart, 
				...action.payload
			}
			return state;
		},

		decrement: (state, action) => {
			state.cart[action.payload] -= 1;
		},

		increment: (state, action) => {
			state.cart[action.payload] += 1;
		},

		deleteItemFromCart: (state, action) => {
			delete state.cart[action.payload]
		},
		
		deleteAllItemFromCart: (state) => {
			state = initialState;
			return state;
		},
		toggleStatusOn: (state) => {
			state.status = true;
		}
		
	}
})

export const { addNewItemToCart, deleteItemFromCart, deleteAllItemFromCart, decrement, increment, toggleStatusOn } = cartSlice.actions
export default cartSlice.reducer


