import React from 'react';

const Item = () => {
	return (
		<div className='goods-item'>
			<div className='img-container'>
				<div className='img-wrapper'>
					<img className='img-item' src='https://static.eldorado.ru/photos/mv/Big/30064906bb.jpg/resize/700x525/'/>
				</div>
			</div>
			<div className='item-title'>
				Смартфон Apple iPhone 14 Pro 128GB Space Black
			</div>
			<div className='price'>
				<div className='item-price'>129 999 р</div>
				<div className='item-price-discount'>109 999 р</div>
			</div>
			<button className='btn-buy'>Buy</button>
		</div>
	);
};

export default Item;