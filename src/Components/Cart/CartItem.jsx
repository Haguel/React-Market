import React from 'react'

import {removeItem, setAmount } from '../../Redux/actions/cart'

import '../../Styles/Cart/CartItem.scss'

export default function CartItem({item, id, dispatch}) {
  const inputRef = React.useRef(null)
  const [amount, changeAmount] = React.useState(item.amount)

  const amountInput = (input, id) => {
    if(input === '' || input <= 0 || input >= 99){
      changeAmount(item.amount)
    } else {
      dispatch(setAmount({
        input: input,
        id: id,
      }))
    }
  }

  React.useEffect(() => {
    changeAmount(item.amount)
  }, [item.amount])
  return (
    <div className='cart-item'>
      <div className='cart-product-container'>
        <div className='cart-product-image'><img src={item.image} alt={item.alt} /></div>
        <div className='cart-product-info'>
            <div className='cart-product-title'>{item.title}</div>
            <div className='cart-price-info'>
              <div className='cart-product-price'>{item.totalPrice} грн/кг</div>
              <div className='cart-product-amount-container'>
                <span>Кол-во:</span>
                <div className='cart-product-amount'>
                  <button className='item-amount-button add-amount' onClick={() => amountInput("+", id)}>+</button>
                  <input 
                  ref={inputRef} 
                  type="number" 
                  className='amount' 
                  value={amount} 
                  onInput={(e) => changeAmount(e.target.value)}
                  onBlur={() => amountInput(amount, id)}/>
                  <button className='item-amount-button deduct-amount' onClick={() => amountInput("-", id)}>-</button>
                </div>
              </div>
            </div>
        </div>
      </div>
      <button className='cart-delete-button' onClick={() => dispatch(removeItem(id))}>Убрать</button>
    </div>
  )
}
