import Order from '../Order/Order';
import { Item } from '../../interface/interface';
import style from './cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../store/cartSlice';
import EmptyCart from '../EmptyCart/EmptyCart';

function Cart() {
	const cartItems: Item['id'][] = useSelector(
		(state: { cart: { items: Item['id'][] } }) => state.cart.items
	);
	const dispatch = useDispatch();

	function handleRemoveItem(id: Item['id']) {
		dispatch(removeItem(id));
	}

	function addToCart(item: Item['id']) {
		dispatch(addItem(item));
	}

	return (
		<>
			<section className={style.cart}>
				<h2 className={style.cart_title}>Корзина</h2>
				{cartItems.length ? (
					cartItems.map((item: Item['id']) => {
						return (
							<div>{item}</div>
							 // <CartItem
							 // 	key={item.id}
								// elem={item}
							 // 	handleRemove={handleRemoveItem}
								// addToCart={addToCart}
							 // />
						);
					})
				) : (
					<EmptyCart />
				)}
			</section>

			<button onClick={ () => addToCart(10)}>addToCart</button>
			<button onClick={ () => handleRemoveItem(10)}>removeItem</button>

			<Order />
		</>
	);
}

export default Cart;
