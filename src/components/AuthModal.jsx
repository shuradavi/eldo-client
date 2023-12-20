import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { signUp, signIn, logOut } from '../store/userSlice';

const AuthModal = () => {
	const [state, setState] = useState({ login: '', password: '' })
	const [isModalOpen, setIsModalOpen] = useState(false)
	const handleInputChange = (e) => {
		setState((prev) => ({...prev, [e.target.name]: e.target.value}))
	}
	const isAuth = useSelector(state => state.user.isAuth)
	useEffect(() => {
		setIsModalOpen(isAuth)
	})
	const dispatch = useDispatch();
	const onSignUpClickHandler = async () => {
		console.log('Clicked sign up!');
		dispatch(signUp(state));
	}
	const onSignInClickHandler = async () => {
		console.log('Clicked sign in!');
		dispatch(signIn(state));
	}




	return (
		<>
					<input name='login' onChange={handleInputChange} placeholder='Имя пользователя'/>
					<input name='password' onChange={handleInputChange} placeholder='Пароль' />
					<button style={{ backgroundColor: 'blue' }} onClick={onSignUpClickHandler}>Sign Up</button>
					
					<button style={{backgroundColor: 'green'}} onClick={onSignInClickHandler}>Sign In</button>
		</>
	);
};

export default AuthModal;