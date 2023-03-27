import React from 'react';
import { categories } from '../../MOCK/categories';

function IndexLoaded() {
	const categoriesList = categories;
	return (
		<div className='row'>
			<div className='col'>
				<section className='top-sales'>
					<h2 className='text-center'>Хиты продаж!</h2>
					<div className='row'>
						<div className='col-4'>
							<div className='card'>
								<img
									src='#'
									className='card-img-top img-fluid'
									alt="Босоножки 'MYER'"
								/>
								<div className='card-body'>
									<p className='card-text'>Босоножки 'MYER'</p>
									<p className='card-text'>34 000 руб.</p>
									<a href='/products/1' className='btn btn-outline-primary'>
										Заказать
									</a>
								</div>
							</div>
						</div>
						<div className='col-4'>
							<div className='card'>
								<img
									src='./img/products/sandals_keira.jpg'
									className='card-img-top img-fluid'
									alt="Босоножки 'Keira'"
								/>
								<div className='card-body'>
									<p className='card-text'>Босоножки 'Keira'</p>
									<p className='card-text'>7 600 руб.</p>
									<a
										href='/products/1.html'
										className='btn btn-outline-primary'>
										Заказать
									</a>
								</div>
							</div>
						</div>
						<div className='col-4'>
							<div className='card'>
								<img
									src='./img/products/superhero_sneakers.jpg'
									className='card-img-top img-fluid'
									alt='Супергеройские кеды'
								/>
								<div className='card-body'>
									<p className='card-text'>Супергеройские кеды</p>
									<p className='card-text'>1 400 руб.</p>
									<a
										href='/products/1.html'
										className='btn btn-outline-primary'>
										Заказать
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='catalog'>
					<h2 className='text-center'>Каталог</h2>
					<ul className='catalog-categories nav justify-content-center'>
						<li className='nav-item'>
							<a className='nav-link active' href='!#'>
								Все
							</a>
						</li>
						{categoriesList.map(el => {
							return (
								<li className='nav-item' key={el.id}>
									<a className='nav-link' href='!#'>
										{el.title}
									</a>
								</li>
							);
						})}
					</ul>
					<div className='row'>
						<div className='col-4'>
							<div className='card catalog-item-card'>
								<img
									src='./img/products/sandals_myer.jpg'
									className='card-img-top img-fluid'
									alt="Босоножки 'MYER'"
								/>
								<div className='card-body'>
									<p className='card-text'>Босоножки 'MYER'</p>
									<p className='card-text'>34 000 руб.</p>
									<a
										href='/products/1.html'
										className='btn btn-outline-primary'>
										Заказать
									</a>
								</div>
							</div>
						</div>

						<div className='col-4'>
							<div className='card catalog-item-card'>
								<img
									src='./img/products/superhero_sneakers.jpg'
									className='card-img-top img-fluid'
									alt='Супергеройские кеды'
								/>
								<div className='card-body'>
									<p className='card-text'>Супергеройские кеды</p>
									<p className='card-text'>1 400 руб.</p>
									<a
										href='/products/1.html'
										className='btn btn-outline-primary'>
										Заказать
									</a>
								</div>
							</div>
						</div>
						<div className='col-4'>
							<div className='card catalog-item-card'>
								<img
									src='./img/products/sandals_myer.jpg'
									className='card-img-top img-fluid'
									alt="Босоножки 'MYER'"
								/>
								<div className='card-body'>
									<p className='card-text'>Босоножки 'MYER'</p>
									<p className='card-text'>34 000 руб.</p>
									<a
										href='/products/1.html'
										className='btn btn-outline-primary'>
										Заказать
									</a>
								</div>
							</div>
						</div>
						<div className='col-4'>
							<div className='card catalog-item-card'>
								<img
									src='./img/products/sandals_keira.jpg'
									className='card-img-top img-fluid'
									alt="Босоножки 'Keira'"
								/>
								<div className='card-body'>
									<p className='card-text'>Босоножки 'Keira'</p>
									<p className='card-text'>7 600 руб.</p>
									<a
										href='/products/1.html'
										className='btn btn-outline-primary'>
										Заказать
									</a>
								</div>
							</div>
						</div>
						<div className='col-4'>
							<div className='card catalog-item-card'>
								<img
									src='./img/products/superhero_sneakers.jpg'
									className='card-img-top img-fluid'
									alt='Супергеройские кеды'
								/>
								<div className='card-body'>
									<p className='card-text'>Супергеройские кеды</p>
									<p className='card-text'>1 400 руб.</p>
									<a
										href='/products/1.html'
										className='btn btn-outline-primary'>
										Заказать
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='text-center'>
						<button className='btn btn-outline-primary'>Загрузить ещё</button>
					</div>
				</section>
			</div>
		</div>
	);
}

export default IndexLoaded;
