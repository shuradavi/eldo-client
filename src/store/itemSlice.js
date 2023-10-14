import { createSlice } from '@reduxjs/toolkit';


const itemSlice = createSlice({
	name: 'items',
	initialState: {
		itemSlice: []
	},
	reducers: {
		getListItems(state, action) {
			state.itemSlice.push({
				
			})
		}

	}
});

export default itemSlice.reducer;