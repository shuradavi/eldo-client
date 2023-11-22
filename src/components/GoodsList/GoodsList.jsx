import React, {useState} from 'react';
import { initialFilterValue } from '../../Params/Params';
import { useSelector } from 'react-redux';
import { optionsInitialization, initialPriceValue } from '../../Params/Params';
import { Checkbox, Select, Input, Pagination } from 'antd';
import RangeSlider from '../RangeSlider/RangeSlider'
import Goods from '../Goods/Goods'
import { getMinAndMaxPrice } from '../../functions/functions';



const GoodsList = () => {
	const [filtersValue, setFiltersValue] = useState(initialFilterValue)
	
	let goods = useSelector(state => state.goods.goods)
	
	// if (!!goods.length) {
	// 	initialPriceValue = getMinAndMaxPrice(goods)
	// }
	const [inputCostValue, setInputCostValue] = useState(initialPriceValue);	
	const options = optionsInitialization();  // инициализируем список в селект/
	const onSelectHandler = (value) => {
		setFiltersValue({ ...filtersValue, "category": value })
	}
	const onCheckedHandler = (e) => {
		setFiltersValue({ ...filtersValue, "bestOffer": !filtersValue["bestOffer"] })
	}
	const inputHandler = (e) => {
		setFiltersValue({ ...filtersValue, "name": e.target.value })
	}
	const filterByBestOffer = (g) => {
		if (filtersValue["bestOffer"]) {
			return g.hasDiscount
		} else
			return true;
	}
	const filterByName = (g) => {
		if (g["name"].toLowerCase().includes(filtersValue["name"].toLowerCase())) {
			return true
		} else
			return false
	}
	const filterByCategory = (g) => {
		if (!filtersValue["category"].length) {
			return true
		} else if (filtersValue["category"].join('-').toLowerCase().includes(g["category"].toLowerCase())) {
			return true
		} else
			return false
	}
	const filterByPrice = (g) => {
		if (g.hasOwnProperty("priceWithDiscount")) {
			return (inputCostValue[0] < g["priceWithDiscount"] && g["priceWithDiscount"] < inputCostValue[1])
		} else 
			return (inputCostValue[0] < g["price"] && g["price"] < inputCostValue[1])
	}
	const goodsListForRender = goods.filter(g => {
		return filterByBestOffer(g) && filterByName(g) && filterByCategory(g) && filterByPrice(g)
	})
	
	return (
		<div className="goods-list">
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
							<RangeSlider inputCostValue={inputCostValue} setInputCostValue={setInputCostValue} />
							<Checkbox className='checkbox' onChange={onCheckedHandler}></Checkbox>
							<span style={{fontWeight: 'bold'}}>лучшее предложение</span>
							<Input className='input-goods' placeholder="Поиск товара" onChange={e => inputHandler(e)} />
						</div>
					</div>
				</div>
				<div className='goods-list goods-list-wrapper'>
					{(!goodsListForRender.length) ? <div>По заданным параметрам товаров не найдено</div> : (goodsListForRender.map((item) => <Goods props={item} key={item.id} />))}
				</div>
			</div>
			<footer>
				<Pagination defaultCurrent={1} total={50} />
			</footer>
		</div>
	);
};

export default GoodsList;