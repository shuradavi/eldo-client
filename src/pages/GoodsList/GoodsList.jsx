import React, { useState } from 'react';
import { initialFilterValue, paginationInitialValue } from '../../Params/Params';
import { useSelector } from 'react-redux';
import { optionsInitialization, initialPriceValue } from '../../Params/Params';
import { Checkbox, Select, Input, Pagination, Modal, Button } from 'antd';
import CostFilter from '../CostFilter/CostFilter'
import Goods from '../Goods/Goods'
import ProductCardModal from '../ProductCardModal/ProductCardModal';

const GoodsList = () => {
	const goods = useSelector(state => state.goods.goods)
	const hashMap = useSelector(state => state.hashMap.hashMap)
	const [inputCostValue, setInputCostValue] = useState(initialPriceValue);	
	const [filtersValue, setFiltersValue] = useState(initialFilterValue)
	const [paginationValues, setPaginationValue] = useState(paginationInitialValue)
	const options = optionsInitialization();  // инициализируем список в селект/
	
	const onPageNumberHandler = (value) => {
		setPaginationValue((prev) => {
			return {
				...prev,
				currentPage: value
			}
		})
	}

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
		if (filtersValue["bestOffer"]) { // return filtersValue["bestOffer"] && g.hasDiscount
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
	const indexOfLastProduct = (paginationValues.currentPage * paginationValues.pageSize);
	const indexOfFirstProduct = (paginationValues.currentPage * paginationValues.pageSize - paginationValues.pageSize) 
	const goodsListForRender = goods.filter(g => {
		return filterByBestOffer(g) && filterByName(g) && filterByCategory(g) && filterByPrice(g)
	})
	const onShowSizeChange = (_, pageSizeValue) => {
		// console.log('current: ', currentPage, '; pageSize: ', pageSize);
		setPaginationValue(prev => ({
			...prev,
			pageSize: pageSizeValue
		}))
	}
	
	return (
		<div className="goods-list">
			<div className='main'>
				<div className='filters-wrapper'>
					<div className='filters'>
						<Select
							className='category-select'
							mode="tags"
							placeholder="Выберите категорию"
							onChange={onSelectHandler}
							options={options}
						/>
						<div className='cost-best-input'>
							<CostFilter inputCostValue={inputCostValue} setInputCostValue={setInputCostValue} />
							<Checkbox className='checkbox' onChange={onCheckedHandler}></Checkbox>
							<span style={{fontWeight: 'bold'}}>лучшее предложение</span>
							<Input className='input-goods' placeholder="Поиск товара" onChange={e => inputHandler(e)} />
						</div>
					</div>
				</div>
				<div className='goods-list'>
					<ProductCardModal />
					{(!goodsListForRender.length) ? <div>По заданным параметрам товаров не найдено</div> : (goodsListForRender.slice(indexOfFirstProduct, indexOfLastProduct).map((product) => <Goods product={product} key={product.id} />))}
				</div>
			</div>
			<Pagination showSizeChanger onChange={onPageNumberHandler} pageSize={paginationValues.pageSize} current={paginationValues.currentPage} onShowSizeChange={onShowSizeChange} pageSizeOptions={paginationValues.pageSizeOptions} total={goodsListForRender.length} />
		</div>
	);
};

export default GoodsList;