import { createSlice } from "@reduxjs/toolkit";
import { STATUS_MAP } from "../Params/Params";
import { getProductInfo } from "../components/API/get";
import { calcCashbackSize, calcPriceWithDiscount, calcRating } from "../functions/functions";

const currentProductSlice = createSlice({
	name: 'product',
	initialState: {
		product: {},
		status: null,
		error: null,
		isModalOpen: false
	},
	reducers: {
		fetchStart: (state) => {
			state.status = STATUS_MAP.pending
		},
		fetchSuccess: (state, action) => {
			if (state.status = STATUS_MAP.pending) {
				state.product = action.payload
				state.status = STATUS_MAP.fulfilled
				let newObj = {};
				state.product["hasDiscount"] ?
					newObj =
					{
						...state.product,
						"priceWithDiscount": calcPriceWithDiscount(state.product),
						"cashbackSize": Math.round(calcCashbackSize(state.product)),
						"rating": calcRating(state.product)
					} :
					newObj =
					{
						...state.product,
						"cashbackSize": Math.round(calcCashbackSize(state.product)),
						"rating": calcRating(state.product)
					}
				state.product = newObj;
				state.isModalOpen = true;
			}
		},
		fetchFail: (state, action) => {
			state.status = STATUS_MAP.rejected
			state.error = action.payload
			console.log('Error: ', action.payload);
		},
		toggleOffModalStatus: (state) => {
			console.log('Modal is Closed!');
			state.isModalOpen = false;
			state.product = {};
		}
	}
})

export const { fetchStart, fetchSuccess, fetchFail, toggleOffModalStatus } = currentProductSlice.actions
export default currentProductSlice.reducer
export const fetchProductById = (id) => async (dispatch) => {
	try {
		dispatch(fetchStart())
		const response = await getProductInfo(id)
		dispatch(fetchSuccess(response.data))
	} catch (error) {
		dispatch(fetchFail(error))
	}
}
