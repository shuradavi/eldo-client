import React from 'react';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { useSelector, useDispatch} from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
import { deleteAllItemFromCart } from '../store/cartSlice';
  
const OrderPage = () => {
	const dispatch = useDispatch();
	const goods = useSelector(state => state.goods.goods)
	const hashMapInCart = useSelector(state => state.cart.cart);
	const user = useSelector(state => state.user)

	const navigate = useNavigate();
	const orderedGoods = []
	for (const [key, value] of Object.entries(hashMapInCart)) {
		// console.log('goods: ', goods);
		// console.log('key: ', key);
		let newItem = { ...goods.filter(i => i.id === key)[0], count: value }
		// console.log('new Item: ', newItem);
		orderedGoods.push(newItem)
	}
	const [form] = Form.useForm();
	const handleOk = () => {
		navigate('/')
	}
	const success = () => {
		Modal.success({
			content: 'Заказ успешно оформлен',
			onOk() {
				handleOk();
			},
		});
	};

	const layout = {
		labelCol: {
		  span: 8,
		},
		wrapperCol: {
		  span: 16,
		},
	  };
	  
	const validateMessages = {
		required: '${label} is required!',
		types: {
		  email: '${label} is not a valid email!',
		  number: '${label} is not a valid number!',
		},
		number: {
		  range: '${label} must be between ${min} and ${max}',
		},
	};
	
	const onFinish = (values) => {
		success();
		console.log('Заказ успешно создан. Данные пользователя: ', values.user, 'список товаров: ', orderedGoods);
		dispatch(deleteAllItemFromCart())
	};
	
	if (!Boolean(user.login)) {
		return <Navigate to='/auth' replace/>
	}
	

	return (
		<div className='payment-wrapper'>
			<Form
				{...layout}
				form={form}
				name="nest-messages"
				onFinish={onFinish}
				style={{
				maxWidth: 600,
				}}
				validateMessages={validateMessages}
			>
				<Form.Item
				name={['user', 'name']}
				label="Имя"
				rules={[
					{
					required: true,
					},
				]}
				>
      				<Input />
    			</Form.Item>
				<Form.Item
				name={['user', 'email']}
				label="Email"
				rules={[
					{
					type: 'email',
					},
				]}
				>
      				<Input />
    			</Form.Item>
				<Form.Item
				name={['user', 'age']}
				label="Возраст"
				rules={[
					{
					type: 'number',
					min: 0,
					max: 99,
					},
				]}
				>
					<InputNumber />
				</Form.Item>
				<Form.Item
					name={['user', 'Address']}
					label="Адрес"
				>
					<Input />
				</Form.Item>
				<Form.Item name={['user', 'Description']} label="Примечания">
					<Input.TextArea />
				</Form.Item>
				<Form.Item
				wrapperCol={{
					...layout.wrapperCol,
					offset: 8,
				}}
				>
				<Button type="primary" htmlType="submit">
					Оформить заказ	
				</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default OrderPage;