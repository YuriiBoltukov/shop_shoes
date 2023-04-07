import CartItem from '../CartItem/CartItem';
import Order from '../Order/Order';
import { Item } from '../../interface/interface';
import style from './cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../store/cartSlice';
import EmptyCart from '../EmptyCart/EmptyCart';

function Cart() {
	const cartItems = useSelector(
		(state: { cart: { items: Item[] } }) => state.cart.items
	);
	const dispatch = useDispatch();

	function handleRemoveItem(id: number) {
		dispatch(removeItem(id));
	}

	function addToCart(item: Item) {
		dispatch(addItem(item));
	}

	return (
		<>
			<section className={style.cart}>
				<h2 className={style.cart_title}>Корзина</h2>
				{cartItems.length ? (
					cartItems.map((item: Item) => {
						return (
							<CartItem
								key={item.id}
								elem={item}
								handleRemove={handleRemoveItem}
								addToCart={addToCart}
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
