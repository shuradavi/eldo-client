import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd'
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOffModalStatus } from '../store/currentProductSlice';
import { MinusOutlined, PlusOutlined} from '@ant-design/icons';
import { addToCart } from '../store/cartSlice';
import { initialCountState } from '../Params/Params';

const ProductCardModal = () => {
	const product = useSelector(state => state.product.product)
	const modalState = useSelector(state => state.product.isModalOpen)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [count, setCount] = useState(initialCountState)
	useEffect(() => {
		setIsModalOpen(modalState)
	})
	const dispatch = useDispatch();
	const handleAddToCart = () => {
		dispatch(addToCart({...product.id, ...count})) // Посмотреть метод обработки hashMap, достать ключ и значение. 
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
					<Button key='decrement' onClick={decrement} icon={<MinusOutlined />} />,
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