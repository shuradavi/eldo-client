import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/userSlice';

const SignIn = () => {
	const dispatch = useDispatch()
	const [userData, setUserData] = useState({ login: '', password: '' })
	const handleInputChange = (e) => {
		setUserData((prev) => ({...prev, [e.target.name]: e.target.value}))
	}

	const onSignInClickHandler = async () => {
		console.log('Clicked sign in!');
		dispatch(signIn(userData));
	}

	return (
		<div className='reg-container'>
			<span>Sign In</span>
			<div className='signIn-content'>
					<>
						<span>Login</span>
						<input placeholder='Enter the login' name='login' onChange={handleInputChange}/>
					</>
					<>
						<span>Password</span>
						<input placeholder='Enter the password' name='password' onChange={handleInputChange}/>
					</>
					<button style={{ backgroundColor: 'green' }} onClick={onSignInClickHandler}>Sign In</button>
					<button>Sign up</button>
				</div>
		</div>
	);
};

export default SignIn;