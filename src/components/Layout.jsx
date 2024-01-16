import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import UserProfile from './UserProfile';


const Layout = () => {
	const user = useSelector(state => state.user)
	return (
		<div className='App'>
			<header>
				<div className='navbar'>
					<Link className='link' to="/">Главная</Link>
					<Link className='link' to="/cart">Корзина</Link>
					{Boolean(user.login) ? <Link className='link' to="/account">Выйти</Link> : <Link className='link' to="/auth">Авторизоваться</Link>}
				</div>
			</header>
			<Outlet />	
		</div>
	);
};

export { Layout };