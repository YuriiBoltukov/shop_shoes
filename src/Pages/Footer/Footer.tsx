import React from 'react';
import FooterNavigation from '../../Components/FooterNavigation/FooterNavigation';
import style from './footer.module.scss';
import webmoney from '../../assets/pngegg.png';
import paypal from '../../assets/pp.png';
import mastercard from '../../assets/mastercard.png';
import visa from '../../assets/visa.png';
import yandex from '../../assets/yandex.png';
import qiwi from '../../assets/qiwi.png';
import twitter from '../../assets/twitter.png';
import vk from '../../assets/vk.png'

function Footer() {
    return (
        <div className={style.container}>
            <div className={style.footer}>
                <div className={style.footer_info}>
                    <h5>Информация</h5>
                    <FooterNavigation/>
                </div>
                <div className={style.footer_pay_information}>
                    <div className={style.footer_pay_information_systems}>
                        <h5>Принимаем к оплате:</h5>
                        <div className={style.footer_pay_information_sprite}>
							<span className={style.footer_paypal}>
								<img src={paypal} alt='paypal'/>
							</span>
                            <span className={style.footer_mastercard}>
								<img src={mastercard} alt='mastercard'/>
							</span>
                            <span className={style.footer_visa}>
								<img src={visa} alt='visa'/>
							</span>
                            <span className={style.footer_yandex}>
								<img src={yandex} alt='yandex'/>
							</span>
                            <span className={style.footer_webmoney}>
								<img src={webmoney} alt='webmoney'/>
							</span>
                            <span className={style.footer_qiwi}>
								<img src={qiwi} alt='qiwi'/>
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
                    <span className='footer_contacts_working_hours'>
						Ежедневно: с 09-00 до 21-00
					</span>
                    <a className='footer_contacts_email' href='mailto:office@bosanoga.ru'>
                        office@bosanoga.ru
                    </a>
                    <div className={style.footer_social_links}>
                        <div className={style.footer_social_links_twitter}>
                            <a href='#!'>
                                <img src={twitter} alt={'twitter'}/>
                            </a>
                        </div>
                        <div className={style.footer_social_links_vk}>
                            <a href='#!'>
                                <img src={vk} alt={'vk'}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
