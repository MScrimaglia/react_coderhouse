import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import CartWidget from './components/CartWidget';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <CartWidget />  
      </header>
      
    </div>
  );
}

export default App;
