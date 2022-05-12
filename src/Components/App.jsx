import React from "react";
import {Routes, Route} from "react-router"

import Cart from "./Cart/Cart";
import Main from "./Main/Main";

import '../Styles/Main/App.scss'

function App() {
  return (    
    <>
      <Routes>
        <Route path="/" exact element={<Main />}/>
        <Route path="/Cart" element={<Cart />}/>
      </Routes>
    </>
  );
}

export default React.memo(App);
