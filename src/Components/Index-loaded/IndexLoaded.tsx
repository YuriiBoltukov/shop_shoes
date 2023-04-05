import { products } from '../../MOCK/products';
import style from './idexLoaded.module.scss';
import Catalog from '../Catalog/Catalog';
import Card from '../Card/Card';

function IndexLoaded() {
	const hits = getRandomItems(products);
	function getRandomItems(items: any[]): any[] {
		const shuffled = items.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, 3);
	}

	return (
		<div className={style.index}>
			<section className={style.index_hits}>
				<h2 className={style.index_title}>Хиты продаж!</h2>
				<div className={style.index_hits_wrapper}>
					{hits.map((product, index) => {
						return <Card key={index} product={product} />;
					})}
				</div>
			</section>
			<section className='catalog'>
				<Catalog />
			</section>
		</div>
	);
}

export default IndexLoaded;
