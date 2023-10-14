import React from 'react';
import './App.css';
import ListItems from './components/ListItems/ListItems';
import Filters from './components/Filters/Filters';

function App() {

	
	
	return (
		<div className="App">
			<header>
				<div className='navbar'>
					<div className='goods'>Товары</div>
					<div className='shopping-cart'>Корзина</div>
					<div className='payment-delivery'>Оплата и доставка</div>
				</div>
			</header>
			<div className='main'>
				<Filters />
				<div className='goods-list-wrapper'>
					<ListItems />
				</div>
			</div>
		</div>
  );
}

export default App;
