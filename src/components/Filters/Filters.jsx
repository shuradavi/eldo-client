import React from 'react';
import { Checkbox, Slider, Input, Select } from 'antd';
import { categories, CATEGOTIES_MAP } from '../../Params/Params';


const onChange = (value) => {
	console.log('onChange: ', value);
};
  
const onAfterChange  = (value) => {
	console.log('onAfterChange: ', value);
}
const onCheckedChange = (e) => {
	console.log(`checked`);
}

const options = [];

for (let i = 0; i < 4; i++) {
  options.push({
    value: categories[i],
    label: CATEGOTIES_MAP[categories[i]],
  });
}
const handleChange = (value) => {
	console.log(`selected ${value}`);
	// филтрация массива по заданным параметрам, изменение состояния
};

const Filters = () => {
	
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
					<Input className='input-goods' placeholder="Поиск товара" />
				</div>
			</div>
		</div>
	);
};

export default Filters;