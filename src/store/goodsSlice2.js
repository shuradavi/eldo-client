import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { hostUrl } from "../Params/Params";

const initialState = {
	goods: [],
	status: null,
	error: null,
}

export const getGoodsList = createAsyncThunk(
	'goodsList/getGoodsList',
	async (_, {rejectWithValue, dispatch}) => {
		const response = await axios.get(hostUrl.listItems)
		dispatch(setGoodsList(response.data))
	}
)
export const goodsSlice2 = createSlice({
	name: 'goodsList',
	initialState, 
	reducers: {
		setGoodsList: (state, action) => {
			state.goods = action.payload
		}
	}, 
	extraReducers: {
		[getGoodsList.pending]: (state) => {
			console.log('pending')
			state.status = 'pending'
		},
		[getGoodsList.fulfilled]: (state, action) => {
			console.log('fulfilled')
			state.status = 'resolved'
			state.goods = action.payload
		},
		[getGoodsList.rejected]: (state, action) => {
			console.log('rejected')
			state.status = 'rejected'
		},
	}
})

export const { setGoodsList } = goodsSlice2.actions
export default goodsSlice2.reducer