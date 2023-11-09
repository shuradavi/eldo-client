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
				let newArr = [];
				for (let i = 0; i < state.goods.length; i++) {
					if (state.goods[i]["hasDiscount"] === true) {
						newArr.push({
							...state.goods[i],
							"priceWithDiscount": Math.round(state.goods[i]["price"] * ((100 - state.goods[i]["discountPercent"]) / 100))
						})
					} else newArr.push(state.goods[i])
				}
				state.goods = newArr;
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
