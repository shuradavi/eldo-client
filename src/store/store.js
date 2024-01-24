import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
}
	from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import goodsSlice from './goodsSlice'
import currentProductSlice from './currentProductSlice'
import cartSlice from './cartSlice'
import userSlice from './userSlice'

// const rootReducer = combineReducers({
// 	goods: goodsSlice,
// 	product: currentProductSlice,
// 	hashMap: cartSlice,
// 	user: userSlice,
// })



// const persistConfig = {
// 	key: 'root',
// 	storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
// 	reducer: persistedReducer,
// 	middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

const store = configureStore({
	reducer: {
		goods: goodsSlice,
		product: currentProductSlice,
		cart: cartSlice,
		user: userSlice,
  },
  })

// export const persistor = persistStore(store);
export default store;
