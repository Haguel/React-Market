import React from 'react'
import { useSelector, shallowEqual } from "react-redux";

import Item from './Item'
import { fetchProducts } from "../../Redux/actions/products";

import '../../Styles/Main/Products.scss'

export default function Products({dispatch}) {
  const {items, searchedWord} = useSelector(({products}) => products)
  const {sortOptions} = useSelector(({sort}) => sort, shallowEqual)

  // Загрузка продуктов с учетом сортировки
  React.useEffect(() => {
    fetchProducts(sortOptions, dispatch)
  }, [sortOptions])
  return (
    <section className='products-container'>
      {
        items.map((item, id) => (
          <Item 
          dispatch = {dispatch}
          item = {item}
          searchedWord={searchedWord}
          key={id}/>
        ))
      }
    </section>
  )
}
