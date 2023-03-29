import React from 'react';
import style from './notfound.module.scss';

function NotFound() {
	return (
		<section className={style.notfound}>
			<h2 className={style.notfound_title}>Страница не найдена</h2>
			<p className={style.notfound_text}>
				Извините, такая страница не найдена!
			</p>
		</section>
	);
}

export default NotFound;
