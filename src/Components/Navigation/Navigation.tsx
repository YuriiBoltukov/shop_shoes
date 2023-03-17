import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.module.scss';

function Navigation() {
	return (
		<ul className='navbar-nav'>
			<li className='nav-item'>
				<Link to='/' className='nav-link'>
					Главная
				</Link>
			</li>
			<li className='nav-item'>
				<Link className='nav-link' to='/catalog'>
					Каталог
				</Link>
			</li>
			<li className='nav-item'>
				<Link className='nav-link' to='/about'>
					О магазине
				</Link>
			</li>
			<li className='nav-item'>
				<Link className='nav-link' to='/contacts'>
					Контакты
				</Link>
			</li>
		</ul>
	);
}

export default Navigation;
