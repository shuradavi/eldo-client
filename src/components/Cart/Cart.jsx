import React from 'react';
import { useSelector } from 'react-redux';
import { isEmptyObject } from '../../functions/functions';
const Cart = () => {
	const goods = useSelector(state => state.hashMap.hashMap)
	return (
		<div>
			{/* {!isEmptyObject(goods) && goods} */}
		</div>
	);
};

export default Cart;