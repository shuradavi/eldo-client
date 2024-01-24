import { createSlice } from '@reduxjs/toolkit';
import { STATUS_MAP } from '../Params/Params';
import axios from 'axios';
import { hostUrl } from '../Params/Params';
import { calcPriceWithDiscount, calcCashbackSize } from '../functions/functions';

const goodsSlice = createSlice({
	name: 'goods',
	initialState: {
		goods: [],
		status: null,
		error: null,
	},
	reducers: {
		fetchStart: (state) => {
			state.status = STATUS_MAP.pending
		},
		fetchSuccess: (state, action) => {
			if (state.status = STATUS_MAP.pending) {
				state.goods = action.payload
				state.status = STATUS_MAP.fulfilled
			}
		},
		fetchFail: (state, action) => {
			state.status = STATUS_MAP.rejected
			state.error = action.payload
			console.log('Error: ', action.payload);
		}
	}
})

export const { fetchStart, fetchSuccess, fetchFail } = goodsSlice.actions
export default goodsSlice.reducer


export const fetchGoodsList = () => async (dispatch) => {
	try {
		dispatch(fetchStart())
		const response = await axios.get(hostUrl.listItems);
		let result = [];
		for (let i = 0; i < response.data.length; i++) {
			if (response.data[i].hasDiscount) {
				result.push({
					...response.data[i],
					priceWithDiscount: calcPriceWithDiscount(response.data[i]),
					cashbackSize: Math.round(calcCashbackSize(response.data[i]))
				})
			} else {
				result.push({
					...response.data[i],
					priceWithDiscount: response.data[i].price,
					cashbackSize: Math.round(calcCashbackSize(response.data[i]))
				})
			}
		}
		dispatch(fetchSuccess(result))
	} catch (error) {
		dispatch(fetchFail(error))
	}
}