import React from 'react';
import { Link } from 'react-router-dom';
import style from './navigation.module.scss';

function Navigation() {
	return (
		<ul className={style.nav}>
			<li className={style.nav_item}>
				<Link to='/' className={style.nav_item_link}>
					Главная
				</Link>
			</li>
			<li className={style.nav_item}>
				<Link className={style.nav_item_link} to='/catalog'>
					Каталог
				</Link>
			</li>
			<li className={style.nav_item}>
				<Link className={style.nav_item_link} to='/about'>
					О магазине
				</Link>
			</li>
			<li className={style.nav_item}>
				<Link className={style.nav_item_link} to='/contacts'>
					Контакты
				</Link>
			</li>
		</ul>
	);
}

export default Navigation;
