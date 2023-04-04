import React from 'react';
import FooterNavigation from '../../Components/FooterNavigation/FooterNavigation';
import style from './footer.module.scss';
import webmoney from '../../assets/pngegg.png';
import paypal from '../../assets/pp.png';
import mastercard from '../../assets/mastercard.png';
import visa from '../../assets/visa.png';
import yandex from '../../assets/yandex.png';
import qiwi from '../../assets/qiwi.png';

function Footer() {
	return (
		<div className={style.container}>
			<div className={style.footer}>
				<div className={style.footer_info}>
					<h5>Информация</h5>
					<FooterNavigation />
				</div>
				<div className={style.footer_pay_information}>
					<div className={style.footer_pay_information_systems}>
						<h5>Принимаем к оплате:</h5>
						<div className={style.footer_pay_information_sprite}>
							<span>
								<img src={paypal} alt='paypal' />
							</span>
							<span>
								<img src={mastercard} alt='mastercard' />
							</span>
							<span>
								<img src={visa} alt='visa' />
							</span>
							<span>
								<img src={yandex} alt='yandex' />
							</span>
							<span>
								<img src={webmoney} alt='webmoney' />
							</span>
							<span>
								<img src={qiwi} alt='qiwi' />
							</span>
						</div>
					</div>

					<div className={style.footer_copyright}>
						2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
						аксессуаров. Все права защищены. Доставка по всей России!
					</div>
				</div>

				<div className={style.footer_contacts}>
					<h5>Контакты:</h5>
					<a
						className={style.footer_contacts_phone}
						href='tel:+7-495-790-35-03'>
						+7 495 79 03 5 03
					</a>
					<span className='footer-contacts-working-hours'>
						Ежедневно: с 09-00 до 21-00
					</span>
					<a className='footer-contacts-email' href='mailto:office@bosanoga.ru'>
						office@bosanoga.ru
					</a>
					<div className={style.footer_social_links}>
						<div className={style.footer_social_link_twitter}></div>
						<div className={style.footer_social_link_vk}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
