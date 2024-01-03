import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Form, Input  } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { signIn } from '../store/userSlice';
import { signUp } from '../store/userSlice';


const LoginModal = () => {
	const dispatch = useDispatch()
	const isAuth = useSelector(state => state.user.isAuth)
	const status = useSelector(state => state.user.status)
	const [userData, setUserData] = useState({ login: '', password: '' })
	const [modalToggle, toggledModal] = useState({ login: true })
	const handleInputChange = (e) => {
		setUserData((prev) => ({...prev, [e.target.name]: e.target.value}))
	}

	const switchModal = (e) => {
		e.preventDefault()
		toggledModal((prev) => ({...prev, login: !prev.login}))
	}

	const onLogInClickHandler = async () => {
		console.log('Clicked Log in!!');
		await dispatch(signIn(userData)); // doc
		if (status == 'OK') {
			toggledModal({ signin: false, signup: false })
		} else return;
	}

	const onSignUpClickHandler = async () => {
		console.log('Clicked Sign up!!');
		await dispatch(signUp(userData)); // doc 
		if (status == 'OK') {
			toggledModal({ signin: false, signup: false })
		} else return;
	}

  return (
	  <>
		<Modal
			title=""
			width={350}
			mask={false}
			closeIcon={false}
			centered
			open={!isAuth}
			footer={null}
		>
				<Form
			name="normal_login"
			className="login-form"
			initialValues={{
				remember: false,
			}}
			>
			<Form.Item
				name="login"
				rules={[
				{
					required: false,
					message: 'Please input your Username!',
				},
				]}
			>
				<Input
					name='login'
					prefix={<UserOutlined
					className="site-form-item-icon" />}
					placeholder="Username"
					onChange={handleInputChange} />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
				{
					required: false,
					message: 'Please input your Password!',
				},
				]}
			>
				<Input
					name='password'
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
					onChange={handleInputChange}
				/>
				</Form.Item>
				  {modalToggle.login ?
					(<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button" onClick={onLogInClickHandler}>
							Log in
						</Button>
						Or <a href="" title="signup" onClick={switchModal}>register now!</a>
					  </Form.Item>) :
					(<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button" onClick={onSignUpClickHandler}>
							Sign up
						</Button>
						Or <a href="" title="signup" onClick={switchModal}>log in!</a>
					</Form.Item>)}  
			</Form>
		  </Modal>
    </>
  );
};
export default LoginModal;