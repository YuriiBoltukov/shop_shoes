import { useState } from 'react';
import style from './catalog.module.scss';
import { categories } from '../../MOCK/categories';
import { products } from '../../MOCK/products';
import Card from '../Card/Card';

function Catalog() {
	const categoriesList = categories;
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const itemList = products;

	function handleCategoryClick(categoryTitle: string) {
		setSelectedCategory(categoryTitle);
	}

	return (
		<section className={style.catalog}>
			<h2 className={style.catalog_title}>Каталог</h2>
			<form className={style.catalog_search}>
				<input className={style.catalog_search_input} placeholder='Поиск' />
			</form>
			<ul className={style.catalog_categories}>
				{categoriesList.map(el => {
					return (
						<li className='nav-item' key={el.id}>
							<a
								className={`nav-link ${
									selectedCategory === el.title ? 'active' : ''
								}`}
								href='#!'
								onClick={() => handleCategoryClick(el.title)}>
								{el.title}
							</a>
						</li>
					);
				})}
			</ul>
			<div className={style.catalog_products}>
				{itemList
					.filter(product =>
						selectedCategory === 'Все'
							? true
							: product.category === selectedCategory
					)
					.map(product => {
						return <Card key={product.id} product={product} />;
					})}
			</div>
		</section>
	);
}

export default Catalog;
