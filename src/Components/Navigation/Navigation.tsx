import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import style from './navigation.module.scss';

function Navigation() {
	const location = useLocation()
	function isActive(pathname: string) :string {
		return location.pathname === pathname ? style.active : '';
	}
	return (
		<ul className={style.nav}>
			<li className={style.nav_item}>
				<Link to='/' className={`${style.nav_item_link} ${isActive('/')}`}>
					Главная
				</Link>
			</li>
			<li className={style.nav_item}>
				<Link className={`${style.nav_item_link} ${isActive('/catalog')}`} to='/catalog'>
					Каталог
				</Link>
			</li>
			<li className={style.nav_item}>
				<Link className={`${style.nav_item_link} ${isActive('/about')}`} to='/about'>
					О магазине
				</Link>
			</li>
			<li className={style.nav_item}>
				<Link className={`${style.nav_item_link} ${isActive('/contacts')}`} to='/contacts'>
					Контакты
				</Link>
			</li>
		</ul>
	);
}

export default Navigation;
