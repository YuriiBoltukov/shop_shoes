import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import Order from '../Order/Order';
import style from './cart.module.scss';

function Cart() {
	const [cart, setCart] = useState();
	return (
		<>
			<section className={style.cart}>
				<h2 className={style.cart_title}>Корзина</h2>
				<table className={style.cart_table}>
					<thead>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Название</th>
							<th scope='col'>Размер</th>
							<th scope='col'>Кол-во</th>
							<th scope='col'>Стоимость</th>
							<th scope='col'>Итого</th>
							<th scope='col'>Действия</th>
						</tr>
					</thead>
					<CartItem />
				</table>
			</section>
			<Order />
		</>
	);
}

export default Cart;
