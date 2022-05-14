import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../Images/Logo.svg'

import "../../Styles/Cart/CartHeader.scss"

export default function CartHeader() {
  return (
    <header className='cart-header'>
      <Link to="/"><img src={logo} alt="Logo"/></Link>
    </header>
  )
}
