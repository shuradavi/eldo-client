import React, { useEffect} from 'react';
import { useDispatch} from 'react-redux';
import './App.css';
import { fetchGoodsList } from './store/goodsSlice';
import GoodsList from './pages/GoodsList/GoodsList';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Auth from './pages/Auth/Auth';
import {Route, Routes} from 'react-router-dom'
import { Layout } from './components/Layout'

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
				</Route>
			</Routes>
		</>
		// <div className="App">
		// 	<header>
		// 		<div className='navbar'>
		// 			<div className='goods'>Товары</div>
		// 			<div className='shopping-cart'>Корзина</div>
		// 			<div className='payment-delivery'>Оплата и доставка</div>
		// 		</div>
		// 	</header>
		// 	<GoodsList />
		// 	{/* <Cart /> */}
		// </div>
	);
}
export default App;
