import React from 'react';
import { Link } from 'react-router-dom';
import style from './footerNavigation.module.scss';

function FooterNavigation() {
	return (
		<ul className={style.nav}>
			<li className={style.nav_item}>
				<Link to='/about' className={style.nav_link}>
					О магазине
				</Link>
			</li>
			<li className={style.nav_item}>
				<Link to='/catalog' className={style.nav_link}>
					Каталог
				</Link>
			</li>
			<li className={style.nav_item}>
				<Link to='/contacts' className={style.nav_link}>
					Контакты
				</Link>
			</li>
		</ul>
	);
}

export default FooterNavigation;
