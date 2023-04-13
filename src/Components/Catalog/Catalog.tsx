import {useState} from 'react';
import style from './catalog.module.scss';
import {categories} from '../../MOCK/categories';
import Card from '../Card/Card';
import {useDispatch, useSelector} from "react-redux";
import {Item} from "../../interface/interface";
import {SearchState} from "../../store/searchSlice";
import {searchQuery} from '../../store/searchSlice';

function Catalog() {
    const categoriesList = categories;
    const [selectedCategory, setSelectedCategory] = useState<string>('Все');
    const [numItemsToShow, setNumItemsToShow] = useState<number>(10);
    const dispatch = useDispatch()
    const itemList = useSelector(
        (state: { products: { items: Item[] } }) => state.products.items
    );

    const query = useSelector((state: { search: SearchState }) => state.search.searchStr);


    function handleCategoryClick(categoryTitle: string) {
        setSelectedCategory(categoryTitle);
        setNumItemsToShow(10);
    }

    function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(searchQuery(event.target.value));
        setNumItemsToShow(10);
    }

    function handleLoadMoreClick() {
        setNumItemsToShow(prevNumItems =>
            Math.min(prevNumItems + 5, itemList.length)
        );
    }

    return (
        <section className={style.catalog}>
            <h2 className={style.catalog_title}>Каталог</h2>
            <form className={style.catalog_search}>
                <input
                    className={style.catalog_search_input}
                    placeholder='Поиск'
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
                                .includes(query);
                        } else {
                            return (
                                product.category === selectedCategory &&
                                product.title.toLowerCase().includes(query)
                            );
                        }
                    })
                    .slice(0, numItemsToShow)
                    .map(product => {
                        return <Card key={product.id} product={product}/>;
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
