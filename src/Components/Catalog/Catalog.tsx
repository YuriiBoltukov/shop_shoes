import { useState } from 'react';
import style from './catalog.module.scss';
import { categories } from '../../MOCK/categories';
import { products } from '../../MOCK/products';
import Card from '../Card/Card';

function Catalog() {
	const categoriesList = categories;
	const [selectedCategory, setSelectedCategory] = useState<string>('Все');
	const [searchValue, setSearchValue] = useState<string>('');
	const itemList = products;

	function handleCategoryClick(categoryTitle: string) {
		setSelectedCategory(categoryTitle);
	}

	function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
		setSearchValue(event.target.value);
	}

	return (
		<section className={style.catalog}>
			<h2 className={style.catalog_title}>Каталог</h2>
			<form className={style.catalog_search}>
				<input
					className={style.catalog_search_input}
					placeholder='Поиск'
					value={searchValue}
					onChange={handleSearchChange}
				/>
			</form>
			<ul className={style.catalog_categories}>
				{categoriesList.map(el => {
					const isActive = selectedCategory === el.title;
					return (
						<li className={style.catalog_nav} key={el.id}>
							<a
								className={`${style.nav_link} ${
									isActive ? style.catalog_nav_active : ''
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
					.filter(product => {
						if (selectedCategory === 'Все') {
							return product.title
								.toLowerCase()
								.includes(searchValue.toLowerCase());
						} else {
							return (
								product.category === selectedCategory &&
								product.title.toLowerCase().includes(searchValue.toLowerCase())
							);
						}
					})
					.map(product => {
						return <Card key={product.id} product={product} />;
					})}
			</div>
		</section>
	);
}

export default Catalog;
