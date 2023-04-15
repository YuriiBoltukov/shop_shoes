import Order from '../Order/Order';
import style from './cart.module.scss';
import { useSelector } from 'react-redux';
import EmptyCart from '../EmptyCart/EmptyCart';
import {CartItemInterface} from "../../store/cartSlice";
import CartItem from '../CartItem/CartItem';


function Cart() {
	/**
	 * Здесь хранится ссылка на состояние стэйта корзины
	 * а из этого следует, что когда в корзине что-то изменится, что-то добавится или удалится, то здесь у тебя будет ТЕКУЩЕЕ ОБНОВЛЕННОЕ СОСТОЯНИЕ
	 */
	const cartItems: CartItemInterface[] = useSelector(
		(state: { cart: { items: CartItemInterface[] } }) => state.cart.items
	);

	return (
		<>
			<section className={style.cart}>
				<h2 className={style.cart_title}>Корзина</h2>
				{cartItems.length ? (
					cartItems.map((item: CartItemInterface) => {
						return (
							 <CartItem
							 	key={item.id}
								item={item}
							 />
						);
					})
				) : (
					<EmptyCart />
				)}
			</section>

			<Order />
		</>
	);
}

export default Cart;
