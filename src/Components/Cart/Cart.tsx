import { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import Order from '../Order/Order';
import { Item } from '../../interface/interface';
import { products } from '../../MOCK/products';
import style from './cart.module.scss';

function Cart() {
	const [cartItems, setCartItems] = useState<Item[]>(products);
	function handleRemoveItem(id: number) {
		const updatedCartItems = cartItems.filter(item => item.id !== id);
		setCartItems(updatedCartItems);
	}
	return (
		<>
			<section className={style.cart}>
				<h2 className={style.cart_title}>Корзина</h2>
				{cartItems.map((item: Item) => {
					return (
						<CartItem
							key={item.id}
							elem={item}
							handleRemove={handleRemoveItem}
						/>
					);
				})}
			</section>
			<Order />
		</>
	);
}

export default Cart;
