import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Button, ConfigProvider } from 'antd';
import { isEmptyObject } from '../functions/functions';
import CartItem from '../components/CartItem';
import { deleteAllItemFromCart } from '../store/cartSlice';
import { createLabel } from '../functions/functions';
import { LABELS } from '../Params/Params';


const Cart = () => {
	const goods = useSelector(state => state.hashMap.hashMap);
	const goodsList = useSelector(state => state.goods.goods)
	const user = useSelector(state => state.user)
	const navigate = useNavigate();
	let defaultPrice = 0;
	let finishPrice = 0;
	let currency = '';
	const dispatch = useDispatch();
	const deleteAllGoods = () => {
		dispatch(deleteAllItemFromCart())
	}
	let counterInCart = 0;
	for (const [key, value] of Object.entries(goods)) {
		if (goodsList.filter((i) => i["id"] === key)[0]["priceWithDiscount"]) {
			finishPrice += goodsList.filter((i) => i["id"] === key)[0]["priceWithDiscount"] * value;
		}
		counterInCart += value;
		defaultPrice += goodsList.filter((i) => i["id"] === key)[0]["price"] * value;
		currency = goodsList.filter((i) => i["id"] === key)[0]["currency"]
	}

	const placeOrder = () => {
			navigate('/payment')
	}


	return (
		<div>
			<div className='cart-header'>
				<ShoppingCartOutlined style={{fontSize: '32px', alignItems: 'end'}}/>
				<div className='cart-title'>Корзина</div>
				<div style={{ display: 'flex', alignItems: 'flex-end' }}>
					{!isEmptyObject(goods) ? <>{`${counterInCart} ${createLabel(counterInCart, LABELS)}`}</> : <>Здесь ничего нет</>}
				
				</div>
			</div>
			<div className='cart-header-button' onClick={deleteAllGoods}>
				<span style={{color: 'gray'}}>очистить корзину</span>
				<div className='cart-trash'><DeleteOutlined style={{fontSize: '20px', color: 'gray', marginLeft: '5px'}}/></div>
			</div>
			<hr/>
			{!isEmptyObject(goods) ?
				(<>
					<ul className='cart-container'>
						{Object.entries(goods).map((item) => (
							<>	
								<CartItem key={item[0]} props={item}/>
							</>
						))}
					</ul>
					<hr />
					<ConfigProvider theme={{
						token: {
							colorBgBase: 'yellow',
					}}}>
						<div className='cart-order'>
							<div>
								<Button onClick={placeOrder} style={{width: '400px'}}>Перейти к оформлению</Button>
								
							</div>
							<div>
								<div className='cart-order-content'>
									<div>{`Всего: ${counterInCart} ${createLabel(counterInCart, LABELS)}`}</div>
									<div style={{color: 'gray'}}>{`цена без скидки: ${defaultPrice} ${currency}`}</div>
								</div>
								<div className='cart-order-content'>
									<div>{`Скидка:`}</div>
									<div style={{color: 'red'}}>{`${defaultPrice - finishPrice} ${currency}`}</div>
								</div>
								<div className='cart-order-content'>
									<div>Итоговая цена:</div>
									<div style={{color: 'green', fontWeight: 'bold'}}>{`${finishPrice} ${currency}`}</div>
								</div>
							</div>
						</div>	
					</ConfigProvider>
					
				</>
				)
				:
				(<>Перейти в <Link className='link' to="/">каталог</Link></>)
			}
		</div>
	);
};

export default Cart;