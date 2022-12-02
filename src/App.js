import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <CartWidget />  
      </header>
      <ItemListContainer greeting='Hello world'/>
    </div>
  );
}

export default App;
