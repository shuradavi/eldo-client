import React from 'react';
import { Rate} from 'antd'
import { useSelector } from 'react-redux';
import { calcPriceWithDiscount } from '../functions/functions';

const ProductCard = () => {
	const product = useSelector(state => state.product.product)
		return (
			<div>
				<img className='img-item' alt={product["name"]} src={product["imgSource"]} />
				<h2 className='product-card-title'>{product["name"]}</h2>
				<div className='product-card-price'>
					<span className='product-card-title'>Стоимость:</span>
					{product.hasOwnProperty(["priceWithDiscount"])
						?
						<>
							<span className='font-price-before color-price-before'>{`${product["price"]} ${product["currency"]}`}</span>
							<span>/</span>
							<span className='font-price-discount color-price-discount font-default-price'>{calcPriceWithDiscount(product)}</span>
							<span className='font-price-discount font-price font-default-price'>{product["currency"]}</span>	
						</>
						:
						<>
							<span className='font-price-discount color-price font-default-price'>{product["price"]}</span>
							<span className='font-price-discount font-default-price'>{product["currency"]}</span>
						</>
						 }
				</div>
				{(product["cashbackPercent"] > 0) &&
					<div className='product-cashback cashback'>
						<span className='product-card-title color-cashback'>Кэшбэк:</span>
						<span className='color-cashback'>{`${product["cashbackSize"]} ${product["currency"]}`}</span>
					</div>}
				<div className='product-description'>
					<span className='product-card-title'>Описание: </span>
					<span>{product["description"]}</span>
				</div>
				<div className='product-country'>
					<span className='product-card-title'>Страна производитель: </span>
					<span>{product["country"]}</span>
				</div>
				<div className='product-guarantee'>
					<span className='product-card-title'>Срок гарантии: </span>
					{Boolean(product["guarantee"]) && <span>{`${product["guarantee"]["period"]} ${product["guarantee"]["unit"]}`}</span>}
				</div>
				<div className='product-rate'>
					<div className='product-card-title'>Рейтинг: </div>
					{(product["rating"] > 0)
						?
						<>
							<div>{product["rating"]}</div>
							<Rate disabled={true} allowHalf value={product["rating"]} />
						</>
						:
						<div>слишком мало отзывов</div>}
				</div>
			</div>
		);
};

export default ProductCard;