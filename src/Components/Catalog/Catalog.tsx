import { useState } from 'react';
import style from './catalog.module.scss';
import { categories } from '../../MOCK/categories';
import Card from '../Card/Card';
import {useSelector} from "react-redux";
import {Item} from "../../interface/interface";

function Catalog() {
	const categoriesList = categories;
	const [selectedCategory, setSelectedCategory] = useState<string>('Все');
	const [searchValue, setSearchValue] = useState<string>('');
	const [numItemsToShow, setNumItemsToShow] = useState<number>(8);
	const itemList =  useSelector(
		(state: { products: { items: Item[] } }) => state.products.items
	);

	function handleCategoryClick(categoryTitle: string) {
		setSelectedCategory(categoryTitle);
		setNumItemsToShow(8);
	}

	function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
		setSearchValue(event.target.value);
		setNumItemsToShow(8);
	}

	function handleLoadMoreClick() {
		setNumItemsToShow(prevNumItems =>
			Math.min(prevNumItems + 8, itemList.length)
		);
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
					.slice(0, numItemsToShow)
					.map(product => {
						return <Card key={product.id} product={product} />;
					})}
			</div>
			<div className={style.catalog_load}>
				{numItemsToShow < itemList.length && (
					<button
						className={style.catalog_load_btn}
						onClick={handleLoadMoreClick}>
						Загрузить ещё
					</button>
				)}
			</div>
		</section>
	);
}

export default Catalog;
