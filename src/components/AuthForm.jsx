import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { Button, Input} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import { initialUserData} from '../Params/Params';
import { signIn, signUp } from '../store/userSlice';



const AuthForm = () => {
	const dispatch = useDispatch();
	const [userData, setUserData] = useState(initialUserData);
	const [form, toggleForm] = useState({ unregistered: true }) 
	const handleInputChange = (e) => {
		setUserData((prev) => ({...prev, [e.target.name]: e.target.value}))
	}
	const switchForm = (e) => {
		e.preventDefault()
		toggleForm((prev) => ({...prev, unregistered: !form.unregistered}))
	}

	const onLogInClickHandler = async () => {
		dispatch(signIn(userData));
	}
	const onSignUpClickHandler = async () => {
		dispatch(signUp(userData));
	}

	return (
		<>
			<div className='auth-form-wrapper'>
				<Input
					name='login'
					prefix={<UserOutlined
						className="site-form-item-icon" />}
					placeholder='Username'
					onChange={handleInputChange} />
				<Input
					name='password'
					prefix={<LockOutlined className="site-form-item-icon" />}
					placeholder='Password'
					onChange={handleInputChange} />
				{Boolean(form.unregistered) ?
					(
						<div>
							<Button type="primary" htmlType="submit" className="login-form-button" onClick={onSignUpClickHandler}>
								Sign up
							</Button>
							Or <a href="" style={{ textDecorationLine: 'none', color: '#1677ff' }} onClick={switchForm}>sign in</a>
						</div>
					)
					:
					(
						<div>
							<Button type="primary" htmlType="submit" className="login-form-button" onClick={onLogInClickHandler}>
								Log in
							</Button>
							Or <a href="" style={{ textDecorationLine: 'none', color: '#1677ff' }} onClick={switchForm}>register now!</a>
						</div>
					)
				}	
			</div>
		</>
	);
};

export default AuthForm;