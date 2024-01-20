import React, { useState } from 'react';
import { initialFilterValue, paginationInitialValue } from '../Params/Params';
import { useSelector } from 'react-redux';
import { optionsInitialization, initialPriceValue } from '../Params/Params';
import { Checkbox, Select, Input, Pagination, Spin} from 'antd';
import ProductCardModal from '../components/ProductCardModal';
import CostFilter from '../components/CostFilter';
import Goods from '../components/Goods';
import { STATUS_MAP } from '../Params/Params';

const GoodsList = () => {
	const goods = useSelector(state => state.goods.goods)
	const fetchStatus = useSelector(state => state.goods.status)
	const [inputCostValue, setInputCostValue] = useState(initialPriceValue);	// useEffect(()=> {})
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
		setFiltersValue({ ...filtersValue, category: value })
	}
	const onCheckedHandler = () => {
		setFiltersValue({ ...filtersValue, "bestOffer": !filtersValue["bestOffer"] })  // убрать скобки
	}
	const inputHandler = (e) => {
		setFiltersValue({ ...filtersValue, "name": e.target.value })
	}

	const filterByBestOffer = (g) => {
		return !filtersValue["bestOffer"] || g.hasDiscount
	}
	const filterByName = (g) => {
		return g["name"].toLowerCase().includes(filtersValue["name"].toLowerCase())
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
		setPaginationValue(prev => ({
			...prev,
			pageSize: pageSizeValue
		}))
	}

	const renderSwitch = (param) => {
		switch (param) {
			case STATUS_MAP.fulfilled:
				return goodsListForRender.slice(indexOfFirstProduct, indexOfLastProduct).map((product) => <Goods product={product} key={product.id} />)
			default:
				return (<Spin tip="Loading" size="large">
					<div className="content" />
				</Spin>
				);
		}
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
					{(goodsListForRender.length) ? renderSwitch(fetchStatus) : <div>По заданным параметрам товаров не найдено</div>}
				</div>
			</div>
			{(!goodsListForRender.length) || <Pagination showSizeChanger onChange={onPageNumberHandler} pageSize={paginationValues.pageSize} current={paginationValues.currentPage} onShowSizeChange={onShowSizeChange} pageSizeOptions={paginationValues.pageSizeOptions} total={goodsListForRender.length} />}
		</div>
	);
};

export default GoodsList;