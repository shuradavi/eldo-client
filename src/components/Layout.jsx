import React from 'react';
import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
	return (
		<div className='App'>
			<header>
				<div className='navbar'>
					<Link to="/">Главная</Link>
					<Link to="/cart">Корзина</Link>
					<Link to="/payment">Оплата</Link>
					<Link to="/auth">Авторизация</Link>
				</div>
			</header>

			<Outlet />

			<footer>
				<p>Создано нуждающимися для нуждающихся при поддержке поддерживающих
					Санкт-Петербург 2023г.</p>
			</footer>
		</div>
	);
};

export { Layout };