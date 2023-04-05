import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import style from './card.module.scss';
import { Autoplay, EffectFade } from 'swiper';

function Card(props: any) {
	return (
		<div className={style.card}>
			<div className={style.card_slider}>
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					autoplay={{ delay: 2000 }}
					loop={true}
					modules={[Autoplay, EffectFade]}>
					{props.product.images.map((el: any, i: number) => {
						return (
							<SwiperSlide key={i}>
								<div className={style.box}>
									<img
										src={el}
										className='card_img'
										width={'150px'}
										height={'150px'}
										alt="Босоножки 'Keira'"
									/>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<div className='card-body'>
				<h5 className='card-title'>{props.product.title}</h5>
				<p className='card-text'>{props.product.price} руб.</p>
				<a href='!#' className='btn btn-primary'>
					Заказать
				</a>
			</div>
		</div>
	);
}

export default Card;
