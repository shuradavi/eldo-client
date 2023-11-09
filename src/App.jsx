import React, {  useEffect, useState } from 'react';
import './App.css';
import Goods from './components/Goods/Goods';
import Filters from './components/Filters/Filters';
import { Pagination } from 'antd';
import { fetchGoodsList } from './store/goodsSlice';
import { useDispatch, useSelector } from 'react-redux';



function App() {
	const initialValue = {
		"hasDiscount": false,
		"name": '',
		"category": [],
	}

	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(fetchGoodsList())
	}, [])

	const [filtersValue, setFiltersValue] = useState(initialValue)
	let goods = useSelector(state => state.goods.goods)
	console.log('goods: ', goods);
	
	

	const onSelectChange = (value) => {
		console.log('select', value);
		setFiltersValue({ ...filtersValue, "category": value[0] })
	}

	const onCheckedChange = (e) => {
		console.log('checked change');
		setFiltersValue({...filtersValue, "hasDiscount": !["hasDiscount"]})
	}

	const filterFunc = (array) => {
		let newArr = [...array]
		if (!filtersValue["hasDiscount"]) {
			if (!!filtersValue["category"].length) {
				for (let i = 0; i < newArr.length; i++) {
					newArr = newArr.filter(item => item["category"] === filtersValue["category"][i])
				} return newArr;
			} else return newArr;
		} else newArr = newArr.filter(item => item["hasDiscount"] === filtersValue["hasDiscount"])
		return newArr;
	}

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
				<Filters filtersValue={ filtersValue } onSelectChange={onSelectChange} onCheckedChange={onCheckedChange} />
				<div className='goods-list goods-list-wrapper'>
					{!!goods.length && filterFunc(goods).map((item) => <Goods props={item} key={item.id} />)}
				</div>
			</div>
			<footer>
				<Pagination  defaultCurrent={1} total={50}/>
			</footer>
		</div>
  );
}

export default App;
