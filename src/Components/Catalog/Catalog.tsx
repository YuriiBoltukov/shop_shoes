import React from 'react';
import style from './catalog.module.scss';
import { categories } from '../../MOCK/categories';
import { products } from '../../MOCK/products';
import Card from '../Card/Card';

function Catalog() {
	const categoriesList = categories;
	const itemList = products;
	return (
		<section className='catalog'>
			<h2 className='text-center'>Каталог</h2>
			<form className='catalog-search-form form-inline'>
				<input className='form-control' placeholder='Поиск' />
			</form>
			<ul className='catalog-categories nav justify-content-center'>
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
			<div className={style.catalog_products}>
				{itemList.map(product => {
					return <Card key={product.id} product={product} />;
				})}
			</div>
		</section>
	);
}

export default Catalog;
