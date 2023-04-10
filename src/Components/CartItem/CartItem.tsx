import React from 'react';
import style from './cartItem.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {CartItemInterface, removeItem, increaseQuantity, decreaseQuantity } from "../../store/cartSlice";
import {Item} from "../../interface/interface";

function CartItem({item}: {
  item: CartItemInterface;
}) {
  const product: Item = useSelector(
    (state: { products: { items: Item[] } }) => {
      return state.products.items.find(el => el.id === item.id) ?? {} as Item
    }
  );
  const cartProduct: CartItemInterface = useSelector(
    (state: { cart: { items: CartItemInterface[] } }) => {
      return state.cart.items.find(el => el.id === item.id) ?? {} as CartItemInterface
    }
  );
  const dispatch = useDispatch();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    //setAmount(parseInt(event.target.value));
  }

  function handleRemoveItem(id: any): void {
    dispatch(removeItem(id));
  }
  function handleIncreaseQuantity(id: any) {
    dispatch(increaseQuantity(id));
  }

  function handleDecreaseQuantity(id: any) {
    dispatch(decreaseQuantity(id));
  }

  return (
    <div className={style.cart_item}>
      <div className={style.cart_item_image}>
        <img src={product.images[0]} alt='shoe'/>
      </div>
      <div className={style.cart_item_details}>
        <div className={style.cart_item_name}>{product.title}</div>
        <div className={style.cart_item_price}>{product.price * cartProduct.quantity} руб.</div>
        <div className={style.cart_item_quantity}>
          <label htmlFor='quantity'>Количество:</label>
          <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
          <input
            type='number'
            id='quantity'
            name='quantity'
            min='1'
            value={cartProduct.quantity}
            onChange={handleInputChange}
          />
          <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
        </div>
        <button
          onClick={() => handleRemoveItem(product.id)}
          className={style.cart_item_remove}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default CartItem;
