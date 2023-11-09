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
	const [filtersValue, setFiltersValue] = useState(initialValue)
	let goods = useSelector(state => state.goods.goods)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchGoodsList())
	}, [])

	
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
		if (!!filtersValue.name) {
			newArr = newArr.filter(item => item["name"].toLowerCase().includes(filtersValue.name.toLowerCase()))
			console.log('newArr :', newArr);
		}
		// newArr = newArr.filter(item => item["name"].toLowerCase().includes(filtersValue["name"]).toLowerCase())
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
				<Filters filtersValue={ filtersValue} setFiltersValue={ setFiltersValue } onSelectChange={onSelectChange} onCheckedChange={onCheckedChange} />
				<div className='goods-list goods-list-wrapper'>
					{(!goods.length || !filterFunc(goods).length) ? <div>По заданным параметрам товаров не найдено</div> : (filterFunc(goods).map((item) => <Goods props={item} key={item.id} />))}

					{/* {!!goods.length && filterFunc(goods).map((item) => <Goods props={item} key={item.id} />)} */}
				</div>
			</div>
			<footer>
				<Pagination  defaultCurrent={1} total={50}/>
			</footer>
		</div>
  );
}

export default App;
