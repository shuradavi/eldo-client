import React from 'react';
import { useSelector } from 'react-redux';
import { isEmptyObject } from '../functions/functions';
import CartItem from '../components/CartItem';
import { Checkbox } from 'antd';
import { sumOfGoodsInCart } from '../functions/functions';
const Cart = () => {
	const goods = useSelector(state => state.hashMap.hashMap);
	return (
		<div className='cart-wrapper'>
			
			<div style={{
				display: 'flex',
			flexDirection: 'row', margin: '40px 0 0 0', gap: '10px'}}>
				<h1 style={{ margin: '0'}}>Корзина</h1>
				<div style={{
					display: 'flex',
				alignItems: 'flex-end'}}>х товаров</div>
			</div>
			<div className='cart-header'>
				<div className='cart-checkbox'><Checkbox className='checkbox'></Checkbox></div>
			</div>
			<hr/>
			{!isEmptyObject(goods) ?
				(<ul className='cart-container'>
					{Object.entries(goods).map((item) => (
						<>
							<div className='cart-checkbox'><Checkbox className='checkbox'></Checkbox></div>
							<CartItem props={item} key={item[0]} />
						</>
					))}
				</ul>)
				:
				(<>Корзина пуста</>)
			}
		</div>
	);
};

export default Cart;