import React from 'react';
import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
	return (
		<div className='App'>
			<header>
				<div className='navbar'>
					<Link className='link' to="/">Главная</Link>
					<Link className='link' to="/cart">Корзина</Link>
					<Link className='link' to="/auth">Авторизация</Link>
					{/* <Link className='link' to="/payment">Оплата</Link> */}
				</div>
			</header>

			<Outlet />

			{/* <footer>
				<p>Создано нуждающимися для нуждающихся при поддержке поддерживающих
					Санкт-Петербург 2023г.</p>
			</footer> */}
		</div>
	);
};

export { Layout };