import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';
import logo from './header-logo.png';
import './header.module.scss';

function Header() {
	return (
		<header className='container'>
			<div className='row'>
				<div className='col'>
					<nav className='navbar navbar-expand-sm navbar-light bg-light'>
						<Link className='navbar-brand' to='/'>
							<img src={logo} alt='logo' />
						</Link>

						<div className='collapase navbar-collapse' id='navbarMain'>
							<Navigation />
							<div>
								<div className='header-controls-pics'>
									<div
										data-id='search-expander'
										className='header-controls-pic header-controls-search'></div>
									{/* Do programmatic navigation on click to /cart.html */}
									<div className='header-controls-pic header-controls-cart'>
										<div className='header-controls-cart-full'></div>
										<div className='header-controls-cart-menu'></div>
									</div>
								</div>
								<form
									data-id='search-form'
									className='header-controls-search-form form-inline invisible'>
									<input className='form-control' placeholder='Поиск' />
								</form>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
