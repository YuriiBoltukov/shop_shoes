import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import style from './info.module.scss'
import {Autoplay, EffectFade} from "swiper";
import {useDispatch} from "react-redux";
import {addItem} from "../../store/cartSlice";

function InfoCard() {
    const product = {
        id: 21,
        category: 'Женская обувь',
        title: 'Туфли принцессы',
        images: [
            'https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/princess_shoes.jpg',
            'https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/princess_shoes_2.jpg',
        ],
        sku: '1000001',
        manufacturer: 'Dolce & Gabbana',
        color: 'Фиолетовый',
        material: 'Бархат',
        reason: 'Высока мода',
        season: 'Лето',
        heelSize: '7 см.',
        price: 3000,
        sizes: [
            {
                size: '12 US',
                available: true,
            },
            {
                size: '16 US',
                available: false,
            },
        ],
    }

    const dispatch = useDispatch()


    return (
        <div className={style.info}>
            <div className={style.info_slider}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{delay: 2000}}
                    loop={true}
                    modules={[Autoplay, EffectFade]}>
                    {product.images.map((el: any, i: number) => {
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
                </Swiper></div>
            <div className={style.info_description}>
                <h3 className={style.info_description_title}>{product.title}</h3>
                <p className={style.info_description_price}>{product.price}</p>
                <p className={style.info_description_color}>{product.color}</p>
                <p className={style.info_description_manufacture}>{product.manufacturer}</p>
                <div className={style.info_description_size}>
                    sizes: {
                    product.sizes.map((el, i) => {
                        return el.available ? <span key={i}>{el.size}</span> : null
                    })
                }
                </div>
                <button className={style.info_description_btn} onClick={() => dispatch(addItem({id: product.id, quantity: 1}))}>aad to cart</button>
            </div>
        </div>
    );
}

export default InfoCard;
