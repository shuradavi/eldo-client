import React from 'react';
import { useSelector } from 'react-redux';
import { calcPriceWithDiscount } from '../../functions/functions';

const ProductCard = () => {
	const product = useSelector(state => state.product.product)
	if (product.hasOwnProperty(["price"])) {
		return (	
			<div>			
				<img className='img-item' alt={product["name"]} src={product["imgSource"]} />
				<h2 className='product-card-title'>{ product["name"]}</h2>
				<div className='product-card-price'>
					<span className='product-card-title'>Стоимость:</span>
					<span className='item-price-before'>{product["price"]}</span>
					<span>/</span>
					<span className='item-price-discount'>{calcPriceWithDiscount(product)}</span>
					<span>{product["currency"]}</span>
				</div>
				{(product["cashbackPercent"] > 0) &&
				<div className='product-cashback cashback'>
					<span className='product-card-title'>Кэшбэк:</span>
					<span>{`${product["cashbackSize"]} ${product["currency"]}`}</span>
				</div>}
			</div>
		);
	}
	
};

export default ProductCard;