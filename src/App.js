import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const onHandlerClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Header><CartWidget onHandlerClick={onHandlerClick}/></Header>
      <ItemListContainer onClose={onHandlerClick} isOpen={isOpen}/>
    </div>
  );
}

export default App;
