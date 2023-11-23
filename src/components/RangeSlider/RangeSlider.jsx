import React, { useState } from 'react';
import { Slider, Switch, InputNumber, Space } from 'antd';

const RangeSlider = ({inputCostValue, setInputCostValue }) => {

	const onMinPriceChangeHandlr = (value) => {	
		setInputCostValue(prev => {
			const newArr = [...prev]
			newArr[0] = value
			return newArr;
		})
	}
	const onMaxPriceChangeHandlr = (value) => {	
		setInputCostValue(prev => {
			const newArr = [...prev]
			newArr[1] = value
			return newArr;
		})
	}

	return (
		<>	
			<span className='price-input'>Цена</span>
			<Space wrap>
				<InputNumber size='small' min={1} max={400000} onChange={onMinPriceChangeHandlr} defaultValue={`от ${inputCostValue[0]}`}/>
				<InputNumber size='small' min={1} max={400000} onChange={onMaxPriceChangeHandlr} defaultValue={`до ${inputCostValue[1]}`} />
				{/* <Slider /> */}
			</Space>
		</>
	);
};

export default RangeSlider;