import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { emptyCart } from '../../Redux/actions/cart'
import CartItem from './CartItem'

import '../../Styles/Cart/CartMenu.scss'

export default function CartMenu() {
  const {cartItems} = useSelector(({cart}) => cart)
  const dispatch = useDispatch()
  return (
    <section className='cart-menu'>
        <div className='cart-buttons-container'>
            <Link to='/' className='cart-button main-link'>Вернуться к покупкам</Link>
            <button className='cart-button' onClick={() => dispatch(emptyCart())}>Очистить корзину</button>
        </div>
        {
          cartItems.map((item, id) => (
            <CartItem key = {id} item = {item} id = {id} dispatch = {dispatch}/>
          ))
        }
    </section>
  )
}
