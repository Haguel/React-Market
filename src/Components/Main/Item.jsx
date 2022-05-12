import React from 'react'

import { addItem } from '../../Redux/actions/cart'

export default function Item({item, searchedWord, dispatch}) {
  return (
    <>
      {
        item.title.toLowerCase().includes(searchedWord.trim().toLowerCase()) && 
        <div className='css-size'>
            <div className='product-container'>
                <div className="product-image">
                  <img src={item.image} alt={item.alt}/>
                </div>
                <div className="under-image-block">
                  <div className="info">
                      <div className="description">{item.title}</div>
                      <div className="price">{item.price} грн/кг</div>
                  </div>
                  <button className='buy-button' onClick={() => dispatch(addItem(item))}>+</button>
                </div>
            </div>
        </div>
      }
    </>
  )
}
