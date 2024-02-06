import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './App.css';
import { fetchGoodsList } from './store/goodsSlice';
import GoodsList from './pages/GoodsList';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import OrderPage from './pages/OrderPage';
import {Route, Routes} from 'react-router-dom'
import { Layout } from './components/Layout'
import UserProfile from './components/UserProfile';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { setStatus } from './store/notifi-cationSlice';
import store from './store/store';

function App() {
	const dispatch = useDispatch()
	const notification = useSelector(state => state.notification.msg);
	useEffect(() => {
		dispatch(fetchGoodsList())
	}, [notification])


	return (
		<>
			<ReactNotifications />
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<GoodsList />} />
					<Route path='/cart' element={<Cart/>} />
					<Route path='/orderpage' element={<OrderPage />} />
					<Route path='/auth' element={<Auth />} />
					<Route path='/account' element={<UserProfile />} />
				</Route>
			</Routes>
		</>
	);
}
export default App;
