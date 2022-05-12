import React from 'react'
import { useSelector, shallowEqual} from 'react-redux'

import CartHeader from './CartHeader'
import CartMenu from './CartMenu'
import CartTotal from './CartTotal'
import EmptyCartMessage from './EmptyCartMessage'

import '../../Styles/Cart/Cart.scss'

export default function Cart() {
  const {isEmpty} = useSelector(({cart}) => cart, shallowEqual)

  return (
    <>
         <div className='cart'>
            <CartHeader />
            {
              isEmpty
              ? <EmptyCartMessage />
              : <>
                  <CartMenu />
                  <CartTotal />
                </>
            }
          </div>
    </>
  )
}
