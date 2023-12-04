import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from './goodsSlice'
import currentProductSlice from './currentProductSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
	reducer: {
		goods: goodsSlice,
		product: currentProductSlice,
		hashMap: cartSlice,
  },
})