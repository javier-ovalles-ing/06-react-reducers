
import './App.css';
import Contador from './components/Contador';
import ContadorMejorado from './components/ContadorMejorado';
import CrudApi from './components/CrudApi';
import ShopingCart from './components/ShopingCart';

function App() {
  return (
  <div>
    <h1>useReducer</h1>
    <hr/>
    <CrudApi/>
    <hr/>
    <ShopingCart/>
       <hr/>
    <ContadorMejorado/>
       <hr/>
     <Contador/>
  </div>
  );
}

export default App;
