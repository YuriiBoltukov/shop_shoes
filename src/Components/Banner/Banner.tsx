import React from 'react';
import banner from './banner.jpg';
import style from './banner.module.scss';

function Banner() {
	return (
		<div className={style.banner}>
			<img src={banner} className={style.banner_img} alt='К весне готовы!' />
			<h2 className={style.banner_header}>К весне готовы!</h2>
		</div>
	);
}

export default Banner;
