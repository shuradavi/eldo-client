import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import UserProfile from '../../components/UserProfile';
import LoginModal from '../../components/LoginModal';

const Auth = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.user.isAuth)

	return (
		<div className='auth-page'>
			{Boolean(!isAuth) ? <LoginModal /> : <UserProfile />}
		</div>
	);
};

export default Auth;