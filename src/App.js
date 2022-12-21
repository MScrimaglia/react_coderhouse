import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import ItemListContainer from './components/item-list-container';
import CartWidget from './components/cart-widget';
import Router from './router';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <ItemListContainer onClose={onClickHandler} isOpen={isOpen}/>
      <Header><CartWidget onClickHandler={onClickHandler}/></Header>
      <Router/>
    </div>
  );
}

export default App;
