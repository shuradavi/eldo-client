import { createSlice } from '@reduxjs/toolkit';
import { STATUS_MAP } from '../Params/Params';
import axios from 'axios';
import { hostUrl } from '../Params/Params';

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
				state.goods = state.goods.map(item => ({
					...item,
					"priceWithDiscount": Math.round(item["price"] * ((100 - item["discountPercent"]) / 100))
				}))
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
		console.log('Запуск fetchGoodsList()');
		dispatch(fetchStart())
		const response = await axios.get(hostUrl.listItems)
		dispatch(fetchSuccess(response.data))
	} catch (error) {
		dispatch(fetchFail(error))
	}
}
