import React from 'react';
import { Button, Space } from 'antd';

const Goods = ({ props }) => {
	const { name, price, currency, imgSource, finishPrice } = props;
	return (
		<div className='goods-item'>
			<div className='img-container'>
				<img className='img-item' alt={props.name} src={imgSource} />
			</div>
			<div className='item-title'>
				{name}
			</div>
			<div className='price'>
				<div className='item-price'>{`${price} ${currency}`}</div>
				<div className='item-price-discount'>{`${finishPrice} ${currency} `}</div>
			</div>
			<Space wrap>
				<Button type='primary' danger>
					Купить
				</Button>
			</Space>
		</div>
	);
};

export default Goods;