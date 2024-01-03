import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calcFinishPrice } from '../functions/functions';
import { Button } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {increaseCount, decreaseCount } from '../store/cartSlice';

const CartItem = ({ props }) => {
	const goods = useSelector(state => state.goods.goods)
	const dispatch = useDispatch();
	const product = goods.filter((i) => i["id"] === props[0])[0]
	const count = props[1];
	let finishPrice = calcFinishPrice(product) * count
	let defaultPrice = product["price"] * count

	const decrement = () => {
		dispatch(decreaseCount(product["id"]))
	}
	const increment = () => {
		dispatch(increaseCount(product["id"]))
	}
	
	return (
		<li className='cart-item-wrapper'>
			<div className='cart-item-content'>
				<div className='cart-img-wrapper'><img className='cart-img' alt={product["name"]} src={product["imgSource"]} /></div>
				<div className='cart-middle'>{product['name']}</div>
				<div className='cart-right'>
					<div>
						<div className='cart-item-finishprice'>{`Цена со скидкой: ${finishPrice} ${product["currency"]}`}</div>
						<div className='cart-item-defprice'>{`без: ${defaultPrice} ${product["currency"]}`}</div>
					</div>
					<div className='counter-wrapper'>
						<Button style={{width: '2em'}} key='decrement' onClick={decrement} icon={<MinusOutlined />} />
						<div style={{ width: '30px' }} className='cart-item-counter'>{count}</div>
						<Button style={{width: '2em'}} key='increment' onClick={increment} icon={<PlusOutlined />} />
					</div>
				</div>
			</div>
		</li>
	);
};

export default CartItem;