import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper';
import {Item} from '../../interface/interface';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, CartItemInterface, decreaseQuantity, increaseQuantity} from '../../store/cartSlice';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import style from './card.module.scss';

interface CardProps {
    product: Item;
}

function Card({product}: CardProps) {
    const dispatch = useDispatch()
    const cartData = useSelector((state: { cart: { items: CartItemInterface[] } }) => searchCartItem(state.cart.items))

    function increment(): void {
        dispatch(increaseQuantity(product.id))
    }

    function decrement(): void {
       dispatch(decreaseQuantity(product.id))
    }



    function searchCartItem(items: CartItemInterface[]) {
        return items.find((item) => {
            return item.id === product.id
        })
    }
    console.log(cartData)

    return (
        <div className={style.card}>
            <div className={style.card_slider}>
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
                </Swiper>
            </div>
            <h5 className='card-title'>{product.title}</h5>
            <p className='card-text'>{product.price} руб.</p>
            {
                cartData ? <div className={style.card_defineNumber}>
                        <button className={style.card_defineNumber_btn} onClick={() => decrement()}>-</button>
                        <input className={style.card_defineNumber_input} type={"number"} value={cartData.quantity}/>
                        <button className={style.card_defineNumber_btn} onClick={() => increment()}>+</button>
                    </div> :
                    <button className={style.card_btn} onClick={() => dispatch(addItem({id: product.id, quantity: 1}))}>
                        Заказать
                    </button>
            }


        </div>
    );
}

export default Card;
