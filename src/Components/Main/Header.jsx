import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { setSearchedWord } from '../../Redux/actions/products'
import { catalogueHandler } from '../../Redux/actions/catalogue'
import logo from '../../Images/Logo.svg'
import cart from '../../Images/Cart.svg'

import '../../Styles/Main/Header.scss'

export default function Header({dispatch}) {
  const {totalAmount} = useSelector(({cart}) => cart)

  const inputRef = React.useRef(null)
  const cartLink = React.useRef(null)

  React.useEffect(() => {
    inputRef.current.addEventListener('input', () => {
      dispatch(setSearchedWord(inputRef.current.value))
    })
  }, [])
  return (
    <header className='header'>
      <Link to="/" className='logo-link'><img src={logo}/></Link>
      <section>
          <input type="text" className='search-input' placeholder='Поиск' ref={inputRef}></input>
          <button className='catalogue-button' onClick={() => dispatch(catalogueHandler())}>Каталог</button>
          <div className='cart-link-container'>
            <Link to="/Cart" className='cart-link' ref={cartLink}>
              <img src={cart}/>
              <div className='cart-amount'>{totalAmount}</div>
            </Link>
          </div>
      </section>
    </header>
  )
}
