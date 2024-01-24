import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductById } from '../store/currentProductSlice';

const Goods = ({ product }) => {
	const { name, price, currency, imgSource, priceWithDiscount, cashbackPercent, cashbackSize } = product;
	const dispatch = useDispatch();
	const onProductClickHandler = async () => {
		dispatch(fetchProductById(product.id))
	};
	return (
		<div className='goods-item' onClick={onProductClickHandler}>
			<div className='img-container'>
				<img className='img-item' alt={name} src={imgSource} />
			</div>
			<div>
				{name}
			</div>
			<div className='product-price-container'>
				{product.hasOwnProperty(priceWithDiscount) ? 
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
		</div>
	);
};

export default Goods;