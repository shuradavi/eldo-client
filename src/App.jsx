import React, {  useEffect, useState } from 'react';
import './App.css';
import Goods from './components/Goods/Goods';
import { Pagination } from 'antd';
import { fetchGoodsList } from './store/goodsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { initialFilterValue, optionsInitialization } from './Params/Params';
import { Checkbox, Slider, Input, Select } from 'antd';




function App() {
	const [filtersValue, setFiltersValue] = useState(initialFilterValue)
	let goods = useSelector(state => state.goods.goods)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchGoodsList())
	}, [])
	const options = optionsInitialization();  // инициализируем список в селект
	const onSelectHandler = (value) => {
		setFiltersValue({ ...filtersValue, "category": value })
	}
	const onCheckedHandler = (e) => {
		setFiltersValue({ ...filtersValue, "bestOffer": !filtersValue["bestOffer"] })
	}
	const inputHandler = (e) => {
		setFiltersValue({ ...filtersValue, "name": e.target.value })
	}

	const filt = (arr) => {
		let newArr = [...arr]
		if (filtersValue["bestOffer"]) {
			newArr = newArr.filter(g => g["hasDiscount"] === true)
		} if (!!filtersValue["name"]) {
			newArr = newArr.filter(g => g["name"].toLowerCase().includes(filtersValue["name"].toLowerCase()))
		} if (!!filtersValue["category"].length) {
			newArr = newArr.filter(g => filtersValue["category"].join('-').toLowerCase().includes(g["category"].toLowerCase()))
		}
		return newArr;
	}

	const getDefaultPriceValue = (array) => {
		let price = [];
		for (let i = 0; i < array.length; i++) {
			price.push(array[i]["price"])
		}
		console.log(price);
		
	}

	getDefaultPriceValue(goods)
	const defaultPriceValue = []

	
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
				<div className='filters'>
					<div className='filters-wrapper'>
						<Select
							className='category-select'
							mode="tags"
							placeholder="Выберите категорию"
							onChange={onSelectHandler}
							options={options}
						/>
						<div className='range-best-input'>
							<Checkbox className='checkbox' onChange={onCheckedHandler}>лучшее предложение</Checkbox>
							<Slider
								range  defaultValue={[26, 37]}
								className='range-slider'
								// min={39000}
								// max={300000}
								// range={{
								// 	draggableTrack: true,
								// }}
								// defaultValue={[39000, 300000]}
							/>
							<Input className='input-goods' placeholder="Поиск товара" onChange={e => inputHandler(e)} />
						</div>
					</div>
				</div>
				<div className='goods-list goods-list-wrapper'>
					{(!goods.length || !filt(goods).length) ? <div>По заданным параметрам товаров не найдено</div> : (filt(goods).map((item) => <Goods props={item} key={item.id} />))}
				</div>
			</div>
			<footer>
				<Pagination defaultCurrent={1} total={50} />
			</footer>
		</div>
	);
}
export default App;
