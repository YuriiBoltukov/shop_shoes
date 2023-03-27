import React from 'react';
import style from './card.module.scss';

function Card(props: any) {
	return (
		<div className={style.card}>
			{props.product.images.map((el: any, i: number) => {
				return (
					<img
						key={i}
						src={el}
						className={style.card_img}
						alt="Босоножки 'Keira'"
					/>
				);
			})}
			<div className={style.card_body}>
				<p className={style.card_body_title}>{props.product.title}</p>
				<p className={style.card_body_text}>{props.product.price} руб.</p>
				<a href='/products/1' className={style.card_body_btn}>
					Заказать
				</a>
			</div>
		</div>
	);
}

export default Card;
