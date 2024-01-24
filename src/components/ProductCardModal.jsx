import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd'
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOffModalStatus } from '../store/currentProductSlice';
import { MinusOutlined, PlusOutlined} from '@ant-design/icons';
import { addNewItemToCart, addToCart, increaseCounter } from '../store/cartSlice';
import { initialCountState } from '../Params/Params';
import { hasItemInCart } from '../functions/functions';

const ProductCardModal = () => {
	const product = useSelector(state => state.product.product)
	const goodsInCart = useSelector(state => state.cart)
	const modalState = useSelector(state => state.product.isModalOpen)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [count, setCount] = useState(initialCountState)
	
	useEffect(() => {
		setIsModalOpen(modalState)
	})
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		const newMap = {}
		newMap[product.id] = count;
		
		if (hasItemInCart(product.id, goodsInCart)) {
			let newCartState = { ...goodsInCart }
			newCartState[product.id] += count
			dispatch(addNewItemToCart(newCartState))
		} else {
			dispatch(addNewItemToCart(newMap))
		}
		dispatch(toggleOffModalStatus())
		setCount(initialCountState)
	};
	const handleCancel = () => {
		dispatch(toggleOffModalStatus())
		setCount(initialCountState)
	};
	const decrement = () => {
		setCount(prev => prev -1 )
	}
	const increment = () => {
		setCount(prev => prev + 1)
	}

	return (
		<>
			<Modal
				className='product-card'
				title="О товаре"
				open={isModalOpen}
				onOk={handleAddToCart}
				onCancel={handleCancel}
				footer={[
					<Button key='decrement' disabled={!Boolean(count > 1)} onClick={decrement} icon={<MinusOutlined />} />,
					<span style={{margin: '10px'}} key='count'>{ count }</span>,
					<Button key='increment' onClick={increment} icon={<PlusOutlined />} />,
					<Button key="submit" onClick={handleAddToCart}>
						Добавить в корзину
					</Button>
				]}
			>
				<ProductCard />
			</Modal>
		</>
	);
};

export default ProductCardModal;