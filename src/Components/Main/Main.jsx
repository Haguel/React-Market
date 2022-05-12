import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import Header from "./Header";
import Products from "./Products";
import Sort from "./Sort";
import Catalogue from "./Catalogue";

export default function Main() {
  const dispatch = useDispatch()
  const {isCatalogueOpen} = useSelector(({catalogue}) => catalogue, shallowEqual)
  return (
    <div className={isCatalogueOpen ? "main-container-with-catalogue" : "main-container"}>
      <main>
        <Header dispatch = {dispatch}/>
        <Sort dispatch = {dispatch}/>
        <Products dispatch = {dispatch}/>
      </main>
      <Catalogue/>
    </div>
  )
}
