import React from 'react';
import style from './cartItem.module.scss';

function CartItem() {
	return (
		<div className={style.cart_item}>
			<div className={style.cart_item_image}>
				<img src='https://via.placeholder.com/150' alt='shoe' />
			</div>
			<div className={style.cart_item_details}>
				<div className={style.cart_item_name}>Мужские кроссовки Nike</div>
				<div className={style.cart_item_price}>2000 руб.</div>
				<div className={style.cart_item_quantity}>
					<label htmlFor='quantity'>Количество:</label>
					<input
						type='number'
						id='quantity'
						name='quantity'
						min='1'
						defaultValue='1'
					/>
				</div>
				<button className={style.cart_item_remove}>Удалить</button>
			</div>
		</div>
	);
}

export default CartItem;
