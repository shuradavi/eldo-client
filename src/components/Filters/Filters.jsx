import React from 'react';
import { Checkbox, Slider, Input, Select } from 'antd';
import { categories, CATEGOTIES_MAP } from '../../Params/Params';

const Filters = ({filtersValue, setFiltersValue, onSelectChange, onCheckedChange }) => {


	const onChange = (value) => {
		console.log('onChange: ', value);
		onCheckedChange()
	};
	  
	// const onAfterChange  = (value) => {
	// 	console.log('onAfterChange: ', value);
	// }
	// const onCheckedHandler = (e) => {
	// 	console.log(`checked`);
	// 	onCheckedChange(e)
	// }
	
	const options = [];
	
	for (let i = 0; i < 4; i++) {
	  options.push({
		value: categories[i],
		label: CATEGOTIES_MAP[categories[i]],
	  });
	}

	const handleChange = (value) => {
		onSelectChange(value)
		console.log(`selected ${value}`);
		// филтрация массива по заданным параметрам, изменение состояния
	};

	const inputHandler = (e) => {
		setFiltersValue({...filtersValue, "name": e.target.value})
	}
	
	return (
		<div className='filters'>
			<div className='filters-wrapper'>
				<Select
					className='category-select'	
					mode="tags"
					placeholder="Выберите категорию"
					onChange={handleChange}
					options={options}
				/>
				<div className='range-best-input'>
					<Checkbox className='checkbox' onChange={onChange}>лучшее предложение</Checkbox>
					<Slider
						className='range-slider'
						min={39000}
						max={300000}
						range={{
							draggableTrack: true,
							}}
						defaultValue={[39000, 300000]}
					/>
					<Input className='input-goods' placeholder="Поиск товара" onChange={e => inputHandler(e)}/>
				</div>
			</div>
		</div>
	);
};

export default Filters;