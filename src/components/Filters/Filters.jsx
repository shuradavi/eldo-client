import React from 'react';

const Filters = () => {
	
	return (
		<div className='filters'>
			<div className='category'>
				{/* <select defaultValue='Категории' value='категории'>
					category
				</select> */}
			</div>
			<div className='range-filter'>
				range filter
			</div>
			<div className='checkbox'>
				<input
					type='checkbox'
					value=''/>
				<div>только лучшее предложение</div>
			</div>
			<div className='context-input'>
				<input type="text" />
			</div>
		</div>
	);
};

export default Filters;