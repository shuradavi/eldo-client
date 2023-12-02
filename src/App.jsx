import React, { useEffect} from 'react';
import { useDispatch} from 'react-redux';
import './App.css';
import { fetchGoodsList } from './store/goodsSlice';
import GoodsList from './components/GoodsList/GoodsList';

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchGoodsList())
	}, [])

	return (
		<div className="App">
			<header>
				<div className='navbar'>
					<div className='goods'>Товары</div>
					<div className='shopping-cart'>Корзина</div>
					<div className='payment-delivery'>Оплата и доставка</div>
				</div>
			</header>
			<GoodsList />
		</div>
	);
}
export default App;
