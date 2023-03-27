import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';
import { cart, search } from '../../assets/icon';

import logo from './header-logo.png';
import style from './header.module.scss';
import Banner from '../../Components/Banner/Banner';

function Header() {
	const [searchOpen, setSearchOpen] = useState(false);
	const [value, setValue] = useState('');

	function handleChange(event: any) {
		setValue(event.target.value);
	}

	function handleSubmit(event: any) {
		event.preventDefault();
		console.log('Submitted value:', value);
		setSearchOpen(false);
	}

	return (
		<header className={style.container}>
			<div className={style.header}>
				<Link to='/'>
					<img src={logo} alt='logo'></img>
				</Link>
				<div className={style.header_navigation}>
					<Navigation />
					<div className={style.header_controls}>
						<div className={style.header_controls_btns}>
							{!searchOpen ? (
								<span
									className={style.header_controls_search_icon}
									onClick={() => {
										setSearchOpen(!searchOpen);
									}}>
									{search}
								</span>
							) : null}
						</div>
						<div className={style.header_controls_btn}>
							<div className={style.header_controls_cart_full}></div>
							<Link to='/cart' className={style.header_controls_cart_menu}>
								{cart}
							</Link>
						</div>
					</div>
					{searchOpen ? (
						<form
							className={style.header_controls_search}
							onSubmit={handleSubmit}>
							<input
								className={style.header_controls_search_input}
								placeholder='Поиск'
								value={value}
								onChange={handleChange}
							/>
						</form>
					) : null}
				</div>
			</div>
			<Banner />
		</header>
	);
}

export default Header;
