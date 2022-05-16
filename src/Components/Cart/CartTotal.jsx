import React from 'react'
import { useSelector } from 'react-redux'

import '../../Styles/Cart/CartTotal.scss'

export default function CartTotal() {
  const {totalPrice} = useSelector(({cart}) => cart);
  return (
    <div className='cart-total'>
        <div className="total-price">К оплате <span>{totalPrice} грн</span></div>
        <button className="paid-link">Перейти к оплате</button>
    </div>
  )
}
