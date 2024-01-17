import React, {useEffect, useState} from 'react';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { deleteAllItemFromCart } from '../store/cartSlice';
  
const Payment = () => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.hashMap)
	const goods = useSelector(state => state.goods.goods)
	const hashMapInCart = useSelector(state => state.hashMap.hashMap);
	const user = useSelector(state => state.user)
	const navigate = useNavigate();
	useEffect(() => {
		if (!Boolean(user.login)) {
			navigate("/auth")
		}
	}, [])
	const orderedGoods = []
	for (const [key, value] of Object.entries(hashMapInCart)) {
		let newItem = { ...goods.filter(i => i["id"] === key)[0], count: value }
		orderedGoods.push(newItem)
	}
	const [form] = Form.useForm();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
	  setIsModalOpen(true);
	};
	const handleOk = () => {
		form.resetFields();
		setIsModalOpen(false);
	};
	const handleCancel = () => {
	  setIsModalOpen(false);
	};

	const layout = {
		labelCol: {
		  span: 8,
		},
		wrapperCol: {
		  span: 16,
		},
	  };
	  
	  /* eslint-disable no-template-curly-in-string */
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
			console.log('Заказ успешно создан. Данные пользователя: ', values.user, 'список товаров: ', orderedGoods);
			dispatch(deleteAllItemFromCart())
			navigate("/")

	};
	
	

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
				<Button type="primary" htmlType="submit" onClick={showModal}>
					Оформить заказ
				</Button>
				</Form.Item>
			</Form>
			<Modal title="Заказ успешно оформлен" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        		<p>В ближайшее время менеджер свяжется с вами для подтверждения заказа</p>
      		</Modal>
		</div>
	);
};

export default Payment;