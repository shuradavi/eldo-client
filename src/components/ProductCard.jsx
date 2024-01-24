import React from 'react';
import { Rate} from 'antd'
import { useSelector } from 'react-redux';
import { calcPriceWithDiscount } from '../functions/functions';

const ProductCard = () => {
	const product = useSelector(state => state.product.product)
	const { name, imgSource, price, currency, cashbackSize, cashbackPercent, description, country, guarantee, rating } = product;
		return (
			<div>
				<img className='img-item' alt={name} src={imgSource} />
				<h2 className='product-card-title'>{name}</h2>
				<div className='product-card-price'>
					<span className='product-card-title'>Стоимость:</span>
					{product.hasOwnProperty("priceWithDiscount")
						?
						<>
							<span className='font-price-before color-price-before'>{`${price} ${currency}`}</span>
							<span>/</span>
							<span className='font-price-discount color-price-discount font-default-price'>{calcPriceWithDiscount(product)}</span>
							<span className='font-price-discount font-price font-default-price'>{currency}</span>	
						</>
						:
						<>
							<span className='font-price-discount color-price font-default-price'>{price}</span>
							<span className='font-price-discount font-default-price'>{currency}</span>
						</>
						 }
				</div>
				{(cashbackPercent > 0) &&
					<div className='product-cashback cashback'>
						<span className='product-card-title color-cashback'>Кэшбэк:</span>
						<span className='color-cashback'>{`${cashbackSize} ${currency}`}</span>
					</div>}
				<div className='product-description'>
					<span className='product-card-title'>Описание: </span>
					<span>{description}</span>
				</div>
				<div className='product-country'>
					<span className='product-card-title'>Страна производитель: </span>
					<span>{country}</span>
				</div>
				<div className='product-guarantee'>
					<span className='product-card-title'>Срок гарантии: </span>
					{Boolean(guarantee) && <span>{`${guarantee.period} ${guarantee.unit}`}</span>}
				</div>
				<div className='product-rate'>
					<div className='product-card-title'>Рейтинг: </div>
					{(rating > 0)
						?
						<>
							<div>{rating}</div>
							<Rate disabled={true} allowHalf value={rating} />
						</>
						:
						<div>слишком мало отзывов</div>}
				</div>
			</div>
		);
};

export default ProductCard;