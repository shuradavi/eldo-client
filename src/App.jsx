import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import './App.css';
import { fetchGoodsList } from './store/goodsSlice';
import GoodsList from './pages/GoodsList';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Payment from './pages/Payment';
import {Route, Routes} from 'react-router-dom'
import { Layout } from './components/Layout'
import UserProfile from './components/UserProfile';




function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchGoodsList())
	}, [])

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<GoodsList />} />
					<Route path='/cart' element={<Cart/>} />
					<Route path='/payment' element={<Payment />} />
					<Route path='/auth' element={<Auth />} />
					<Route path='/account' element={<UserProfile />} />
				</Route>
			</Routes>
		</>
	);
}
export default App;
