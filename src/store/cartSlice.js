import { createSlice } from "@reduxjs/toolkit";
import { STATUS_MAP } from "../Params/Params";
import { getFilesList, saveFiles, deleteFile, downloadFile } from "../components/API/cart";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {  // оставить iS пустым объектом
		hashMap: {},
		status: null,
		error: null,
	},
	reducers: {
		addToCartStart: (state) => {
			state.status = STATUS_MAP.pending
		},
		addToCartSuccess: (state, action) => {
			if (state.status === STATUS_MAP.pending) {
				state.status = STATUS_MAP.fulfilled
				let newArr = [Number(Object.entries(action.payload)[0][0]), Number(Object.entries(action.payload)[0][1])]  // убрать хуйню 0 0 0 0 0 0
				if (state.hashMap.hasOwnProperty(newArr[0])) {
					state.hashMap[newArr[0]] += newArr[1]
					state.hashMap = {
						...state.hashMap
					}
				} else {
					state.hashMap = {
						...state.hashMap,
						...action.payload
					}
				}
			}
		},
		addToCartFail: (state, action) => {
			state.status = STATUS_MAP.rejected
			state.error = action.payload
			console.log('Error: ', action.payload);
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
			state.status = STATUS_MAP.fulfilled
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

export const { addToCartStart, addToCartSuccess, addToCartFail, deleteItemFromCart, deleteAllItemFromCart, decreaseCount, increaseCount } = cartSlice.actions
export default cartSlice.reducer
