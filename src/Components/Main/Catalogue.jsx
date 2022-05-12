import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { setProductType } from '../../Redux/actions/sort'
import { setCatalogueActiveType, catalogueHandler } from '../../Redux/actions/catalogue'

import "../../Styles/Main/Catalogue.scss"

export default function Catalogue() {
  const dispatch = useDispatch()
  const {productTypes} = useSelector(({catalogue}) => catalogue)

  const getCatalogueType = (typeOption, id) => {
    dispatch(setProductType(typeOption))
    dispatch(setCatalogueActiveType(id))
  }
  return (
    <div className='catalogue'>
        <div className='catalogue-title'>Каталог товаров</div>
        <div className='product-types-container'>
            {
                productTypes.map((type, id) => (
                    <button 
                    className={type.isActive ? "product-type--active" : "product-type"}
                    key={id}
                    onClick={() => getCatalogueType(type.option, id)}>
                      {type.title}
                    </button>
                ))
            }
        </div>
        <button className='close-catalogue-button' onClick={() => dispatch(catalogueHandler())}>
          Закрыть каталог
        </button>
    </div>
  )
}
