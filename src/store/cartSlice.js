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
		deleteFromCart: (state, action) => {
			state.status = STATUS_MAP.fulfilled
			console.log(action.payload);
		}
	}
})

export const { addToCartStart, addToCartSuccess, addToCartFail, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer
// export const addToCart = (id) => async (dispatch) => {
// 	try {
// 		dispatch(addToCart())
// 		dispatch(addToCartSuccess())
// 	} catch (error) {
// 		dispatch(addToCartFail(error))
// 	}
// }