import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import AuthForm from '../components/AuthForm';
import UserProfile from '../components/UserProfile'

const Auth = () => {
	const user = useSelector(state => state.user)
	const cartStatus = useSelector(state => state.cart.status)
	const navigate = useNavigate();
	
	useEffect(() => {
		if (cartStatus && Boolean(user.login)) {
			navigate('/orderpage')
		}
	}, [user.login])
	
	if (Boolean(user.login)) {
		return (
			<div className='auth-page'>
				<UserProfile />
			</div>
		)
	}
	return (
		<div className='auth-page'>
				<AuthForm />
			</div>
	)	
};

export default Auth;