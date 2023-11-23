import React from 'react';
import { Button, Space } from 'antd';

const Goods = ({ product, showModal }) => {
	const { name, price, currency, imgSource, priceWithDiscount } = product;
	const onItemClickHandler = () => {
		showModal(product["id"])
	}
	return (
		<div className='goods-item' onClick={onItemClickHandler}>
			<div className='img-container'>
				<img className='img-item' alt={name} src={imgSource} />
			</div>
			<div>
				{name}
			</div>
			<div className='product-price-container'>
				{product.hasOwnProperty("priceWithDiscount") ? 
				<div>
					<div className='item-price-before'>{`${price} ${currency}`}</div>
					<div className='item-price-discount'>{`${priceWithDiscount} ${currency} `}</div>
				</div>
				 : <div className='item-price'>{`${price} ${currency}`}</div>}
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