import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { logOut, signIn, signUp } from '../../store/userSlice';
import AuthModal from '../../components/AuthModal';

const Auth = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.user.isAuth)
	console.log(isAuth);
	const [isModalOpen, setIsModalOpen] = useState(false)
	const onLogOutClickHandler = async () => {
		console.log('Clicked logout!');
		dispatch(logOut())
	}

	return (
		<div className='auth-page'>
			<div className='auth-container'>
				{Boolean(isAuth) ? <div> Auth </div> : null }
				
				{/* <div>Авторизация</div> */}
				{/* <div>
					{Boolean(isModalOpen) && <AuthModal />}
					<button style={{ backgroundColor: 'red' }} onClick={onLogOutClickHandler}>Log out</button>
				</div> */}
			</div>
		</div>
	);
};

export default Auth;