import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/userSlice';


const SignUp = () => {
	const dispatch = useDispatch()
	const [userData, setUserData] = useState({ login: '', password: '' })
	const handleInputChange = (e) => {
		setUserData((prev) => ({...prev, [e.target.name]: e.target.value}))
	}

	const onSignUpClickHandler = async () => {
		console.log('Clicked sign up!');
		dispatch(signUp(userData));
	}

	return (
		<div className='reg-container'>
			<span>Sign Up</span>
			<div className='reg-content'>
				<>
					<span>Username</span>
					<input placeholder='Enter your name' name='login' onChange={handleInputChange}/>
				</>
				<>
					<span>Password</span>
					<input placeholder='Enter the password' name='password' onChange={handleInputChange}/>
				</>
				<button style={{ backgroundColor: 'green' }} onClick={onSignUpClickHandler}>Sign Up</button>
				<button>Sign in</button>
			</div>
		</div>
	);
};

export default SignUp;