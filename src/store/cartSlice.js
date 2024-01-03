import { createSlice } from "@reduxjs/toolkit";
import { STATUS_MAP } from "../Params/Params";
import { getFilesList, saveFiles, deleteFile, downloadFile } from "../components/API/cart";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		hashMap: {},
		status: null,
		error: null,
	},
	reducers: {
		addToCartStart: (state) => {
			state.status = STATUS_MAP.pending
		},
		addToCartSuccess: (state, action) => {
			if (state.status = STATUS_MAP.pending) {
				state.status = STATUS_MAP.fulfilled
				let newArr = [Number(Object.entries(action.payload)[0][0]), Number(Object.entries(action.payload)[0][1])]
				console.log('newArr: ', newArr);

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
			console.log('hashMap: ', state.hashMap);
		},
		addToCartFail: (state, action) => {
			state.status = STATUS_MAP.rejected
			state.error = action.payload
			console.log('Error: ', action.payload);
		},
		decreaseCount: (state, action) => {
			let newHashMap = { ...state.hashMap }
			newHashMap[action.payload] -= 1;
			state.hashMap = newHashMap;
		},
		increaseCount: (state, action) => {
			let newHashMap = { ...state.hashMap }
			newHashMap[action.payload] += 1;
			state.hashMap = newHashMap;
		},
		deleteFromCart: (state, action) => {
			state.status = STATUS_MAP.fulfilled
			console.log(action.payload);
		}
	}
})

export const { addToCartStart, addToCartSuccess, addToCartFail, deleteFromCart, decreaseCount, increaseCount } = cartSlice.actions
export default cartSlice.reducer
