import React, { useState } from 'react';
import { CartItemProps } from '../../interface/interface';
import style from './cartItem.module.scss';

function CartItem({ elem, handleRemove }: CartItemProps) {
	const [amount, setAmount] = useState(1);
	let resAmount = elem.price * amount;
	console.log(elem);
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		setAmount(parseInt(event.target.value));
		console.log(amount);
	}

	return (
		<div className={style.cart_item}>
			<div className={style.cart_item_image}>
				<img src={elem.images[0]} alt='shoe' />
			</div>
			<div className={style.cart_item_details}>
				<div className={style.cart_item_name}>{elem.title}</div>
				<div className={style.cart_item_price}>{resAmount}</div>
				<div className={style.cart_item_quantity}>
					<label htmlFor='quantity'>Количество:</label>
					<input
						type='number'
						id='quantity'
						name='quantity'
						min='1'
						defaultValue={amount}
						onChange={handleInputChange}
					/>
				</div>
				<button
					onClick={() => handleRemove(elem.id)}
					className={style.cart_item_remove}>
					Удалить
				</button>
			</div>
		</div>
	);
}

export default CartItem;
