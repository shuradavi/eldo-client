import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {DeleteOutlined} from '@ant-design/icons'
import { Button} from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {increment, decrement, deleteItemFromCart } from '../store/cartSlice';

const CartItem = ({ props}) => {	
	const goods = useSelector(state => state.goods.goods)
	const dispatch = useDispatch();
	const product = goods.filter((i) => i.id === props[0])[0]
	const count = props[1];
	let finishPrice = product.priceWithDiscount * count
	let defaultPrice = product.price * count

	const deleteItem = () => {
		dispatch(deleteItemFromCart(props[0][0]))
	}
	const decreaseCount = () => {
		dispatch(decrement(product.id))
	}
	const increaseCount = () => {
		dispatch(increment(product.id))
	}
	
	return (
		<li className='cart-item-wrapper'>
			<div className='cart-item-content'>
				<div className='cart-img-wrapper'><img className='cart-img' alt={product.name} src={product.imgSource} /></div>
				<div className='cart-middle'>{product.name}</div>
				<div className='cart-right'>
					{product.hasDiscount ?
						<div>
							<div className='cart-item-finishprice'>{`Цена со скидкой: ${finishPrice} ${product.currency}`}</div>
							<div className='cart-item-defprice'>{`без: ${defaultPrice} ${product.currency}`}</div>
						</div>
						:
						<div>
							<div className='cart-item-finishprice'>{`Цена: ${defaultPrice} ${product.currency}`}</div>
						</div>}
					<div className='counter-wrapper'>
						<Button style={{width: '2em'}} key='decrement' disabled={!Boolean(props[1] > 1)} onClick={decreaseCount} icon={<MinusOutlined />} />
						<div style={{ width: '30px' }} className='cart-item-counter'>{count}</div>
						<Button style={{width: '2em'}} key='increment' onClick={increaseCount} icon={<PlusOutlined />} />
					</div>
				</div>
				<div className='cart-trash'><DeleteOutlined onClick={deleteItem} style={{fontSize: '20px', color: 'gray', marginLeft: '5px'	}} /></div>
			</div>
		</li>
	);
};

export default CartItem;