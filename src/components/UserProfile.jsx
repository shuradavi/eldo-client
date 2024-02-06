import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate} from 'react-router-dom';
import { logOut } from '../store/userSlice';

const UserProfile = () => {
	const userName = useSelector(state => state.user.login)
	const dispatch = useDispatch()
	const navigate = useNavigate();

	const onLogOutClickHandler = async () => {
		console.log('Clicked logout!');
		dispatch(logOut())
		navigate('/')
	}

	if (Boolean(userName)) {
		return (
			<div className='profile-container'>
				<span>Your profile</span>
				<div className='profile-content'>
					<span>Welcome, {userName}</span>
					<button style={{ backgroundColor: 'red' }} onClick={onLogOutClickHandler}>Выйти</button>
				</div>
			</div> 
		);
	}

	else {
		return (<Navigate to='/' replace />);
	}
}
export default UserProfile;