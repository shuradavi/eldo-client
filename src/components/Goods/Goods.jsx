import React from 'react';
import { Button, Space } from 'antd';

const Goods = ({ product, showModal }) => {
	const { name, price, currency, imgSource, priceWithDiscount, cashbackPercent, cashbackSize } = product;
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
					<div className='font-price-before color-price-before'>{`${price} ${currency}`}</div>
					<div className='font-price-discount color-price-discount'>{`${priceWithDiscount} ${currency}`}</div>
				</div>
					: <div className='font-price color-price'>{`${price} ${currency}`}</div>}
			</div>
			{(cashbackPercent > 0) &&
				<div className='font-cashback color-cashback'>
					<span>{`Кэшбэк: ${cashbackSize} ${currency}`}</span>
				</div>}

			<Space wrap>
				<Button type='primary' danger>
					Купить
				</Button>
			</Space>
		</div>
	);
};

export default Goods;