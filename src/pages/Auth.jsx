import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector} from 'react-redux';
import AuthForm from '../components/AuthForm';
import UserProfile from '../components/UserProfile'


const Auth = () => {
	const state = useSelector(state => state.user)
	const navigate = useNavigate();

	useEffect(() => {
		if (Boolean(state.login)) {
			navigate(-1)
		}
		if (Boolean(state.msg)) {
			alert(state.msg)
		}
	}, [state.login])

	return (
		<div className='auth-page'>
			{Boolean(state.login) ? <UserProfile /> : <AuthForm />}
		</div>
	);
};

export default Auth;