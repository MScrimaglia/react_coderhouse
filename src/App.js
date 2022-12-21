import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting='Hello world'/>
    </div>
  );
}

export default App;
