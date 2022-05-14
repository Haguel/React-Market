import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/Cart/EmptyCartMessage.scss'

export default function EmptyCartMessage() {
  return (
      <div className='empty-cart-message'>
          <div>Ваша корзина пустая. </div>
          <Link to='/' className='cart-button main-link'>Вернуться к покупкам</Link>
      </div>
  )
}
