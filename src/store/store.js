import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from './goodsSlice'
import goodsSlice2 from './goodsSlice2'

export const store = configureStore({
	reducer: {
		goods: goodsSlice,
  },
})