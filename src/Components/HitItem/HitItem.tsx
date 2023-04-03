import React from 'react';
import { Item } from '../../interface/interface';
import style from './hit.module.scss';

function HitItem({ item }: { item: Item }) {
	return (
		<div className={style.hit}>
			<div>
				<img
					className={style.hit_image}
					src={item.images[0]}
					alt={item.title}
				/>
				<h3 className={style.hit_title}>{item.title}</h3>
				<p className={style.hit_price}>{item.price} руб.</p>
			</div>
			<button className={style.hit_btn}>В корзину</button>
		</div>
	);
}

export default HitItem;
