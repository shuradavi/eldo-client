import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from './goodsSlice'
import currentProductSlice from './currentProductSlice'
import cartSlice from './cartSlice'
import userSlice from './userSlice'

export const store = configureStore({
	reducer: {
		goods: goodsSlice,
		product: currentProductSlice,
		hashMap: cartSlice,
		user: userSlice,
  },
})