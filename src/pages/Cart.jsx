import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { isEmptyObject } from '../functions/functions';
import CartItem from '../components/CartItem';
import {DeleteOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import { deleteAllItemFromCart } from '../store/cartSlice';
import { createLabel } from '../functions/functions';
import { LABELS } from '../Params/Params';

const Cart = () => {
	const goods = useSelector(state => state.hashMap.hashMap);
	const dispatch = useDispatch();

	const deleteAllGoods = () => {
		dispatch(deleteAllItemFromCart())
	}

	let counterInCart = 0;
	for (const [key, value] of Object.entries(goods)) {
		counterInCart += value;
	}


	return (
		<div className='cart-wrapper'>
			
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'baseline',
				margin: '40px 0 0 0',
				gap: '10px'
			}}>
				<ShoppingCartOutlined style={{fontSize: '32px', alignItems: 'end'}}/>
				<h1 style={{ margin: '0'}}>Корзина</h1>
				<div style={{ display: 'flex', alignItems: 'flex-end' }}>
					{!isEmptyObject(goods) ? <>{`${counterInCart} ${createLabel(counterInCart, LABELS)}`}</> : <>Здесь ничего нет</>}
				
				</div>
			</div>
			<div className='cart-header' onClick={deleteAllGoods}>
				<span style={{color: 'gray'}}>очистить корзину</span>
				<div className='cart-trash'><DeleteOutlined style={{fontSize: '20px', color: 'gray', marginLeft: '5px'}}/></div>
			</div>
			<hr/>
			{!isEmptyObject(goods) ?
				(<ul className='cart-container'>
					{Object.entries(goods).map((item) => (
						<>	
							<CartItem props={item} key={item[0]} />
						</>
					))}
				</ul>)
				:
				(<>Перейти в <Link className='link' to="/">каталог</Link></>)
			}
		</div>
	);
};

export default Cart;