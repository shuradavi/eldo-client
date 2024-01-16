import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { logOut } from '../store/userSlice';

const UserProfile = () => {
	const userName = useSelector(state => state.user.login)
	const dispatch = useDispatch()
	const onLogOutClickHandler = async () => {
		console.log('Clicked logout!');
		dispatch(logOut())
	}

	return (
		<div className='profile-container'>
			<span>Your profile</span>
			<div className='profile-content'>
				<span>Welcome, {userName}</span>
				<button style={{ backgroundColor: 'red' }} onClick={onLogOutClickHandler}><Link className='link' to="/auth">Log out</Link></button>
			</div>
		</div>
	);
};

export default UserProfile;