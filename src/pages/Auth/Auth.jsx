import React from 'react';

const Auth = () => {
	return (
		<div className='auth-page'>
			<div className='auth-container'>
				<div>Авторизация</div>
				<div>
					<input placeholder='Имя пользователя'/>
					<input placeholder='Пароль'/>
				</div>
			</div>
		</div>
	);
};

export default Auth;