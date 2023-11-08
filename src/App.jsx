import React, {  useEffect, useState } from 'react';
import './App.css';
import Goods from './components/Goods/Goods';
import Filters from './components/Filters/Filters';
import { Pagination } from 'antd';
import { fetchGoodsList } from './store/goodsSlice';
import { useDispatch, useSelector } from 'react-redux';



function App() {

	const [goods, setGoods] = useState([])
	const [filtersValue, setFiltersValue] = useState({
		bestOffer: false,
		inputValue: '',
		caategory: '',
	})
 	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchGoodsList())
	}, [])
	const dataFromServer = useSelector(state => state.goods.goods)
	// let newGoodsList = [...goods].filter(item => item["hasDiscount"] === true)
	// newGoodsList = newGoodsList.map((item) => ({
	// 	...item,
	// 	"finishPrice": Math.round(item["price"] * ((100 - item["discountPercent"]) / 100)),
	//  }))
	// console.log('newGoodList', newGoodsList);


	
	

	

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
				<Filters data={ data } setData={setData} />
				<div className='goods-list goods-list-wrapper'>
					{!!data && data.map((item) => <Goods props={item} key={item.id} />)}
				</div>
			</div>
			<footer>
				<Pagination  defaultCurrent={1} total={50}/>
			</footer>
		</div>
  );
}

export default App;
