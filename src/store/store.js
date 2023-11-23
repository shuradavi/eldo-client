import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from './goodsSlice'
import currentProductSlice from './currentProductSlice'

export const store = configureStore({
	reducer: {
		goods: goodsSlice,
		product: currentProductSlice,
  },
})