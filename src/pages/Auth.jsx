import React, {useEffect} from 'react';
import { useSelector} from 'react-redux';
import AuthForm from '../components/AuthForm';
import UserProfile from '../components/UserProfile'

const Auth = () => {
	const state = useSelector(state => state.user)
	useEffect(() => {
		if (Boolean(state.msg)) {
			alert(state.msg)
		}
	}, [])

	return (
		<div className='auth-page'>
			{Boolean(state.login) ? <UserProfile /> : <AuthForm />}
		</div>
	);
};

export default Auth;