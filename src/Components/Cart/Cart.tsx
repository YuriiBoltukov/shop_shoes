import CartItem from '../CartItem/CartItem';
import Order from '../Order/Order';
import style from './cart.module.scss';

function Cart() {
	return (
		<>
			<section className={style.cart}>
				<h2 className={style.cart_title}>Корзина</h2>
				<CartItem />
			</section>
			<Order />
		</>
	);
}

export default Cart;
