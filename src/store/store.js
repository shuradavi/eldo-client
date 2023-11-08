import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from './goodsSlice'

export const store = configureStore({
	reducer: {
	  goods: goodsSlice,
  },
})