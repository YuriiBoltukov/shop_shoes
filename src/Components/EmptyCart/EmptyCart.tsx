import style from './empty.module.scss';
import { Link } from 'react-router-dom';

function EmptyCart() {
	return (
		<section className={style.empty}>
			<h2>Вы еще ничего не добавили в корзину</h2>
			<p>поторопитесь, пока нужный вам товар не купили другие пользователи</p>
			<button className={style.empty_btn}>
				<Link to='/Catalog'>Перейти в каталог</Link>
			</button>
		</section>
	);
}

export default EmptyCart;
