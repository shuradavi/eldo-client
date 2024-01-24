import { createSlice } from "@reduxjs/toolkit";
import { STATUS_MAP } from "../Params/Params";
import { getProductInfo } from "../components/API/get";
import { calcCashbackSize, calcPriceWithDiscount, calcRating } from "../functions/functions";

const initialState = {
	product: {},
	status: null,
	error: null,
	isModalOpen: false
}
const currentProductSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		fetchStart: (state) => {
			state.status = STATUS_MAP.pending
		},
		fetchSuccess: (state, action) => {
				state.product = action.payload
				state.status = STATUS_MAP.fulfilled
				state.isModalOpen = true;
		},
		fetchFail: (state, action) => {
			state.status = STATUS_MAP.rejected
			state.error = action.payload
			console.log('Error: ', action.payload);
		},
		toggleOffModalStatus: () => {
			return initialState;
		}
	}
})

export const { fetchStart, fetchSuccess, fetchFail, toggleOffModalStatus } = currentProductSlice.actions

export const fetchProductById = (id) => async (dispatch) => {
	try {
		dispatch(fetchStart())
		const response = await getProductInfo(id)
		let newProduct = {};
		newProduct = {
			...response.data,
			cashbackSize: Math.round(calcCashbackSize(response.data)),
			rating: calcRating(response.data)
		};
		if (newProduct.hasDiscount) {
			newProduct.priceWithDiscount = calcPriceWithDiscount(newProduct);
		} else newProduct.priceWithDiscount = newProduct.price;
		dispatch(fetchSuccess(newProduct))
	} catch (error) {
		dispatch(fetchFail(error))
	}
}

export default currentProductSlice.reducer