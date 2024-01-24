import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			// console.log('state: ', state, 'id: ', ...action.payload);
			const { id, count } = action.payload
			console.log('id:', id);
			console.log('count:', count);
			// if (state.hasOwnProperty(action.payload)) {
			// 	state.action.payload += count
			// 	return state;
			// } else {
			// 	state = {
			// 		...state,
			// 		[action.payload]: count
			// 	}
			// 	return state
			// }
		},
		decreaseCount: (state, action) => {
			let newHashMap = { ...state.hashMap }
			if (newHashMap[action.payload] > 1) {
				newHashMap[action.payload] -= 1;
				state.hashMap = newHashMap;
			} else {
				delete newHashMap[action.payload];
				state.hashMap = newHashMap;
			}
		},
		increaseCount: (state, action) => {
			let newHashMap = { ...state.hashMap }
			newHashMap[action.payload] += 1;
			state.hashMap = newHashMap;
		},
		deleteItemFromCart: (state, action) => {
			let newHashMap = { ...state.hashMap }
			delete newHashMap[action.payload];
			state.hashMap = newHashMap;
		},
		
		deleteAllItemFromCart: (state) => {
			state.status = null;
			state.hashMap = {};
		}
	}
})

export const { addToCart, deleteItemFromCart, deleteAllItemFromCart, decreaseCount, increaseCount } = cartSlice.actions
export default cartSlice.reducer

// export const addToCart = ({id, count})
